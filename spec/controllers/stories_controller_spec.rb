require 'spec_helper'

describe StoriesController do

  let(:user) { create(:user) }
  let(:project) { create(:project) }

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

end