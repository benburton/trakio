require 'spec_helper'

describe Story do

  it { should validate_presence_of(:title) }

end