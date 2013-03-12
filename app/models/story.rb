require 'stories_helper'

class Story < ActiveRecord::Base

  before_validation :set_defaults

  validates_presence_of :title, :project, :reporter
  validates :story_type, inclusion: { in: StoriesHelper::STORY_TYPES }, allow_blank: false

  belongs_to :project

  belongs_to :reporter, class_name: 'User'
  belongs_to :assignee, class_name: 'User'

  has_many :comments

  private
  def set_defaults
    self.story_type ||= StoriesHelper::DEFAULT_STORY_TYPE
    self.state ||= StoriesHelper::DEFAULT_STATE
  end

end