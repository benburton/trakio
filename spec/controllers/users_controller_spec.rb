require 'spec_helper'

describe UsersController do

  let(:user) { create(:user) }

  describe 'GET show' do
    subject { authed_get :show }

    it { should be_success }

    it 'should return current user' do
      subject
      [:email, :authentication_token].each do |field|
        response.body.should include user.send(field)
      end
    end
  end

  describe 'PUT update' do
    subject { authed_put :update, id: user_id, user: user_attributes }
    let(:user_id) { user.id }
    let(:user_attributes) {
      {
        name: new_name,
        email: new_email
      }
    }
    let(:new_name) { Faker::Name.name }
    let(:new_email) { Faker::Internet.email }

    it { should be_success }

    it 'update user attributes' do
      subject
      user.reload
      user_attributes.each do |field, value|
        user.send(field).should == value
      end
    end

    context 'not the current user' do
      let(:user_id) { create(:user).id }

      it 'should be Forbidden' do
        subject
        response.status.should == 403
      end
    end

  end

end