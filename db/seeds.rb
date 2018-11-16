# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p_2 = Playlist.new(title: "Second Playlist", creator_id: 1)
p_3 = Playlist.new(title: "third Playlist", creator_id: 1)
p_4 = Playlist.new(title: "fourth Playlist", creator_id: 1)
p_5 = Playlist.new(title: "fifth Playlist", creator_id: 1)
p_6 = Playlist.new(title: "sixth Playlist", creator_id: 1)
p_7 = Playlist.new(title: "seventh Playlist", creator_id: 1)
p_8 = Playlist.new(title: "eighth Playlist", creator_id: 1)
p_9 = Playlist.new(title: "ninth Playlist", creator_id: 1)

p_2.image.attach(io: File.open("/Users/apollos/Downloads/Rap Caviar - Cover.jpg"), filename: "Rap Caviar - Cover.jpg")
p_3.image.attach(io: File.open("/Users/apollos/Downloads/Rap Caviar - Cover.jpg"), filename: "Rap Caviar - Cover.jpg")
p_4.image.attach(io: File.open("/Users/apollos/Downloads/Rap Caviar - Cover.jpg"), filename: "Rap Caviar - Cover.jpg")
p_5.image.attach(io: File.open("/Users/apollos/Downloads/Rap Caviar - Cover.jpg"), filename: "Rap Caviar - Cover.jpg")
p_6.image.attach(io: File.open("/Users/apollos/Downloads/Rap Caviar - Cover.jpg"), filename: "Rap Caviar - Cover.jpg")
p_7.image.attach(io: File.open("/Users/apollos/Downloads/Rap Caviar - Cover.jpg"), filename: "Rap Caviar - Cover.jpg")
p_8.image.attach(io: File.open("/Users/apollos/Downloads/Rap Caviar - Cover.jpg"), filename: "Rap Caviar - Cover.jpg")
p_9.image.attach(io: File.open("/Users/apollos/Downloads/Rap Caviar - Cover.jpg"), filename: "Rap Caviar - Cover.jpg")

p_2.create!
p_3.create!
p_4.create!
p_5.create!
p_6.create!
p_7.create!
p_8.create!
p_9.create!
