class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Invalid username or password.'], status: 422
    else
      login!(@user)
      render "api/users/show"
    end

  end

  def destroy
  @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      render json: ['no user logged in'], status: 404
    end
  end
end