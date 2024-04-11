import axios from 'axios';

const getLightFeedData = async () => {
    await axios.get('https://io.adafruit.com/api/v2/NhanPham1411/feeds/light/data', {
        headers: {
            "X-AIO-Key": import.meta.env.VITE_ADAFRUIT_API_KEY
        }
    }).then(res => {
        console.log(res.data)
        return (res.data)
    }).catch(e => {
        console.log(e)
    })
}

export default getLightFeedData;