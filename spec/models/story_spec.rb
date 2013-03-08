require 'spec_helper'

describe Story do

  describe 'validations' do

    it { should validate_presence_of :title }
    it { should validate_presence_of :project }
    it { should validate_presence_of :reporter }

    let(:story) { build(:story) }

    describe 'story_type' do
      it "doesn't save with an invalid story type" do
        story.story_type = 'this is obviously not valid'
        story.should have(1).errors_on(:story_type)
      end

      it "saves with a valid story_type" do
        story.story_type = StoriesHelper::STORY_TYPES.last
        story.should have(0).errors_on(:story_type)
      end
    end

  end


  describe '.set_defaults' do

    ['story_type', 'state'].each do |field|
      it "should set '#{field}'" do
        story = build(:story)
        story.send(field).should == nil
        story.save!
        story.send(field).should_not == nil
      end
    end

  end

end