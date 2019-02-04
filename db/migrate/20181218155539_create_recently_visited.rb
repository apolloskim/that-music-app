class CreateRecentlyVisited < ActiveRecord::Migration[5.2]
  def change
    create_table :recently_visiteds do |t|
      t.integer :user_id
      t.string :table
      t.string :title
    end
  end
end
