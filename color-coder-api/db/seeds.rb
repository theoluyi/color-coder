# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Note.destroy_all
Color.destroy_all

color1 = Color.create(name: "white", hexcode_i: '#FFFFFF', hexcode_ii:'#fffdd0')
color2 = Color.create(name: "pink", hexcode_i: '#FFC0CB', hexcode_ii:'#FFFFFF')
color3 = Color.create(name: "red", hexcode_i: '#a83232', hexcode_ii:'#FFFFFF')
color4 = Color.create(name: "orange", hexcode_i: '#cc6e2f', hexcode_ii:'#FFFFFF')
color5 = Color.create(name: "yellow", hexcode_i: '#d6bc15', hexcode_ii:'#FFFFFF')
color6 = Color.create(name: "green", hexcode_i: '#2f7838', hexcode_ii:'#FFFFFF')
color7 = Color.create(name: "cyan", hexcode_i: '#38abba', hexcode_ii:'#FFFFFF')
color8 = Color.create(name: "navy", hexcode_i: '#4137ed', hexcode_ii:'#FFFFFF')
color9 = Color.create(name: "purple", hexcode_i: '#5651a8', hexcode_ii:'#FFFFFF')

note1 = Note.create(color: color1, title: "Your first note!", content: "You can write anything you want in here! Hurray!")
note2 = Note.create(color: color1, title: "Test note", content: "You can delete me if you want :( ")
note3 = Note.create(color: color2, title: "I'm in the pink color!", content: "Holy shit!")
note4 = Note.create(color: color3, title: "REDRUM", content: "REDRUM! REDRUM!!!")

puts "We're all done seeding! :)"