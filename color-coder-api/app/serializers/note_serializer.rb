class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at, :updated_at, :color
  belongs_to :color
  # ,  serializer: ColorSerializer
end
