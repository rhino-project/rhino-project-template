class CreateBlogs < ActiveRecord::Migration[7.2]
  def change
    create_table :blogs do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title
      t.float :dnum
      t.datetime :published_at

      t.timestamps
    end
  end
end
