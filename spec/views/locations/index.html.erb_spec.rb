require 'spec_helper'

describe "locations/index" do
  before(:each) do
    assign(:locations, [
      stub_model(Location,
        :address => "Address",
        :latitude => 1.5,
        :longitude => "Longitude",
        :float => "Float"
      ),
      stub_model(Location,
        :address => "Address",
        :latitude => 1.5,
        :longitude => "Longitude",
        :float => "Float"
      )
    ])
  end

  it "renders a list of locations" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Address".to_s, :count => 2
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
    assert_select "tr>td", :text => "Longitude".to_s, :count => 2
    assert_select "tr>td", :text => "Float".to_s, :count => 2
  end
end
