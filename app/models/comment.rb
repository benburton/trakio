class Comment < ActiveRecord::Base

  belongs_to :story
  belongs_to :user

  validates_presence_of :story, :user, :body

end