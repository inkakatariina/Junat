fetch('https://api.visittampere.com/api/v1/visittampere/event/published/all/?format=json&lang=fi')

// Muunnetaan vastaus JSON muotoon
.then(function (response) {
return response.json();
})
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {
//funktiokutsu
kerro(responseJson);
})

// Jos tuli jokin virhe
.catch(function (error) {
document.getElementById("vastaus").innerHTML =
"<p>Tietoa ei pystytä hakemaan </p>"+ error;
})

function kerro(data){
    var teksti = "";

//taulukon läpikäynti
for (var i=0; i<data.length; i++){
    teksti = teksti + "<h3>" + data[i].title+"</h3><p>"+data[i].description + "</p>";
}

document.getElementById("vastaus").innerHTML=teksti;
}

function tapahtumat(data){
    var teksti = "";
    for(var i = 0; i < data.length; i++) {
    //hae tapahtuman nimi, kuvaus ja url-osoite
     }
    // tulosta teksti-muuttujan sisältö web-sivulle
    }