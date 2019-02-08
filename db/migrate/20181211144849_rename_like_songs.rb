class RenameLikeSongs < ActiveRecord::Migration[5.2]
  def change
    rename_table :like_songs do |t|
    t.integer :user_id
    t.integer :album_id
  end
end
