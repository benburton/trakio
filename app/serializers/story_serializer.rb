class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :project_id
end