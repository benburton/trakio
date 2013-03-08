class Story < ActiveRecord::Base

  validates_presence_of :title, :project, :reporter

  belongs_to :project

  belongs_to :reporter, class_name: 'User'
  belongs_to :assignee, class_name: 'User'

end