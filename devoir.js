var html = "";
resto.forEach(function(r) {

  html += "<ul id='myUL'>";

  html += "<li><div id='nom'>" + r.name + "</div></li>";

  html += "<div><a href =" + r.website + "> visit website </a></div>";

  if (r.rating === undefined) {
    html += "<div> rating is undefined</div>";
  } else {
    html += "<div>rating: " + r.rating + "/5" + "</div>";
  }

  html += "<div>" + r.formatted_address + "</div>";
  if(r.opening_hours === undefined){
    html += "<div> opening hours are unavailable</div>";

  }else{html += "<div> Operation Hours: " + (r.opening_hours.weekday_text).toString() +  "</div>";

  }

  html += "</ul>";
})
console.log(resto);
document.write(html);

function recherche(){ $('#search').on('input', function() {
  $(".container").html("");
  restos.forEach(function(resto) {
    console.log($('#search').val());
    if (resto.name.indexOf($('#search').val()) !== -1) {
      var clone = $("#resto-clone").clone();

      clone.recherche("h1").html(resto.name);
      clone.recherche("p").html(resto.desc);
      clone.show();
      $(".container").append(clone);
    }

  });
});}



//function myFunction() {
  //  var input, filter, ul, li, a, i;
    //input = restaurant.getElementById("myInput");
    //filter = input.value.toUpperCase();
    //ul = restaurant.getElementById("myUL");
    //li = ul.getElementsByTagName("li");
    //for (i = 0; i < li.length; i++) {
      //  a = li[i].getElementsByTagName("li")[0];
        //if (a.r.name.toUpperCase().indexOf(filter) > -1) {
//
  //          li[i].style.display = "";
    //    } else {
//
  //          li[i].style.display = "none";

    //    }
  //}
//}
//document.write(myUl);



console.log(resto[0].name);

console.log(resto[12].reviews[1]);
////questions en classe
