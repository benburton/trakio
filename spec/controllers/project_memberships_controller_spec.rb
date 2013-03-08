require 'spec_helper'

describe ProjectMembershipsController do

  let(:user) { create(:user) }
  let(:owner) { user }
  let(:project) { create(:project, owner: owner) }

  describe 'POST create' do
    subject { authed_post :create, project_membership: project_membership_params }
    let(:project_membership_params) {
      {
        project_id: project.id,
        email: email
      }
    }

    let(:email) { Faker::Internet.email }

    it { should be_success }

    it 'should create a new ProjectMembership' do
      expect { subject }.to change { ProjectMembership.where(project_id: project.id).count }.by(1)
    end

    context 'previously registered user' do
      let(:another_user) { create(:user) }
      let(:project_membership_params) {
        {
          project_id: project.id,
          email: another_user.email
        }
      }

      it { should be_success }

      it 'should create a new ProjectMembership' do
        expect { subject }.to change { ProjectMembership.where(project_id: project.id).count }.by(1)
      end

    end

    context 'user is not a member of the project' do
      let(:owner) { create(:user) }
      it 'should be Forbidden' do
        subject
        response.status.should == 403
      end

      it 'should not create a new ProjectMembership' do
        expect { subject }.to_not change { ProjectMembership.where(project_id: project.id).count }
      end

    end
  end

end
