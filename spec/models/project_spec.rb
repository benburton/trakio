require 'spec_helper'

describe Project do

  it { should validate_presence_of :name }

  describe '.owner' do
    subject { project.owner }
    let(:project) { create(:project, owner: owner) }
    let(:owner) { create(:user) }

    it 'should return owner' do
      subject.should == owner
    end
  end

  describe '.owner=' do
    subject { project.update_attributes(owner: new_owner) }
    let(:project) { create(:project, owner: previous_owner) }
    let(:previous_owner) { create(:user) }
    let(:new_owner) { create(:user) }

    it 'should change owner' do
      subject
      project.owner.should == new_owner
      project.owner.should_not == previous_owner
    end

  end

  describe '.owner?' do
    subject { project.owner?(user) }
    let(:project) { create(:project) }
    let(:user) { create(:user) }

    it { should be_false }

    context 'user is owner' do
      let(:project) { create(:project, owner: user) }
      it { should be_true }
    end

  end

end