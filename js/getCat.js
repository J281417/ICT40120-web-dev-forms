
function fetchCatData() {
    'use strict';
    var catImage = document.getElementById('catImage');
    var catFact = document.getElementById('catFact');

    // Get image
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw response.status;
        })
        .then(function (data) {
            catImage.src = data[0].url;
        })
        .catch(function (error) {
            console.warn(error);
        });

    // Get fact
    fetch('https://catfact.ninja/fact')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw response.status;
        })
        .then(function (data) {
            catFact.textContent = data.fact;
        })
        .catch(function (error) {
            // There was an error
            console.warn(error);
        });
}

window.onload = function() {
    'use strict';
    fetchCatData();
    document.getElementById("newCatData").addEventListener("click", fetchCatData, false);
};