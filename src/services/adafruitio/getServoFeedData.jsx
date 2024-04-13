import axios from 'axios';

const getServoFeedData = async () => {
    const result = await axios.get('https://io.adafruit.com/api/v2/NhanPham1411/feeds/servo/data', {
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

export default getServoFeedData;