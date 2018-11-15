class Song < ApplicationRecord
  validates :title, presence: true

  has_one_attached :song_file
end

# s.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/2-08-Blue-Tint.mp3"), filename: "2-08-Blue-Tint.mp3")
