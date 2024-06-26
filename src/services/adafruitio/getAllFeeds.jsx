import axios from 'axios';
// import * as dotenv from 'dotenv';

const getAllFeeds = async () => {
    const result = await axios.get('https://io.adafruit.com/api/v2/NhanPham1411/feeds/', {
        headers: {
            "X-AIO-Key": import.meta.env.VITE_ADAFRUIT_API_KEY
        }
    }).then(res => {
        return (res.data)
    }).catch(e => {
        console.log(e)
    })
    return result;
}

export default getAllFeeds;