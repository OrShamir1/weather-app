class Renderer {
    constructor() {
    this.cardTemplateSource = $("#weather-card-template").html();
    this.cardTemplate = Handlebars.compile(this.cardTemplateSource);
    }
    renderWeatherData(WeatherData) {
        let newWeatherCard = this.cardTemplate({name: WeatherData.name, condition: WeatherData.condition, conditionPic: WeatherData.conditionPic, temperature: WeatherData.temperature});
        $("#weather-card-container").append(newWeatherCard)
       
    }
}