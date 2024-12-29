# frozen_string_literal: true

FactoryBot.define do
  factory :blog do
    user { nil }
    title { "MyString" }
    dnum { 1.5 }
    published_at { "2024-12-21 10:31:46" }
  end
end
