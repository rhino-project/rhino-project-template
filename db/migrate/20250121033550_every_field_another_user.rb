class EveryFieldAnotherUser < ActiveRecord::Migration[7.2]
  def change
    add_reference :every_fields, :user
  end
end
