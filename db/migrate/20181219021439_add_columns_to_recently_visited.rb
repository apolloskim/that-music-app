class AddColumnsToRecentlyVisited < ActiveRecord::Migration[5.2]
  def change
    add_column :recently_visiteds, :image_url, :string
    add_column :recently_visiteds, :thumb_image_url, :string
    add_column :recently_visiteds, :cover_image, :string
  end
end
