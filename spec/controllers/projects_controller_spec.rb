require 'spec_helper'

describe ProjectsController do

  let(:user) { create(:user) }
  let!(:project) { create(:project, owner: user) }

  describe "GET index" do
    subject { authed_get :index }
    let!(:other_project) { create(:project) }

    it { should be_success }

    it "should display projects for user" do
      subject
      response.body.should include project.name
    end

    it "should not display projects for other users" do
      subject
      response.body.should_not include other_project.name
    end

  end

  describe "GET show" do
    subject { authed_get :show, id: project.id }

    it { should be_success }

    it "should display project" do
      subject
      response.body.should include project.name
    end

  end

  describe "POST create" do
    subject { authed_post :create, project: { name: name } }
    let(:name) { Faker::Lorem.words(5).join(' ') }

    it { should be_success }

    it "should create a new project" do
      expect { subject }.to change { user.projects.count }.by(1)
    end

  end


end