class CreateLikeArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :likeartists do |t|
      t.integer :user_id
      t.integer :artist_id
    end
  end
end
