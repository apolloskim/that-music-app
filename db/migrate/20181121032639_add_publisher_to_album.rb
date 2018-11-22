class AddPublisherToAlbum < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :publisher, :string
  end
end
