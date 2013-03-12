class CommentSerializer < ActiveModel::Serializer
  embed :ids, include: false
  attributes :id, :body, :created_at

  has_one :user
  has_one :story

end