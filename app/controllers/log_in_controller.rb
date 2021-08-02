class LogInController < ApplicationController
    def create
        user = User.find_by(username:params[:username])
        if user && user.authenticate(params[:password])
            render json: {id: user.id, username: user.username, password: user.password }
        else 
            render json: {message: ['incorrect user or password']}
        end 
end
