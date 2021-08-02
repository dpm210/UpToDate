class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found


    def index
        users = User.all
        render json: users
    end 

    def create
        # byebug
        user = User.create(userparams)
        if user.valid? && user.authenticate(params[:password])
            # session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    def show
        user = User.find_by(id: session[:user_id])
        if user
        render json:user
        else record_not_found
    end 

    end 

    # def show
    #     user = User.find_by(id: params[:id])
    #     render json:user
    # end 

    private 

    def record_not_found
        render json: {error: "User not found"}, status: :not_found
    end 

    def userparams
        params.permit(:username, :password)
    end 


end
