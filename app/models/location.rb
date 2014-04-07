class Location < ActiveRecord::Base
  geocoded_by :address
  after_validation :geocode
  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode
  before_save :map

  def map

  end


end
