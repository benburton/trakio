class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :token_authenticatable

  after_save :ensure_authentication_token!
  after_create :convert_project_memberships

  has_many :project_memberships
  has_many :projects, :through => :project_memberships


  private
  def convert_project_memberships
    ProjectMembership.where(email: self.email).each do |project_membership|
      project_membership.update_attributes(email: nil, user: self)
    end
  end

end
