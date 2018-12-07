class AddImagesToArtists < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :thumbnail_image, :string
    add_column :albums, :main_image, :string
  end
end
