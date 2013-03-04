FactoryGirl.define do

  factory :user do
    email { Faker::Internet.email }
    password { Faker::Lorem.characters(20) }
  end
end
