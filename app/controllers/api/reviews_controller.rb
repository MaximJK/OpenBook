class Api::ReviewsController < ApplicationController
    def show
        @review = Review.find_by(params[:user_id])

    end

    def index
    
        @reviews = Review.where(book_id: params[:book_id])
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        
        if @review.destroy
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(:book_id, :user_id, :body, :rating)
    end
end