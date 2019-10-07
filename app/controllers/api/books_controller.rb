class Api::BooksController < ApplicationController
    def index
        @books = Books.all
    end
    
    def show
        @book = Book.find(params[:id])
    end

    has_many :bookshelves
end