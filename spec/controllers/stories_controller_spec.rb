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

end