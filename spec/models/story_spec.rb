require 'spec_helper'

describe Story do

  it { should validate_presence_of :title }
  it { should validate_presence_of :project }
  it { should validate_presence_of :reporter }

end