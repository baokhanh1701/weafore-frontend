import axios from 'axios';

const createServoFeedData = async (value) => {
    const result = await axios.post('https://io.adafruit.com/api/v2/NhanPham1411/feeds/servo/data',
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

export default createServoFeedData;