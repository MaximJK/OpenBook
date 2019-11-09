class Api::BookshelfBooksController < ApplicationController
    def create
        @bookshelfBook = BookshelfBook.new(bookshelf_book_params)

        if @bookshelfBook.save!
            
            render :show

        else
            render json: @bookshelfBook.errors.full_messages, status: 422
        end
    end

    def destroy
        @bookshelfBook = BookshelfBook.find_by(params[:book_id])
        @bookshelfBook.destroy
    end

    def show
        @bookshelfBook = BookshelfBook.find(params[:id])
        render :show
    end




    private

    def bookshelf_book_params
        params.require(:bookshelfBook).permit(:book_id, :bookshelf_id)
    end
end