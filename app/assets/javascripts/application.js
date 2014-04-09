// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .
//= require underscore
//= require gmaps/google

$(document).ready(function() {
  $("#find-parking").click(function() {

    var bbox = "1";
    var center = "2";
    var map_size = "500,400";

    $.ajax({
      url: "http://localhost:3000",
      type: 'POST',
      dataType: 'json',
      data: {center: center, bbox: bbox, map_size: map_size },
      success: function(data, textStatus, xhr) {
        // get url and then do stuff
      },
      error: function(xhr, textStatus, errorThrown) {
        alert(center + bbox + map_size);
      }
    });
    return false;
  });
});
