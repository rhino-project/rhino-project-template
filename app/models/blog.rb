# frozen_string_literal: true

class Blog < ApplicationRecord
  belongs_to :organization
  has_many :users, through: :organization

  has_one_attached :image
  has_one_attached :single_file
  has_many_attached :multiple_files

  rhino_owner_base
  rhino_references %i[ organization image_attachment single_file_attachment multiple_files_attachments ]
  rhino_search [ :title ]

  validates :title, presence: true

  acts_as_notifiable :users, targets: User.all, tracked: { only: [ :create ] }, notifiable_path: route_frontend
end
