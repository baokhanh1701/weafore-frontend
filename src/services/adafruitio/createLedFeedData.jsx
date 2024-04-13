import axios from 'axios';

// https://io.adafruit.com/api/v2/NhanPham1411/feeds/humidity/data
const createLedFeedData = async (value) => {
    // console.log(value)
    const result = await axios.post('https://io.adafruit.com/api/v2/NhanPham1411/feeds/led/data',
        {
            "value": value
        },
        {
            headers: {
                "X-AIO-Key": import.meta.env.VITE_ADAFRUIT_API_KEY
            }
        }
    ).then(res => {
        console.log(res)
    }).catch(e => {
        console.log(e)
    })
    return result;

}

export default createLedFeedData;