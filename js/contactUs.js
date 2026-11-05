/* global U, removeErrorMessage, addErrorMessage */

// Script - register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.
function validateForm(e) {
    'use strict';

    // Get the event object:
	if (typeof e == 'undefined') e = window.event;

    // Get form references:
	var firstName = U.$('firstName');
	var email = U.$('email');
	var message = U.$('message');

	// Flag variable:
	var error = false;

	// Validate the first name:
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value) || firstName.value.trim() === '') {
		removeErrorMessage('firstName');
	} else {
		addErrorMessage('firstName', 'Please enter a valid name.');
		error = true;
	}
	
	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value) || email.value.trim() === '') {
		removeErrorMessage('email');
	} else {
		addErrorMessage('email', 'Please enter a valid email address.');
		error = true;
	}
	
	// Validate message:
	if (message.value.trim() !== '') {
		removeErrorMessage('message');
	} else {
		addErrorMessage('message', 'Please enter a message. This field cannot be blank.');
		error = true;
	}

    // If an error occurred, prevent the default behavior:
	if (error) {

		// Prevent the form's submission:
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
    
	}
    
} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
    
	// Get a reference to the submit button:
	var submit = U.$('submit');
	
	// Toggle its disabled property:
	if (U.$('terms').checked) {
		submit.disabled = false;
		submit.style.opacity = 1;
	} else {
		submit.disabled = true;
		submit.style.opacity = 0.5;
	}
	
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// The validateForm() function handles the form:
    U.addEvent(U.$('theForm'), 'submit', validateForm);

	// Disable the submit button to start:
	U.$('submit').disabled = true;
	U.$('submit').style.opacity = 0.5;

	// Watch for changes on the terms checkbox:
    U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// Enbable tooltips:
	U.enableTooltips('email');
    
};