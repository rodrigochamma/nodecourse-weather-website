const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b5d73790b48343beb72a0d6e0a0792fd/'+ encodeURIComponent(latitude) +','+encodeURIComponent(longitude)+'?units=si'

    request({url, json:true}, (error,{body}) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {            
            callback(undefined,
                // body.daily.data[0].summary + ' It is currently ' +
                // body.currently.temperature + ' degrees out. There is a ' + 
                // body.currently.precipProbability + '% chance of rain.'
                body.daily.data[0].summary + ' It is currently ' +
                body.currently.temperature + ' degrees out. The lowest temperature will be ' +
                body.daily.data[0].temperatureLow + ' degrees and the hiest ' + 
                body.daily.data[0].temperatureHigh + ' degrees. There is a ' + 
                body.currently.precipProbability + '% chance of rain.'
            )
        }
    })
}

module.exports = forecast
