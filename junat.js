// Hakee junatiedot Helsingistä Tampereelle
fetch('https://rata.digitraffic.fi/api/v1/live-trains/station/HKI?departing_trains=100&include_nonstopping=false')
    .then(response => response.json())
    .then(data => {
        // Kutsutaan funktiota junien näyttämiseen
        naytaJunat(data);
    })
    .catch(error => {
        console.error('Virhe haettaessa junatietoja:', error);
    });

function naytaJunat(data) {
    const container = document.getElementById('trainContainer');
    let htmlContent = '';

    htmlContent += `<h2>Juna-asemat</h2>`;

    // Käy kaikki junat läpi
    for (let i = 0; i < data.length; i++) {
        const train = data[i];
        
        // Käy aikataulut (timeTableRows) läpi
        for (let j = 0; j < train.timeTableRows.length; j++) {
            const row = train.timeTableRows[j];

            // Jos asema on Tampere (TPE) ja juna lähtee (DEPARTURE)
            if (row.stationShortCode === "TPE" && row.type === "DEPARTURE") {
                const departureTime = row.scheduledTime.substr(0, 10) + " kello: " + row.scheduledTime.substr(11, 5);
                const departureStation = train.timeTableRows[0].stationShortCode; // Lähtöasema
                const arrivalStation = train.timeTableRows[train.timeTableRows.length - 1].stationShortCode; // Määränpääasema

                // Asemakohtainen otsikko ja juna-aikataulu
                htmlContent += `
                    <div class="train">
                        <h3>Asema: ${departureStation} - Määränpää: ${arrivalStation}</h3>
                        <p>Juna: ${train.trainType} ${train.trainNumber}</p>
                        <p>Lähtöaika: ${departureTime}</p>
                        <p>Kategoria: ${train.trainCategory}</p>
                        <br>
                    </div>`;
            }
        }
    }

    // Tulostetaan junat web-sivulle
    container.innerHTML = htmlContent || '<p>Ei junia saatavilla.</p>';
}
