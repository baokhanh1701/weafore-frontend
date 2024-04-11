import axios from 'axios';

const getHumidityFeedData = async () => {
    await axios.get('https://io.adafruit.com/api/v2/NhanPham1411/feeds/humidity/data', {
        headers: {
            "X-AIO-Key": "aio_gMrw46fc21Q6JHHwdar3KgKvtCQb"
        }
    }).then(res => {
        console.log(res.data)
        return (res.data)
    }).catch(e => {
        console.log(e)
    })
}

export default getHumidityFeedData;