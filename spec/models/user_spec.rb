require 'spec_helper'

describe User do

  it { should validate_presence_of :email }

  describe '.save' do

    subject { create(:user) }
    it 'should generate authentication token' do
      subject.authentication_token.should_not == nil
    end
  end

  describe '.create' do
    subject { user }
    let(:user) { create(:user, email: email, password: Faker::Lorem.characters(20)) }
    let!(:email) { Faker::Internet.email }
    let!(:project) { create(:project) }
    let!(:project_membership) { create(:project_membership, project: project, email: email) }

    it 'should convert project membership email references to user references' do
      subject
      project_membership.reload.email.should == nil
      project_membership.user.should == subject
    end
  end

end