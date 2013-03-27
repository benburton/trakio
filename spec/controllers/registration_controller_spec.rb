require 'spec_helper'

describe RegistrationController do

  describe 'POST create' do
    subject { post :create, user: { email: email, password: password, password_confirmation: password_confirmation } }

    let(:email) { Faker::Internet.email }
    let(:password) { Faker::Lorem.characters(20) }
    let(:password_confirmation) { password }

    it "should create a user" do
      expect { subject }.to change { User.count }.by 1
    end

    it "should return OK" do
      subject
      response.status.should == 200
    end

    it "should return authentication token in response" do
      subject
      response.body.should include User.last.authentication_token
    end

    context "with bad data" do
      let(:password_confirmation) { "not the password you're looking for" }

      it "should not create a user" do
        expect { subject }.to_not change { User.count }
      end

      it "should return Unprocessable Entity" do
        subject
        response.status.should == 422
      end
    end

  end

end