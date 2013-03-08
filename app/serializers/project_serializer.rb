class ProjectSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name

  has_many :stories, :embed => :ids
  has_many :project_memberships, :embed => :ids
  has_many :users, :embed => :ids

end