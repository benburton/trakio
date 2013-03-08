require 'spec_helper'

describe StoriesController do

  let(:user) { create(:user) }
  let(:project) { create(:project, owner: owner) }
  let(:owner) { user }

  describe 'POST create' do
    let(:title) { Faker::Lorem.words(4).join(' ') }
    subject { authed_post :create, story: {title: title, project_id: project.id} }

    it 'should return OK' do
      subject
      response.status.should == 200
    end

    it 'adds a new story to the database' do
      expect { subject }.to change { Story.count }.by(1)
    end

    it 'is reported by current_user' do
      subject
      Story.last.reporter_id.should == user.id
    end

  end

  describe 'PUT update' do
    subject { authed_put :update, id: story.id, story: story_attributes }
    let(:story) { create(:story, project: project) }
    let(:story_attributes) {
      {
        title: new_title,
        description: new_description,
        story_type: new_story_type
      }
    }
    let(:new_title) { Faker::Lorem.sentence }
    let(:new_description) { Faker::Lorem.sentences(3).join(' ') }
    let(:new_story_type) { StoriesHelper::STORY_TYPES.last }

    it { should be_success }

    it 'should update story attributes' do
      subject
      story.reload
      [:title, :description, :story_type].each do |field|
        story.send(field).should == story_attributes[field]
      end
    end

    context "user is not a member of the story's project" do
      let(:owner) { create(:user) }
      it 'should be Forbidden' do
        subject
        response.status.should == 403
      end
    end

  end

end