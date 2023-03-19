const axios= require('axios');
const express = require('express');
const router = express.Router()


const Weather = require("../module/weather-schema");

router.post('/newcity', function (req, res) {
    cityName = req.query.cityName
    axios.get(`https://api.weatherapi.com/v1/current.json?key=9ef5c07cf5b84dd3aea193216231503&q=${cityName}&country=Israel`)
        .then(cityWeatherData => {
            const weatherData = cityWeatherData.data
            const name = weatherData.location.name;
            const temperature = weatherData.current.temp_c;
            const conditionText = weatherData.current.condition.text;
            const conditionIcon = weatherData.current.condition.icon;
            const filteredWeatherData = {
                name: name,
                temperature: temperature,
                condition: conditionText, 
                conditionPic: conditionIcon
            } 
            let newCity = new Weather ({name: filteredWeatherData.name, temperature: weatherData.current.temp_c, condition: weatherData.current.condition.text, conditionPic: weatherData.current.condition.icon})
            newCity.save()
            res.send(`${filteredWeatherData.name} has been added`)
        }).catch(err => {
            console.log(err);
        })
})

router.get('/getcitys', function (req, res) {
    Weather.find({}).then(allWeatherData => {
        res.send(allWeatherData)
    })

})

router.delete('/removecity', function (req, res) {
    cityName = req.query.cityName;
    Weather.findOneAndRemove({name: cityName})
        .then(res.send("Removed"))
})

module.exports = router