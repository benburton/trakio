FactoryGirl.define do

  factory :project do
    name { Faker::Lorem.words(3).join(' ') }
    owner { create(:user) }
  end

end
