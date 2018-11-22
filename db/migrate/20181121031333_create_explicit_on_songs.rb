class CreateExplicitOnSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :explicit_on_songs do |t|
      add_column :users, :explicit, :boolean, default: false
    end
  end
end
