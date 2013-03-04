require 'spec_helper'

describe UserSerializer do

  it { has_attributes :authentication_token, :email }

end