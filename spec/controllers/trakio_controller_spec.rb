require 'spec_helper'

describe TrakioController do

  describe 'GET index' do
    subject { get :index }
    it { should be_success }
  end

end