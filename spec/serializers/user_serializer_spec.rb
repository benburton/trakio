require 'spec_helper'

describe 'UserSerializer' do

  it { has_attributes :authentication_token, :email }

  private

  def has_attributes(*attributes)
    attributes.each do |attribute|
      UserSerializer._attributes.keys.should include attribute
    end
  end

end