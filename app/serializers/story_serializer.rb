class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :project_id, :story_type

  has_one :reporter, :embed => :ids

end