require 'spec_helper'

describe "locations/show" do
  before(:each) do
    @location = assign(:location, stub_model(Location,
      :address => "Address",
      :latitude => 1.5,
      :longitude => "Longitude",
      :float => "Float"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Address/)
    rendered.should match(/1.5/)
    rendered.should match(/Longitude/)
    rendered.should match(/Float/)
  end
end
