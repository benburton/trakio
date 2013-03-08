class Project < ActiveRecord::Base

  validates_presence_of :name

  has_many :stories
  has_many :project_memberships
  has_many :users, :through => :project_memberships

  after_save :set_owner

  def owner=(user)
    @owner = user
  end

  def owner
    @owner || ProjectMembership.where(project_id: self.id, owner: true).first.try(:user)
  end

  def owner?(user)
    owner == user
  end

  def set_owner
    if @owner
      previous_owner = ProjectMembership.find_by_project_id_and_owner(self.id, true)
      previous_owner.update_attribute(:owner, false) if previous_owner
      ProjectMembership.find_or_create_by_user_id_and_project_id(@owner.id, self.id).update_attributes(owner: true)
    end
    @owner = nil
  end

end