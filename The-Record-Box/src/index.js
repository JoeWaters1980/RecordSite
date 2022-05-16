'use strict'

let gogglePayClient;

function onGoogleLoaded() {
    gogglePayClient =
    new google.payments.api.PaymentsClient({environment: 'TEST'});
    throw new Error('Function not implemented.');
  };