class AddEmailToProjectMemberships < ActiveRecord::Migration
  def up
    add_column :project_memberships, :email, :string
  end

  def down
    remove_column :project_memberships, :email
  end
end
