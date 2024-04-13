import axios from 'axios';
// import * as dotenv from 'dotenv';
//http://api.weatherapi.com/v1/forecast.json?key=6d03368112994b2aa8d161407241204&q=Ho Chi Minh City&days=5&aqi=yes&alerts=yes

const getWeatherForecast = async () => {
    const result = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=Ho Chi Minh City&days=5&aqi=yes&alerts=yes`).then(res => {
        console.log(res.data)
        return (res.data)
    }).catch(e => {
        console.log(e)
    })
    return result;
}

export default getWeatherForecast;