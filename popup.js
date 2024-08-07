function saveData(vin, date, rej, localResult, abroadResult) {
  chrome.storage.local.set({
    vin,
    date,
    rej,
    localResult,
    abroadResult
  }, () => {
    console.log('Dane i wyniki zostały zapisane');
  });
}

function loadData() {
  chrome.storage.local.get(['vin', 'date', 'rej', 'localResult', 'abroadResult'], (result) => {
    document.getElementById('vin').value = result.vin || '';
    document.getElementById('date').value = result.date || '';
    document.getElementById('rej').value = result.rej || '';
    document.getElementById('result').innerHTML = result.localResult || '';
    document.getElementById('abroad-result').innerHTML = result.abroadResult || '';
  });
}

document.addEventListener('DOMContentLoaded', loadData);

document.getElementById('check-local').addEventListener('click', () => {
  const vin = document.getElementById('vin').value;
  const date = document.getElementById('date').value;
  const rej = document.getElementById('rej').value;

  if (vin && date && rej) {
    const url = `http://localhost:3000/api/check?rej=${rej}&vin=${vin}&date=${date}`;
    
    fetch(url)
      .then(response => response.text())
      .then(html => {
        document.getElementById('result').innerHTML = html;
        saveData(vin, date, rej, html, null);
      })
      .catch(error => {
        document.getElementById('result').innerHTML = `Error: ${error}`;
      });
  } else {
    document.getElementById('result').innerHTML = 'Wszystkie pola są wymagane!';
  }
});

document.getElementById('check-abroad').addEventListener('click', () => {
  const vin = document.getElementById('vin').value;
  const date = document.getElementById('date').value;
  const rej = document.getElementById('rej').value;

  if (vin && date && rej) {
    const url = `http://localhost:3000/api/check/abroad?rej=${rej}&vin=${vin}&date=${date}`;
    
    fetch(url)
      .then(response => response.text())
      .then(html => {
        document.getElementById('abroad-result').innerHTML = html;
        saveData(vin, date, rej, document.getElementById('result').innerHTML, html);
      })
      .catch(error => {
        document.getElementById('abroad-result').innerHTML = `Error: ${error}`;
      });
  } else {
    document.getElementById('abroad-result').innerHTML = 'Wszystkie pola są wymagane!';
  }
});

document.getElementById('clear-data').addEventListener('click', () => {
  chrome.storage.local.clear(() => {
    console.log('Dane i wyniki zostały wyczyszczone');
    document.getElementById('vin').value = '';
    document.getElementById('date').value = '';
    document.getElementById('rej').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('abroad-result').innerHTML = '';
  });
});
