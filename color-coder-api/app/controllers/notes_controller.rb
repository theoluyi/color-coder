class NotesController < ApplicationController
    def index 
        notes = Note.all
        options = {
            include: [:color]
        }
        render json: notes
        # NoteSerializer.new(notes, options)
    end 

    def show 
        note = Note.find_by(id: params[:id])
        options = {
            include: [:color]
        }
        render json: note
        # NoteSerializer.new(note, options)
    end
    
end
