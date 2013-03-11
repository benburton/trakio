class AddPositionToStories < ActiveRecord::Migration
  def up
    add_column :stories, :position, :integer
    Project.all.each do |project|
      project.stories.each_with_index do |story, position|
        story.update_attributes!(position: position)
      end
    end
  end

  def down
    remove_column :stories, :position
  end
end
