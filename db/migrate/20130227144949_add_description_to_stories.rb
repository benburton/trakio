class AddDescriptionToStories < ActiveRecord::Migration

  def up
    add_column :stories, :description, :text
  end

  def down
    remove_column :stories, :description
  end

end
