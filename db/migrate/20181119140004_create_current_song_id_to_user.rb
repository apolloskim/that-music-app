class CreateCurrentSongIdToUser < ActiveRecord::Migration[5.2]
  def change
    create_table :current_song_id_to_users do |t|
      add_column :users, :current_song_id, :integer
    end
  end
end
