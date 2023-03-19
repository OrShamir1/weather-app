
const Weather = new WeatherManager
const Render = new Renderer
Weather.getAllWeather().then(function() {
    Weather.currentData.forEach(w => Render.renderWeatherData(w))
})

$("#submit").on('click', function () {
    const cityToAdd = $("#user-input").val()
    Weather.saveNewCity(cityToAdd)
        .then(function () {
            Weather.getAllWeather()
        .then(function() {
            $("#weather-card-container").empty()
            Weather.currentData.forEach(w => Render.renderWeatherData(w))  
        })
        })
}
)


$("body").on('click', '.close-button', function () {
    const cityToRemove = $(this).parent().children('div').html()
    
    Weather.removeCity(cityToRemove)
        .then(function () {
            Weather.getAllWeather()
        .then(function() {
            $("#weather-card-container").empty()
            Weather.currentData.forEach(w => Render.renderWeatherData(w))  
        })
        })
    

})