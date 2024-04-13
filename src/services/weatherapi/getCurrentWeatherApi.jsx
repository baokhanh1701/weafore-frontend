//http://api.weatherapi.com/v1/current.json?key=6d03368112994b2aa8d161407241204&q=Ho Chi Minh City&aqi=no
import axios from 'axios';
// import * as dotenv from 'dotenv';

const getCurrentWeatherApi = async () => {
    const result = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=Ho Chi Minh City&aqi=yes`).then(res => {
        return (res.data)
    }).catch(e => {
        console.log(e)
    })
    return result;
}

export default getCurrentWeatherApi;