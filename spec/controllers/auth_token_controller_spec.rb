require 'spec_helper'

describe AuthTokenController do

  let!(:user) { create(:user, email: email, password: password) }
  let(:email) { "ben@neo.com" }
  let(:password) { "test1234" }

  describe "POST login" do
    subject { post :login, login: {
        email: email,
        password: request_password
      }
    }

    let(:request_password) { password }

    it { should be_success }

    it "should contain token in response" do
      subject
      response.body.should include user.authentication_token
    end

    context "incorrect password" do
      let(:request_password) { "another_password" }

      it "should return unauthorized" do
        subject
        response.status.should == 401
      end

      it "should not contain token in response" do
        subject
        response.body.should_not include user.authentication_token
      end
    end

  end


end