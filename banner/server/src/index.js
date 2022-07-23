const OpenWeatherAPI = require("openweather-api-node")

let weather = new OpenWeatherAPI({
    key: "fb4a842bfe7a9cc2b823b73ae6de7160",
    locationName: "New York",
    units: "imperial"
})

/* 
you can use setters as well:
weather.setKey("put-key-here")
weather.setLocationByName("New York")
...
*/

weather.getCurrent().then(data => {
    console.log(`Current temperature in New York is: ${data.weather.temp.cur}\u00B0F`)
    console.log("data", data)
})