class Song < ApplicationRecord
  validates :title, presence: true

  has_one_attached :song_file
  has_one_attached :image
end

# s.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/1-05 God's Plan.mp3"), filename: "1-05 God's Plan.mp3")
# s.image.attach(io: File.open("/Users/apollos/Downloads/drake-scorpion-cover-art.jpg"), filename: "drake-scorpion-cover-art.jpg")
