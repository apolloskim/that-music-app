class RemoveImagesToAlbums < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :thumbnail_image
    remove_column :albums, :main_image
  end
end
