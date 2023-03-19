

class WeatherManager {
    constructor() {
        this.currentData = [];
    }
    saveNewCity(cityName) {
        return $.post(`http://localhost:3000/newcity?cityName=${cityName}`)
    }
    getAllWeather() {
        this.currentData = []
        return $.get('http://localhost:3000/getcitys').then(allWeatherData => {
            allWeatherData.forEach(w => this.currentData.push(w))
        })
    }
    removeCity(cityName) {
        return $.ajax({
            url: `http://localhost:3000/removecity?cityName=${cityName}`,
            type: 'DELETE',
            success: function (result) {
            }
        })

    }

}



