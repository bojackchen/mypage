$(document).ready(function() {
  // Add last update time
  document.getElementById("footertext").innerHTML += (" Last modified: " + document.lastModified);
});

$(document).on("click", "nav a", function(item) {
  // Collapse navbar automatically after click on an item
  $("#navigation").collapse("hide");
});

$(document).on("click", "nav a, a[href='#top']", function(event) {
  // Add smooth scrolling to all links in navbar + footer link
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
      window.location.hash = hash;
    });
  }
});

// Slide animation of logos
$(window).scroll(function() {
  $(".slideanim").each(function() {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 800) {
      $(this).addClass("slide");
    }
  });
});

// Add googleMap display
function initMap() {
  var map = new google.maps.Map(document.getElementById("googleMap"), {
    center: {lat: 22.33467, lng: 114.26365},
    zoom: 16,
    scrollwheel: false,
    draggable: true,
  });

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(22.33467, 114.26365),
  });
  marker.setMap(map);
}
google.maps.event.addDomListener(window, "load", initMap);

function searchJump() {
  window.open("http://www.google.com/#q=" + document.getElementById("searchtext").value.split(" ").join("+"),
    "_blank");//.focus();
}
