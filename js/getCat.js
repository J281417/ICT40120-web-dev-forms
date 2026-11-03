// Script - register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.
function fetchCatData() {
    var catImage = document.getElementById('catImage');
    var catFact = document.getElementById('catFact');

    // Get image
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(function (response) {
            // If the response is successful, get the JSON
            if (response.ok) {
                return response.json();
            }

            // Otherwise, throw an error
            throw response.status;
        })
        .then(function (data) {
            catImage.src = data[0].url;
        })

        // .then(function (data) {
        //     // This is the JSON from our response
        //     // Display the post titles and bodies in the postContainer
        //     const postContainer = document.getElementById('postContainer');
        //     data.forEach(function (post) {
        //         const postElement = document.createElement('div');
        //         postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        //         postContainer.appendChild(postElement);
        //     });
        // })
        .catch(function (error) {
            // There was an error
            console.warn(error);
        });

    // Get fact
    fetch('https://catfact.ninja/fact')
        .then(function (response) {
            // If the response is successful, get the JSON
            if (response.ok) {
                return response.json();
            }

            // Otherwise, throw an error
            throw response.status;
        })
        .then(function (data) {
            catFact.textContent = data.fact;
        })

        // .then(function (data) {
        //     // This is the JSON from our response
        //     // Display the post titles and bodies in the postContainer
        //     const postContainer = document.getElementById('postContainer');
        //     data.forEach(function (post) {
        //         const postElement = document.createElement('div');
        //         postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        //         postContainer.appendChild(postElement);
        //     });
        // })
        .catch(function (error) {
            // There was an error
            console.warn(error);
        });
}

// Establish functionality on window load:
window.onload = function() {
    'use strict';
    fetchCatData();
    document.getElementById("newCatData").addEventListener("click", fetchCatData, false);

	// // The validateForm() function handles the form:
    // U.addEvent(U.$('theForm'), 'submit', validateForm);

	// // Disable the submit button to start:
	// U.$('submit').disabled = true;

	// // Watch for changes on the terms checkbox:
    // U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// // Enbable tooltips on the phone number:
	// U.enableTooltips('phone');
    
};