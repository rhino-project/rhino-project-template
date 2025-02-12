# frozen_string_literal: true

class BlogPost < ApplicationRecord
  belongs_to :blog

  rhino_owner :blog
  rhino_references %i[ blog ]
end
