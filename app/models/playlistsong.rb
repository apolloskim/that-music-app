# == Schema Information
#
# Table name: playlistsongs
#
#  id          :bigint(8)        not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Playlistsong < ApplicationRecord

  belongs_to :song
  belongs_to :playlist

  
end
