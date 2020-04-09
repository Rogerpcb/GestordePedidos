function realizarPeticion() {

http_request = new XMLHttpRequest();

http_request.overrideMimeType('text/xml');
http_request.onreadystatechange = function() {
    if (http_request.readyState==4) {
        if (http_request.status==200){
            //hago el proceso
            //procesarJSON("");
            procesarJSON(http_request.responseText);
            
        } else {
            //muestra error
        }
    }
    console.log("STATE:" + http_request.readyState);
    console.log("STATE:" + http_request.status);

};
//var cons = document.getElementById("cons").Value;
var cons = $("#cons").val();

//http_request.open('GET', 'http://localhost:80/GestordePedidos/json/movie.json', true);
http_request.open('GET', 'http://www.omdbapi.com/?t='+cons+'&apikey=6bfd6227',true);
 //]&  //+  $("cajaTexto").val()
http_request.send();

}

function procesarJSON(respuesta) {
    var obj = JSON.parse(respuesta);
    console.log(obj);
    /* version cutre
    $("#pelicula").html("<H1>" + obj.Title + "</H1>");
    $("#pelicula").html($("#pelicula").html() + "<img src='"+ obj.Poster + "'>");
    */
   /* version cutre sin jQuery
    document.getElementById("pelicula").innerHTML="<H1>" + obj.Title + "</H1>";
    document.getElementById("pelicula").innerHTML+="<img src='"+ obj.Poster + "'>";
    */
   //version JQuery
   document.getElementById("pelicula").innerHTML="";
    //////////////////////////////////TITULO
    var h1Titulo =document.createElement("h1");
    textoH1Titulo =document.createTextNode(obj.Title);
    textoH2Year =document.createTextNode(obj.Year);
    textoc1c2=textoH1Titulo ;
    h1Titulo.appendChild(textoH1Titulo);
    h1Titulo.append(" (");
    h1Titulo.appendChild(textoH2Year);
    h1Titulo.append(" )");
    h1Titulo.setAttribute("class","titulo");
   document.querySelector("#pelicula").appendChild(h1Titulo);
    /////////////////////////////////////AÑO
    var h2Year =document.createElement("h2");
    textoH2Year =document.createTextNode(obj.Year);
    h2Year.appendChild(textoH2Year);
    h2Year.setAttribute("class","titulo");
    document.querySelector("#pelicula").appendChild(h2Year);
    /////////////////////////////////////RATED
    var h2Rated =document.createElement("h2");
    textoH2Rated =document.createTextNode(obj.Rated);
    h2Rated.appendChild(textoH2Rated);
    h2Rated.setAttribute("class","titulo");
    document.querySelector("#pelicula").appendChild(h2Rated);
    /////////////////////////////////////Released
    var h2Released =document.createElement("h2");
    textoH2Released =document.createTextNode(obj.Released);
    h2Released.appendChild(textoH2Released);
    h2Released.setAttribute("class","titulo");
    document.querySelector("#pelicula").appendChild(h2Released);
    /////////////////////////////////////Runtime
    var h2Runtime =document.createElement("h2");
    textoH2Runtime =document.createTextNode(obj.Runtime);
    h2Runtime.appendChild(textoH2Runtime);
    h2Runtime.setAttribute("class","titulo");
    document.querySelector("#pelicula").appendChild(h2Runtime);
    /////////////////////////////////////Genre
    var h2Genre =document.createElement("h2");
    textoH2Genre=document.createTextNode(obj.Genre);
    h2Genre.appendChild(textoH2Genre);
    h2Genre.setAttribute("class","titulo");
    document.querySelector("#pelicula").appendChild(h2Genre);    
    /////////////////////////////////////Writer
    var h2Writer =document.createElement("h2");
    textoH2Writer=document.createTextNode(obj.Writer);
    h2Writer.appendChild(textoH2Writer);
    h2Writer.setAttribute("class","titulo");
    document.querySelector("#pelicula").appendChild(h2Writer);
    /////////////////////////////////////Actors
    var h2Actors =document.createElement("h2");
    textoH2Actors=document.createTextNode(obj.Actors);
    h2Actors.appendChild(textoH2Actors);
    h2Actors.setAttribute("class","titulo");
    document.querySelector("#pelicula").appendChild(h2Actors);
    /////////////////////////////////////Plot
    var h2Plot=document.createElement("h2");
    textoH2Plot=document.createTextNode(obj.Plot);
    h2Plot.appendChild(textoH2Plot);
    h2Plot.setAttribute("class","titulo");
    document.querySelector("#pelicula").appendChild(h2Plot);
    /////////////////////////////////////Country
     var h2Country=document.createElement("h2");
     textoH2Country=document.createTextNode(obj.Country);
     h2Country.appendChild(textoH2Country);
     h2Country.setAttribute("class","titulo");
     document.querySelector("#pelicula").appendChild(h2Country);
     ///////////////////////////////////////Awards
     var h2Awards=document.createElement("h2");
     textoH2Awards=document.createTextNode(obj.Awards);
     h2Awards.appendChild(textoH2Awards);
     h2Awards.setAttribute("class","titulo");
     document.querySelector("#pelicula").appendChild(h2Awards);

//////////////////////////////////////////////////////                
   var  imagenPoster = document.createElement("img");
   imagenPoster.setAttribute("src",obj.Poster);
   document.querySelector("#pelicula").appendChild(imagenPoster);

    console.log(respuesta);
    console.log(obj.Title);
    obj.Ratings.forEach(calificacion => {
        console.log(calificacion.Source);
        console.log(calificacion.Value);
    });
}
