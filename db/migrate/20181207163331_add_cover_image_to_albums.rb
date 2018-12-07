class AddCoverImageToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :cover_image, :string
  end
end
