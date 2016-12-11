$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                window.location.hash = hash;
            });
        }
    });

    // Initialize tooltip
    $("[data-toggle='tooltip']").tooltip(); 
})

// Add googleMap display
function initMap() {
    var map = new google.maps.Map(document.getElementById("googleMap"), {
        center: {lat: 22.336346, lng: 114.265460},
        zoom: 16,
        scrollwheel: false,
        draggable: true,
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(22.336346, 114.265460),
    });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, "load", initMap);

// Slide animation of logos
$(window).scroll(function() {
    $(".slideanim").each(function() {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});

$("#send").on("click", function() {
    window.alert("Sorry this function is not available now.")
});

function searchJump() {
    window.open("http://www.google.com/#q=" + document.getElementById("searchtext").value.split(" ").join("+"),
        "_blank").focus();
}
