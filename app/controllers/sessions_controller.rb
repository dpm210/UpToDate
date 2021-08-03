class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
            # json: {id:user.id, username: user.username}
        else
            render json: {"error": "invalid username or password"}, status: :not_found
        end
    end 

    # def create
    #     user = User.find_by(username: params[:username]) 
    #     if user && user.authenticate(params[:password])
    #         render json: {id:user.id, username: user.username}
    #     else
    #         render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    #     end 
    # end 

    def destroy
        session.delete :user_id
        head :no_content
    end 
end 