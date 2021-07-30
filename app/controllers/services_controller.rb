class ServicesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        services = Service.all
        render json: services
    end 


    # def show
    #     render json: services
    # end 


    # private 

    # def record_not_found
    #     render json: {error: "Service not found"}, status: :not_found
    # end 


end
