class Api::BookshelvesController < ApplicationController
    def index
    debugger
        @bookshelves = Bookshelf.where(user_id: params[:user_id])

    end
    
    def show
        @bookshelves = Bookshelf.where(user_id: params[:user_id])
    end

end
