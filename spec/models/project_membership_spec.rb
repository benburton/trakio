require 'spec_helper'

describe ProjectMembership do

  it { should validate_presence_of :project }

  describe 'EmailUniquenessValidator' do
    subject { build(:project_membership, project: project, email: email) }

    let(:project) { create(:project, owner: user) }
    let(:user) { create(:user, email: email) }
    let(:email) { Faker::Internet.email }

    it 'should have an error on email' do
      subject.should have(1).errors_on(:email)
    end

  end

  describe "UserOrEmailValidator" do
    subject { build(:project_membership, user: user, email: email) }
    let(:user) { create(:user) }
    let(:email) { Faker::Internet.email }

    it 'should have an error on email' do
      subject.should have(1).errors_on(:email)
    end

  end

end