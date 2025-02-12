# frozen_string_literal: true

FactoryBot.define do
  factory :blog_post do
    title { "MyString" }
    content { "MyText" }
    blog { nil }
  end
end
