class ColorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :hexcode_i, :hexcode_ii
  has_many :notes
end
