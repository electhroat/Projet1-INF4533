var html = "";
resto.forEach(function(r) {

  html += "<ul id='myUL'>";

  html += "<li><div id='nom'><a href =" + r.website + ">" + r.name + "</a></div></li>";

  if (r.rating === undefined) {
    html += "<div> rating is undefined</div>";
  } else {
    html += "<div>rating: " + r.rating + "/5" + "</div>";
  }

  html += "<div>" + r.formatted_address + "</div>";

  if(r.opening_hours === undefined){
    html += "<div> opening hours are unavailable</div>";

  }else{html += "<div id ='hours'> Operation Hours: " + (r.opening_hours.weekday_text).toString() +  "</div>";

  }
  html += "</ul>";
});



document.write(html);


//fonction de recherche qui cache ou montre les balises <ul> du document HTML en fonction de l'entrée de l'utilisateur



function recherche(){ $('#myInput').on('input', function() {

  $(".container").html("");

  resto.forEach(function(resto) {


    console.log($('#myInput').val());

    if (resto.name.indexOf($('#myInput').val()) != -1) {


      var clone = $("#resto-clone").clone();

      clone.html(resto.name);

      clone.show();



      $(".container").append(clone);
    }

  });
});}
