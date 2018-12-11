class AddColumnsToLikeAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :like_albums, :album_id, :integer
    add_column :like_albums, :user_id, :integer
  end
end
