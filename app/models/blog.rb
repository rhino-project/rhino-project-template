# frozen_string_literal: true

class Blog < ApplicationRecord
  belongs_to :user

  rhino_owner_base
  rhino_references %i[ user ]
end
