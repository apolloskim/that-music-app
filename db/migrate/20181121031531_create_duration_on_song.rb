class CreateDurationOnSong < ActiveRecord::Migration[5.2]
  def change
    create_table :duration_on_songs do |t|
      add_column :songs, :explicit, :boolean, default: false
    end
  end
end
