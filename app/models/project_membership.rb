class ProjectMembership < ActiveRecord::Base

  class EmailUniquenessValidator < ActiveModel::Validator
    def validate(project_membership)
      if project = project_membership.project
        emails = project.project_memberships.select{|pm| pm != project_membership}.map{|pm| pm.user ? pm.user.email : pm.email }
        email = project_membership.user ? project_membership.user.email : project_membership.email
        if emails.include?(email)
          project_membership.errors.add(:email, 'that email is already in this project')
        end
      end
    end
  end

  class UserOrEmailValidator < ActiveModel::Validator
    def validate(project_membership)
      if !(project_membership.email.blank? ^ project_membership.user.blank?)
        project_membership.errors.add(:email, "specify an email or user, not both")
      end
    end
  end

  belongs_to :user
  belongs_to :project

  validates_presence_of :project

  validates_with EmailUniquenessValidator, UserOrEmailValidator

end