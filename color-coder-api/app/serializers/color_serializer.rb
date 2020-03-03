class ColorSerializer < ActiveModel::Serializer
  attributes :id, :name, :hexcode_i, :hexcode_ii
  has_many :notes, serializer: NestedNotesSerializer
end
