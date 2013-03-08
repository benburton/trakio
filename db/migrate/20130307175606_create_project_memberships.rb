class CreateProjectMemberships < ActiveRecord::Migration

  class Project < ActiveRecord::Base
    belongs_to :user
  end

  def change
    create_table :project_memberships do |t|
      t.integer :project_id
      t.integer :user_id
      t.boolean :owner
    end

    Project.all.each do |project|
      ProjectMembership.create(project_id: project.id, user_id: project.user.id, owner: true)
    end

    remove_column :projects, :user_id
  end

end
