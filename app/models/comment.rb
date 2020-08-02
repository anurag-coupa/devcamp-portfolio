class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :blog

  validates :context, presence: true, length: { minimum: 5, maximum: 1000}
end