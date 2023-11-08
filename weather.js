//Complete the Weather API Backend part using openweathermap api

var array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

var monthss = ['January','Febuary', 'March','April','May','June','July','August','September','October','November','December']

fetch('https://api.openweathermap.org/data/2.5/weather?q=jaipur,in&APPID=1342f8dd595eda677ca40143519800de')
  .then(response => response.json())
  .then((parsedData) => {
    console.log(parsedData)

    const nameOfLocation=parsedData.name;
    console.log(nameOfLocation)
    document.getElementsByClassName("cityname")[0].textContent=nameOfLocation;

    const newdate = new Date(parsedData.dt*1000);
    document.getElementsByClassName('dates')[0] . textContent =
    array[newdate.getDay()-1]+ ' ' + newdate.getDate() + ' ' + monthss[newdate.getMonth()] + ' ' + newdate.getFullYear();
    console.log(newdate)
  
    const temperature = parsedData.main.temp;
    console.log(temperature)
    document.getElementById('temperature').textContent = Math.floor (temperature - 273) + '\xBA' + 'C';

    const weather = parsedData.weather[0].main;
    document.getElementById('weather') .textContent = weather
  
    const maxtemp = parsedData.main.temp_max;
    const mintemp = parsedData.main.temp_min;
    console.log(maxtemp)
    console.log(mintemp)
    document.getElementById('tempp') .textContent= Math.floor(maxtemp - 273) + 
    '\xBA' +
    ' ' +
    'C' +
    ' ' + 
    '/'+ 
    ' '+
    Math.floor(mintemp - 273) +
    '\xBA' 
    +' ' 
    +'C';
  });




// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
