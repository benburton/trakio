class ProjectMembershipSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :email, :project_id, :user_id

end