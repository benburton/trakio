FactoryGirl.define do
  factory :project_membership do
    project
    user { nil }
    email { nil }
  end
end