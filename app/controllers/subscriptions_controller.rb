class SubscriptionsController < ApplicationController
    def index
        subscriptions = Subscription.all
        render json: subscriptions
    end

    def create
        subs = Subscription.create(sub_params)
        if subs.valid?
            render json: subs, status: :created
        else
            render json: {errors: subs.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        subs = Subscription.find_by(id: params[:id])
        if subs
            render json: subs
        else
            render json: {"error": "service not found"}, status: :not_found
        end
    end

    private

    def sub_params
        params.permit(:user_id, :service_id)
    end
end
