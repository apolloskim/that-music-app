# == Schema Information
#
# Table name: playlists
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :title, presence: true

  belongs_to :creator,
  foreign_key: :creator_id,
  primary_key: :id,
  class_name: :User

  has_many :playlistsongs

  has_many :songs,
  through: :playlistsongs,
  source: :song

end
