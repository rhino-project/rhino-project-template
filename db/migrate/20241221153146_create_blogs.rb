class CreateBlogs < ActiveRecord::Migration[7.2]
  def change
    create_table :blogs do |t|
      t.references :organization, null: false, foreign_key: true
      t.string :title
      t.text :content
      t.float :dnum
      t.date :published_on
      t.datetime :published_at
      t.time :published_time
      t.boolean :is_published

      t.timestamps
    end
  end
end
