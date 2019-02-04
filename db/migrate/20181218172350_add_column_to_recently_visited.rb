class AddColumnToRecentlyVisited < ActiveRecord::Migration[5.2]
  def change
    add_column :recently_visiteds, :table_id, :integer
  end
end
