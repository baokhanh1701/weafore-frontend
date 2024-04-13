import axios from 'axios';
// import * as dotenv from 'dotenv';

const getWeatherHistory = async (date) => {
    const result = await axios.get(`https://api.weatherapi.com/v1/history.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=Ho Chi Minh City&dt=${date}`).then(res => {
        console.log(res.data)
        return (res.data)
    }).catch(e => {
        console.log(e)
    })
    return result;
}

export default getWeatherHistory;