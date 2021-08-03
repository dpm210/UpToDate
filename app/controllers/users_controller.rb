class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        users = User.all
        render json: users
    end 

    def create
        newUser = User.create(userparams)
        if newUser.valid?
            render json: newUser, status: :created
        else
            render json: {errors: newUser.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    def show
        user = User.find_by(id: params[:id])
        if user
            render json:user, Serializer: :UsersubsSerializer
        else record_not_found
    end 

    # def show
    #     user = User.find_by(id: session[:id])
    #     if user
    #     render json:user
    #     else record_not_found
    # end 

    end 

    private 

    def record_not_found
        render json: {error: "User not found"}, status: :not_found
    end 

    def userparams
        params.permit(:username, :password)
    end 


end
