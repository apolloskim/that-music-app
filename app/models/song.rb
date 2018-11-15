class Api::Song < ApplicationRecord
  validates :title, presence: true

  has_one_attached :song_file
end
