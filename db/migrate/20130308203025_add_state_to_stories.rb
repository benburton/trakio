class AddStateToStories < ActiveRecord::Migration
  def up
    add_column :stories, :state, :string
    Story.update_all(state: StoriesHelper::DEFAULT_STATE)
  end

  def down
    remove_column :stories, :state
  end
end
