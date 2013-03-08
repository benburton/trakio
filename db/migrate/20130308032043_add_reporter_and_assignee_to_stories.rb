class AddReporterAndAssigneeToStories < ActiveRecord::Migration

  def up
    add_column :stories, :reporter_id, :integer
    add_column :stories, :assignee_id, :integer
  end

  def down
    remove_column :stories, :reporter_id
    remove_column :stories, :assignee_id
  end

end
