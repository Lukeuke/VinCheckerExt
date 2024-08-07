chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'sendDataToAPI') {
      const { vin, registrationNumber, firstRegistrationDate } = message.data;
  
      const formattedDate = new Date(firstRegistrationDate).toISOString().split('T')[0].split('-').reverse().join('-');
  
      fetch(`http://localhost:3000/api/check?rej=${registrationNumber}&vin=${vin}&date=${formattedDate}`)
        .then(response => response.text())
        .then(html => {
          chrome.storage.local.set({ apiResponse: html }, () => {
            console.log('API response saved.');
          });
        })
        .catch(error => console.error('Error:', error));
    }
  });
  