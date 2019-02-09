class DropLikesongs < ActiveRecord::Migration[5.2]
  def change
    drop_table :likesongs
  end
end
