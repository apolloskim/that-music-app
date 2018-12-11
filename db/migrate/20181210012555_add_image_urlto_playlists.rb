class AddImageUrltoPlaylists < ActiveRecord::Migration[5.2]
  def change
    add_column :playlists, :image_url, :string
  end
end
