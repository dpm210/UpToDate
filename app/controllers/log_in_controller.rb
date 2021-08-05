class LogInController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        user = User.find_by(username: params[:username]) 
        if user && user.authenticate(params[:password])
            render json: {id:user.id, username: user.username}
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end
    end 

    def destroy
        session.delete :user_id
        head :no_content
    end 

    private 

    # def record_not_found
    #     render json: {error: "User not found"}, status: :not_found
    # end 
end