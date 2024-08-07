// function extractData() {
//     const vinElement = document.querySelector('div[data-testid="advert-vin"] .e4cq37s0');
//     const registrationNumberElement = document.querySelector('div[data-testid="advert-details-item"] p:contains("Numer rejestracyjny pojazdu") + p');
//     const firstRegistrationDateElement = document.querySelector('div[data-testid="advert-details-item"] p:contains("Data pierwszej rejestracji w historii pojazdu") + p');
  
//     const vin = vinElement ? vinElement.textContent.trim() : null;
//     const registrationNumber = registrationNumberElement ? registrationNumberElement.textContent.trim() : null;
//     const firstRegistrationDate = firstRegistrationDateElement ? firstRegistrationDateElement.textContent.trim() : null;
  
//     console.log('VIN:', vin);
//     console.log('Registration Number:', registrationNumber);
//     console.log('First Registration Date:', firstRegistrationDate);

//     chrome.runtime.sendMessage({
//       action: 'sendDataToAPI',
//       data: {
//         vin,
//         registrationNumber,
//         firstRegistrationDate
//       }
//     });
//   }
  
//   extractData();
  