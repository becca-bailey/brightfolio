class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(email: params[:session][:email].downcase)

    if @user && @user.authenticate(params[:session][:password])
    session[:user_id] = @user.id
    redirect_to folios_path
    else
      flash[:danger] = "Login information not found"
      render 'new'
    end
  end

  def auth_create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to root_url
  end


  #  def twitter_create
  #   user = User.from_omniauth(env["omniauth.auth"])
  #   session[:user_id] = user.id
  #   redirect_to root_url
  # end


  def destroy
    session[:user_id] = nil
    redirect_to root_url;
  end
end
