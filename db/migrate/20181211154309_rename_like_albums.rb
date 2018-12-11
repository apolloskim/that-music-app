class RenameLikeAlbums < ActiveRecord::Migration[5.2]
  def change
    rename_table :like_albums, :likealbums
  end
end
