class NoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :color, :title, :content, :created_at, :updated_at
  belongs_to :color
end
