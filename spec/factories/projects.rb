FactoryGirl.define do

  factory :project do
    name { Faker::Lorem.words(3).join(' ') }
    user
  end

end
