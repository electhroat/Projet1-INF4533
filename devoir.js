//Fonction qui affiche tous les restaurants
function showAllRestos(){
  var list = document.getElementById("listAllRestos");

  for(var i = 0; i < resto.length; i++){
    var html = "";

<<<<<<< HEAD
    var newRowForResto = list.insertRow(-1);
    var newCell = newRowForResto.insertCell(0);

    newRowForResto.id = resto[i].name;
=======
  html += "<li><div id='nom'><a href =" + r.website + ">" + r.name + "</a></div></li>";
>>>>>>> origin/master

    html += "<tr><td><div id=\"nom\"><a href =" + resto[i].website + ">" + resto[i].name + "</a></div></td></tr>";

    if (resto[i].rating === undefined) {
      html += "<tr><td><div> rating is undefined</div></td></tr>";
    } else {
      html += "<tr><td><div>rating: " + resto[i].rating + "/5" + "</div></td></tr>";
    }

    html += "<tr><td><div>" + resto[i].formatted_address + "</div></td></tr>";

    if(resto[i].opening_hours === undefined){
      html += "<tr><td><div> opening hours are unavailable</div></td></tr>";

    }else{html += "<tr><td><div id =\"hours\"> Operation Hours: " + (resto[i].opening_hours.weekday_text).toString() +  "</div></td></tr>";

    }
    newCell.innerHTML = html;
  }
}

//Fonction pour appeler la bonne recherche
//Cette fonction n'est présentement pas appelée
function callSearch(){
  var list = document.getElementById("listAllRestos");
  while(list.rows.length > 0) {
    list.deleteRow(0);
  }
  //Récupère le choix fait par le menu déroulant
  var choice = document.getElementById("myOptions").value;

  //Récupère l'information de la recherche
  var searchSubject = document.getElementById("myInput").value;

  //Test pour réagir en fonction du choix faire dans le menu déroulant
  if(searchSubject == ""){
    //Appelle la fonction qui affiche tous les restos si le champs de recherche est vide
    showAllRestos();
  } else if(choice == "name"){
    //Appelle la fonction qui cherche par nom
    searchName(searchSubject);
  } else if (choice == "localisation"){
    //Appelle la fonction qui cherche par address
    searchAddress(searchSubject);
  } else if (choice == "types"){
    //Appelle la fonction qui cherche par type
    searchTypes(searchSubject);
  } else if (choice == "hours"){
    //Appelle la fonction qui cherche par heures d'ouverture
    searchHours(searchSubject);
  }
}

