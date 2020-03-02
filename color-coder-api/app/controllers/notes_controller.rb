class NotesController < ApplicationController
    def index 
        notes = Note.all
        render json: notes
    end 

    def show 
        note = Note.find_by(id: params[:id])
        render json: note
    end 
    
end
