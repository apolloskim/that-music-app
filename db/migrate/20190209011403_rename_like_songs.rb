class RenameLikeSongs < ActiveRecord::Migration[5.2]
  def change
    rename_table :like_songs, :likesongs
  end
end
