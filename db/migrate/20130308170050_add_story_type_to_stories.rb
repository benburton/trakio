class AddStoryTypeToStories < ActiveRecord::Migration

  def up
    add_column :stories, :story_type, :string
    Story.update_all(story_type: StoriesHelper::DEFAULT_STORY_TYPE)
  end

  def down
    remove_column :stories, :story_type
  end
end
