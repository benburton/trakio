class Story < ActiveRecord::Base

  validates_presence_of :title, :project

  belongs_to :project

end