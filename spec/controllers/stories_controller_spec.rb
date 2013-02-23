require 'spec_helper'

describe StoriesController do

  render_views

  let!(:stories) {
    2.times.each { create(:story) }
    Story.all
  }

  describe 'GET index' do
    subject { get :index, :format => :json }
    it { should be_success }
    it 'returns all stories as json' do
      pending 'Need to figure out active_model_serializer'
      subject
    end
  end

  describe 'POST create' do
    let(:title) { Faker::Lorem.words(4).join(' ') }
    subject { post :create, story: {title: title} }
    it { should be_success }
    it 'adds a new story to the database' do
      expect { subject }.to change { Story.count }.by(1)
    end

  end

end