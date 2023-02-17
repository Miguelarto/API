fetch('https://restcountries.com/v3.1/all')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
   console.log(JSON.stringify(data));
  })
  .catch(function(error) {
    console.error('Error:', error);
  });

var countryList = document.getElementById('countryList');

fetch('https://restcountries.com/v3.1/all')
  .then(function(response) {
    
    return response.json();
  })
  .then(function(data) {
   
    data.forEach(function(country) {
      var li = document.createElement('li');
      var name = document.createTextNode('Nombre: ' + country.name.common);
      var capital = document.createTextNode('Capital: ' + country.capital[0]);
      var population = document.createTextNode('Población: ' + country.population);
      li.appendChild(name);
      li.appendChild(document.createElement('br'));
      li.appendChild(capital);
      li.appendChild(document.createElement('br'));
      li.appendChild(population);
      li.appendChild(document.createElement('hr'));
      countryList.appendChild(li);
    });
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
