require 'spec_helper'

describe Comment do

  it { should validate_presence_of(:body) }
  it { should validate_presence_of(:user) }
  it { should validate_presence_of(:story) }

end