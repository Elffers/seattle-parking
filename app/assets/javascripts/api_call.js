$(document).ready(function() {
  $("#find-parking").click(function() {

    var bbox = "1";
    var center = document.getElementById('lat-longs').innerHTML;
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

