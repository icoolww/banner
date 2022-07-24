const OpenWeatherAPI = require("openweather-api-node")

let weather = new OpenWeatherAPI({
    key: "fb4a842bfe7a9cc2b823b73ae6de7160",
    locationName: "Vancouver",
    units: "metric"
})

/* 
you can use setters as well:
weather.setKey("put-key-here")
weather.setLocationByName("New York")
...
*/

weather.getCurrent().then(data => {
    console.log(`Current temperature in Vancouver is: ${data.weather.temp.cur}\u00B0C`)
    console.log("data", data)
})


// http://api.openweathermap.org/geo/1.0/zip?zip=V5R4W3,ca&appid=fb4a842bfe7a9cc2b823b73ae6de7160

// https://api.openweathermap.org/data/2.5/weather?lat=49.2357&lon=-123.034&appid=fb4a842bfe7a9cc2b823b73ae6de7160