class StorySerializer < ActiveModel::Serializer

  attributes :id, :title, :description, :project_id, :story_type, :state

  has_one :reporter, :embed => :ids
  has_one :assignee, :embed => :ids

end