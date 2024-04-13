import { Card, Flex, Typography } from 'antd'
const { Text } = Typography;

const WeatherCards = ({currentWeather}) => {
    return (
        <Flex
            style={{
                marginBottom: "5rem",
            }}
            wrap="wrap"
            gap={"small"}
        >
            <Card
                title="Temperature"
                bordered={true}
                cover={
                    <img
                        alt="example"
                        src={
                            currentWeather?.current?.temp_c >= 30 ?
                                "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=612x612&w=0&k=20&c=LwLCGF902C-DNwKgCMCR12zFnB4g1INWzlk1JPOidRk="
                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyALC9MG0Y74l12-4J8tPDQimXDpFrGkGgzNSg4slj5Q&s"
                        }
                        width={200}
                        height={200}
                    />
                }
            >
                <Text strong italic>
                    {currentWeather?.current?.temp_c >= 30 ? "Status: Hot" : "Status: Cool"}
                </Text>
                <br />
                Temperature in °C: {currentWeather?.current?.temp_c} (°C)
                <br />
                Temperature in °F: {currentWeather?.current?.temp_f} (°F)
                <br />
                It feels like: {currentWeather?.current?.feelslike_c} (°C)
            </Card>
            <Card
                title="Humidity"
                bordered={true}
                cover={
                    <img
                        alt="example"
                        src="https://media.istockphoto.com/id/871142028/photo/window-with-water-drops-closeup-inside-selective-focus.jpg?s=612x612&w=0&k=20&c=aA-TO2zLMchtB_AZxF4glZgFBjmPCkhc_jRYZ-rKOTQ="
                        width={200}
                        height={200}
                    />
                }
            >
                <Text strong italic>
                    {currentWeather?.current?.humidity >= 70 ? "Status: Wet" : "Status: Dry"}
                </Text>
                <br />
                Humidity: {currentWeather?.current?.humidity} (%)
                <br />
                Precipation: {currentWeather?.current?.precip_mm} (mm)
                <br />
            </Card>
            <Card
                title="Light"
                bordered={true}
                cover={
                    <img
                        alt="example"
                        src={
                            currentWeather?.current?.is_day ?
                                "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4="
                                : "https://st2.depositphotos.com/4164031/7029/i/450/depositphotos_70298385-stock-photo-deep-space.jpg"
                        }
                        width={200}
                        height={200}
                    />
                }
            >

                <Text strong italic>
                    Status: {currentWeather?.current?.is_day ? "Good Day Ahead!" : "Sleep Tight!"}
                </Text>
                <br />
                Cloud Coverage: {currentWeather?.current?.cloud} (%)
                <br />
                UV Index: {currentWeather?.current?.uv}
            </Card>
            <Card
                title="Air Quality"
                bordered={true}
                cover={
                    <img
                        alt="example"
                        src="https://media.istockphoto.com/id/1499689170/photo/hand-holding-a-magnifying-glass-to-check-the-good-air-quality-and-clean-outdoor-air-quality.jpg?s=612x612&w=0&k=20&c=dxskGKiL2sxtrJAVufGmbV-ZxzYmWZIttcXZzG3v3Jg="
                        width={200}
                        height={200}
                    />
                }
            >
                <Text strong italic>
                    Status: Average
                </Text>
                <br />
                CO: {currentWeather?.current?.air_quality?.co}
                <br />
                NO2: {currentWeather?.current?.air_quality?.no2}
                <br />
                O3: {currentWeather?.current?.air_quality?.o3}
                <br />
                SO2: {currentWeather?.current?.air_quality?.so2}

            </Card>
        </Flex>

    )
}

export default WeatherCards;