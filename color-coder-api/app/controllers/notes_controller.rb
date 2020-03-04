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

    def create
        # lol this is RUBY 
        # console.log("params:", params, "note_params:", note_params)
        # puts params
        note = Note.create(note_params)
        render json: note 
    end

    def destroy
        note = Note.find_by(id: params[:id])
        note.destroy
        # not sure if this is right, probably not, leaving for now

        render json: {message: "note destroyed"}
    end 

    private

    def note_params 
        # params.permit(:note).require(:title, :content)
        params.permit(:title, :content, :color_id)
    end 
    
end
