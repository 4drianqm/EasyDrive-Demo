import React from 'react';


export const EmailTemplate= (formdatos) => (
    <div>
      <h1>Welcome!</h1>
      <p>Here is the information you submitted:</p>
      <ul>
        <li>Pickup location: {formdatos.location}</li>
        <li>Pickup date: {formdatos.pickUpDate}</li>
        <li>Dropoff date: {formdatos.dropOffDate}</li>
        <li>Pickup time: {formdatos.pickUpTime}</li>
        <li>Dropoff time: {formdatos.dropOffTime}</li>
        <li>Contact number: {formdatos.contactNumber}</li>
      </ul>
    </div>
);
