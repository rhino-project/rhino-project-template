# frozen_string_literal: true

class TypescriptController < Rhino::BaseController
  def show
    render plain: describe
  end

  private
    def rails_type_to_typescript_type(rails_type)
      case rails_type
      when :integer, :float, :decimal
        :number
      when :text, :datetime, :date, :time
        :string
      else
        rails_type || :string
      end
    end

    def describe
      Rhino.resource_classes.select { |r| r.respond_to?(:attribute_names) }.map do |resource|
        <<~DESC
          export type #{resource.name} = {
            #{resource.attribute_names.map { |name| "#{name}: #{rails_type_to_typescript_type(resource.attribute_types[name].type)};" }.join("\n  ") }
          }
        DESC
      end.join("\n\n")
    end
end
