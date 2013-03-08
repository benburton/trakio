class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :project_id

  has_one :reporter, :embed => :ids

end