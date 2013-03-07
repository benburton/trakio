class StoriesBelongToProjects < ActiveRecord::Migration
  def up
    add_column :stories, :project_id, :integer
  end

  def down
    remove_column :stories, :project_id
  end
end
