FactoryGirl.define do
  factory :story do
    title { Faker::Lorem.words(4).join(' ') }
    project
    reporter { create(:user) }
  end
end