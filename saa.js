fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=helsinki&units=metric&APPID=665ecd56dfc08dbb50feb8b8f5034e28')

//muunnetaan vastaus JSON mutoon
.then(function(response){
    return response.json();
})
//käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {
    //funktiokutsu
    kerro(responseJson, 'helsinki');
})

//jos tuli jokin virhe
.catch(function (error){
document.getElementById("vastaus").innerHTML =
"<p>Tietoa ei pystytä hakemaan</p>";
});

fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=tampere&units=metric&APPID=665ecd56dfc08dbb50feb8b8f5034e28')

//muunnetaan vastaus JSON mutoon
.then(function(response){
    return response.json();
})
//käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {
    //funktiokutsu
    kerro(responseJson, 'tampere');
})

//jos tuli jokin virhe
.catch(function (error){
document.getElementById("vastaus2").innerHTML =
"<p>Tietoa ei pystytä hakemaan</p>";
});

function kerro(data, city){

//muuttuja teksti, johon tulostettava tieto kerätään
var teksti="";
//kaupungin nimi
teksti = teksti + "<h3>" + data.name + "</h3>";
teksti += "<p>Lämpötila: " + data.main.temp + " °C</p>"; // Lämpötila
teksti += "<p>Säätila: " + data.weather[0].description + "</p>"; // Säätila

// Kuvake
var kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
teksti += "<img src='" + kuva + "' alt='Säätilan kuvake'>"; // Kuvan lisääminen

    
//tulostus sivulle
if (city === 'helsinki') {
    document.getElementById("vastaus").innerHTML = teksti; // Helsingin tiedot
} else if (city === 'tampere') {
    document.getElementById("vastaus2").innerHTML = teksti; // Tampereen tiedot
}

}
