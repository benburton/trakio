require 'spec_helper'

describe StorySerializer do

  it { has_attributes :id, :title, :description, :project_id, :story_type, :state, :position }

end