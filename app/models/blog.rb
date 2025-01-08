# frozen_string_literal: true

class Blog < ApplicationRecord
  belongs_to :user

  has_one_attached :image
  has_one_attached :single_file
  has_many_attached :multiple_files

  rhino_owner_base
  rhino_references %i[ user image_attachment single_file_attachment multiple_files_attachments ]

  validates :title, presence: true
end
