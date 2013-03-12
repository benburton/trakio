require 'spec_helper'

describe CommentsController do

  let(:user) { create(:user) }
  let(:owner) { user }
  let(:project) { create(:project, owner: owner) }
  let(:story) { create(:story, project: project) }

  describe 'POST create' do
    subject { authed_post :create, comment: comment_params }
    let(:body) { Faker::Lorem.sentences(5).join(' ') }
    let(:comment_params) {
      {
        story_id: story.id,
        body: body
      }
    }

    it { should be_success }

    it 'should create a comment' do
      expect { subject }.to change { story.comments.count }.by(1)
    end

    it 'should create comment with current_user and provided parameters' do
      subject
      [:user, :story, :body].each do |field|
        Comment.last.send(field).should == eval(field.to_s)
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