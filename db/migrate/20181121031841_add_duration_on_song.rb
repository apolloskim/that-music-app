class AddDurationOnSong < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :duration, :string, null: false
  end
end
