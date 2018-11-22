class RemoveExplicitOnUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :explicit
  end
end
