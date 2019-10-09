class Api::ReviewsController < ApplicationController
    def show
        @review = Review.find(params[:id])
    end

    def index
        @reviews = Review.find(params[:book_id])
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        
        if @review.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(:user_id, :book_id, :body, :rating)
    end
end