//Fonction qui cherche par nom de resto
function searchName(subject){

  var list = document.getElementById("listAllRestos");

  for(i = 0; i < resto.length; i++){
    if(resto[i].name.toUpperCase().includes(subject.toUpperCase())){

<<<<<<< HEAD
      var html = "";

      var newRowForResto = list.insertRow(-1);
      var newCell = newRowForResto.insertCell(0);
=======
  html += "<div>" + r.formatted_address + "</div>";

  if(r.opening_hours === undefined){
    html += "<div> opening hours are unavailable</div>";

  }else{html += "<div id ='hours'> Operation Hours: " + (r.opening_hours.weekday_text).toString() +  "</div>";
>>>>>>> origin/master

      newRowForResto.id = resto[i].name;

      html += "<tr><td><div id=\"nom\"><a href =" + resto[i].website + ">" + resto[i].name + "</a></div></td></tr>";

      if (resto[i].rating === undefined) {
        html += "<tr><td><div> rating is undefined</div></td></tr>";
      } else {
        html += "<tr><td><div>rating: " + resto[i].rating + "/5" + "</div></td></tr>";
      }

      html += "<tr><td><div>" + resto[i].formatted_address + "</div></td></tr>";

      if(resto[i].opening_hours === undefined){
        html += "<tr><td><div> opening hours are unavailable</div></td></tr>";

      }else{html += "<tr><td><div id =\"hours\"> Operation Hours: " + (resto[i].opening_hours.weekday_text).toString() +  "</div></td></tr>";

      }
      newCell.innerHTML = html;
    }
  }
<<<<<<< HEAD

}

//Fonction qui cherche par address de resto
function searchAddress(subject){

  var list = document.getElementById("listAllRestos");

    for(i = 0; i < resto.length; i++){
      if(resto[i].formatted_address.toUpperCase().includes(subject.toUpperCase())){
        var html = "";

        var newRowForResto = list.insertRow(-1);
        var newCell = newRowForResto.insertCell(0);

        newRowForResto.id = resto[i].name;

        html += "<tr><td><div id=\"nom\"><a href =" + resto[i].website + ">" + resto[i].name + "</a></div></td></tr>";

        if (resto[i].rating === undefined) {
          html += "<tr><td><div> rating is undefined</div></td></tr>";
        } else {
          html += "<tr><td><div>rating: " + resto[i].rating + "/5" + "</div></td></tr>";
        }

        html += "<tr><td><div>" + resto[i].formatted_address + "</div></td></tr>";

        if(resto[i].opening_hours === undefined){
          html += "<tr><td><div> opening hours are unavailable</div></td></tr>";

        }else{html += "<tr><td><div id =\"hours\"> Operation Hours: " + (resto[i].opening_hours.weekday_text).toString() +  "</div></td></tr>";

        }
        newCell.innerHTML = html;
      }
    }
}

//Fonction qui cherche par type de resto
function searchTypes(subject){

  var list = document.getElementById("listAllRestos");

    for(i = 0; i < resto.length; i++){
      if(resto[i].types.toUpperCase().includes(subject.toUpperCase())){
      var html = "";
=======
  html += "</ul>";
});



document.write(html);


//fonction de recherche qui cache ou montre les balises <ul> du document HTML en fonction de l'entrée de l'utilisateur



function recherche(){ $('#myInput').on('input', function() {

  $(".container").html("");

  resto.forEach(function(resto) {


    console.log($('#myInput').val());

    if (resto.name.indexOf($('#myInput').val()) != -1) {
>>>>>>> origin/master

      var newRowForResto = list.insertRow(-1);
      var newCell = newRowForResto.insertCell(0);

<<<<<<< HEAD
      newRowForResto.id = resto[i].name;

      html += "<tr><td><div id=\"nom\"><a href =" + resto[i].website + ">" + resto[i].name + "</a></div></td></tr>";

      if (resto[i].rating === undefined) {
        html += "<tr><td><div> rating is undefined</div></td></tr>";
      } else {
        html += "<tr><td><div>rating: " + resto[i].rating + "/5" + "</div></td></tr>";
      }
=======
      var clone = $("#resto-clone").clone();

      clone.html(resto.name);

      clone.show();
>>>>>>> origin/master

      html += "<tr><td><div>" + resto[i].formatted_address + "</div></td></tr>";

      if(resto[i].opening_hours === undefined){
        html += "<tr><td><div> opening hours are unavailable</div></td></tr>";

      }else{html += "<tr><td><div id =\"hours\"> Operation Hours: " + (resto[i].opening_hours.weekday_text).toString() +  "</div></td></tr>";

      }
      newCell.innerHTML = html;
      }
    }
}

<<<<<<< HEAD
//Fonction qui cherche par heures d'ouverture de resto
function searchHours(subject){

  var list = document.getElementById("listAllRestos");

    for(i = 0; i < resto.length; i++){
      if(true){
        //Il faudrait remplacer 'true' pour quelque chose comme:'resto[i].types.toUpperCase().includes(subject.toUpperCase())' dans le if

      var html = "";
      var newRowForResto = list.insertRow(-1);
      var newCell = newRowForResto.insertCell(0);

      newRowForResto.id = resto[i].name;

      html += "<tr><td><div id=\"nom\"><a href =" + resto[i].website + ">" + resto[i].name + "</a></div></td></tr>";

      if (resto[i].rating === undefined) {
        html += "<tr><td><div> rating is undefined</div></td></tr>";
      } else {
        html += "<tr><td><div>rating: " + resto[i].rating + "/5" + "</div></td></tr>";
      }

      html += "<tr><td><div>" + resto[i].formatted_address + "</div></td></tr>";

      if(resto[i].opening_hours === undefined){
        html += "<tr><td><div> opening hours are unavailable</div></td></tr>";

      }else{html += "<tr><td><div id =\"hours\"> Operation Hours: " + (resto[i].opening_hours.weekday_text).toString() +  "</div></td></tr>";

      }
      newCell.innerHTML = html;
      }
    }
  }
=======
      $(".container").append(clone);
    }

  });
});}
>>>>>>> origin/master
