# frozen_string_literal: true

# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# runs all files in db/seeds/*.rb
Rails.root.glob("db/seeds/*.rb").each do |seed|
  load seed
end

# runs all files in the specific envrironment folder db/seeds/development/*.rb, for example
Rails.root.glob("db/seeds/#{Rails.env}/*.rb").each do |seed|
  load seed
end
