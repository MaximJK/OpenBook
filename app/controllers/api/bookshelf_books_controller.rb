class Api::BookshelfBooksController < ApplicationController
    def create
    @bookshelfBook = BookshelfBook.create(bookshelfBook_params)
    end

    def delete
    @bookshelfBook = BookshelfBook.find_by(params[:id])
    @bookshelfBook.destroy
    end



private

    def bookshelfBook_params
        params.require(:bookshelfBook).permit(:book_id, :bookshelf_id)
    end
end