require 'spec_helper'

describe User do

  describe ".save" do

    subject { create(:user) }
    it "should generate authentication token" do
      subject.authentication_token.should_not == nil
    end
  end

end