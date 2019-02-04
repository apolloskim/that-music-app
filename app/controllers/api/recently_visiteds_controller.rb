class Api::RecentlyVisitedsController < ApplicationController

  def create
    @new_visit = RecentlyVisited.new(recently_visited_params)
    if @new_visit.save
      @user = User.includes(:recently_visiteds).find(@new_visit.user_id)
      @recently_visited = @user.recently_visiteds
      render "/api/recently_visiteds/index"
    else
    end
  end

  def index
    @user = User.includes(:recently_visiteds).find(params[:user_id])
    @recently_visited = @user.recently_visiteds.order('id DESC').limit(5)
  end


  private

  def recently_visited_params
    params.require(:recently_visited).permit(:user_id, :table_id, :table, :title, :image_url, :thumb_image_url, :cover_image)
  end
end
