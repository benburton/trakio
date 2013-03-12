class StorySerializer < ActiveModel::Serializer

  embed :ids, include: true

  attributes :id, :title, :description, :project_id, :story_type, :state, :position, :reporter_id, :assignee_id

  has_many :comments, :embed => :ids

end