class Api::BookshelfBooksController < ApplicationController
    def create
    @bookshelfBook = BookshelfBook.create(bookshelf_book_params)
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