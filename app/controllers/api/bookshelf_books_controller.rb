class Api::BookshelfBooksController < ApplicationController
    def create
        @bookshelfBook = BookshelfBook.new(bookshelf_book_params)

        if @bookshelfBook.save!
            render :show
        else
            render json: @bookshelfBook.errors.full_messages, status: 422
        end
    end

    def delete
        @bookshelfBook = BookshelfBook.find_by(params[:id])
        @bookshelfBook.destroy
    end



    private

    def bookshelf_book_params
        params.require(:bookshelfBook).permit(:book_id, :bookshelf_id)
    end
end