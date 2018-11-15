# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  validates :title, presence: true

  has_one_attached :song_file
  has_one_attached :image

  has_many :playlistsongs

  has_many :playlists,
  through: :playlistsongs,
  source: :playlist

  belongs_to :album

  has_one :artist,
  through: :album,
  source: :artist


end

# s.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/1-05 God's Plan.mp3"), filename: "1-05 God's Plan.mp3")
# s.image.attach(io: File.open("/Users/apollos/Downloads/drake-scorpion-cover-art.jpg"), filename: "drake-scorpion-cover-art.jpg")
