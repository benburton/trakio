require 'spec_helper'

describe 'StorySerializer' do

  it { has_attributes :id, :title, :description }

  private

  def has_attributes(*attributes)
    attributes.each do |attribute|
      StorySerializer._attributes.keys.should include attribute
    end

  end

end