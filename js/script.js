
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('mapid').setView([23.860, -103.10], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([23.860, -103.10]).addTo(map)
        .bindPopup('Instituto Tecnológico Superior Zacatecas Norte')
        .openPopup();

});
