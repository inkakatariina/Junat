// Hakee kameradataa annetusta API-osoitteesta
fetch('https://tie.digitraffic.fi/api/weathercam/v1/stations/C04507')
    .then(response => response.json())
    .then(data => {
        // Kutsutaan funktiota datan käsittelyyn
        naytaKamerat(data);
    })
    .catch(error => {
        console.error('Virhe haettaessa kameradataa:', error);
    });

function naytaKamerat(data) {
    const container = document.getElementById('cameraContainer');
    let htmlContent = '';

    // Käy kaikki preset-kamerat läpi
    for (let i = 0; i < data.properties.presets.length; i++) {
        const camera = data.properties.presets[i];
        const imageUrl = camera.imageUrl || ''; // Haetaan kuvan URL
        const presentationName = camera.presentationName || 'Tuntematon nimi'; // Haetaan esitysnimi

        if (imageUrl) {
            htmlContent += `
                <div class="camera">
                    <p>Suunta: ${presentationName}</p>
                    <img src="${imageUrl}" alt="${presentationName}">
                </div>`;
        }
    }

    // Tulostetaan kuvat web-sivulle
    container.innerHTML = htmlContent || '<p>Ei kuvia saatavilla.</p>';
}
