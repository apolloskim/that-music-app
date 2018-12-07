class AddImagesToArtistsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :thumbnail_image, :string
    add_column :artists, :main_image, :string
  end
end
