import { Layout, theme, Typography, Flex, Card } from 'antd';
import HumidityPlot from '../components/HumidityPlot';
import LineChart from '../components/LineChart';
import getTemperatureFeedData from '../services/adafruitio/getTemperatureFeedData';
import getHumidityFeedData from '../services/adafruitio/getHumidityFeedData';
import getLightFeedData from '../services/adafruitio/getLightFeedData';
import { useEffect, useState } from 'react';
import getCurrentWeatherApi from '../services/weatherapi/getCurrentWeatherApi';
import jsonata from 'jsonata';
import GaugeChart from '../components/GaugeChart';
const { Content } = Layout;
const { Text } = Typography;


const Home = () => {
    const [currentWeather, setCurrentWeather] = useState({})
    const [temperature, setTemperature] = useState([])
    const [humidity, setHumidity] = useState([])
    const [light, setLight] = useState([])

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const jsonata_expression = jsonata("$reverse($.{'value': $number($.value),'date': $.created_at})")

    const fetchTemperatureData = async () => {
        const temperature_data = await getTemperatureFeedData()
        // console.log(temperature_data)
        const result = await jsonata_expression.evaluate(temperature_data)
        setTemperature(result)
    }

    const fetchHumidityData = async () => {
        const humidity_data = await getHumidityFeedData()
        // console.log(humidity_data)
        const result = await jsonata_expression.evaluate(humidity_data)
        setHumidity(result)
        // setHumidity(humidity_data)
    }

    const fetchLightData = async () => {
        const light_data = await getLightFeedData()
        // console.log(light_data)
        const result = await jsonata_expression.evaluate(light_data)
        setLight(result)
    }

    const fetchCurrentWeatherData = async () => {
        const result = await getCurrentWeatherApi();
        setCurrentWeather(result);
        return result;
    }
    useEffect(() => {
        fetchTemperatureData()
        fetchHumidityData()
        fetchLightData()
        fetchCurrentWeatherData()
    }, [])
    return (
        <Layout>
            <Layout>
                <div
                    style={{
                        width: "100vw",
                        height: "10vh",
                        backgroundColor: "#1677ff"
                    }}
                >
                    <Text
                        style={{
                            fontSize: "3.5em",
                            paddingLeft: "2rem",
                            color: "white"
                        }}>
                        Dashboard
                    </Text>
                </div>
                <Content
                    style={{
                        margin: '24px 16px 0',
                        width: "100vw",

                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Text strong
                            style={{
                                fontSize: "4em"
                            }}>
                            Welcome to Weafore!
                        </Text>
                        <br />
                        <Text
                            style={{
                                fontSize: "1.75em"
                            }}
                        >
                            Here is a few insights from our services.
                        </Text>
                        <br />
                        <Text
                            style={{
                                fontSize: "1.75em"
                            }}
                            strong
                        >
                            Humidity
                        </Text>
                        <Flex
                            style={{
                                marginBottom: "5rem",
                            }}
                            wrap="wrap"
                            gap={"small"}
                        >
                            <HumidityPlot data={humidity} />
                            <LineChart data={humidity} />
                        </Flex>
                        <Text
                            style={{
                                fontSize: "1.75em"
                            }}
                            strong
                        >
                            Temperature
                        </Text>
                        <Flex
                            style={{
                                marginBottom: "5rem",
                            }}
                            wrap="wrap"
                            gap={"small"}
                        >
                            <GaugeChart data={temperature} />
                            <LineChart data={temperature} />
                        </Flex>
                        <Text
                            style={{
                                fontSize: "1.75em"
                            }}
                            strong
                        >
                            Light
                        </Text>
                        <Flex
                            style={{
                                marginBottom: "5rem",
                            }}
                            wrap="wrap"
                            gap={"small"}
                        >
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
                                Cloud Coverage: {currentWeather?.current?.cloud ? currentWeather?.current?.cloud : "Loading"} (%)
                                <br />
                                UV Index: {currentWeather?.current?.uv ? currentWeather?.current?.uv : "Loading"}
                            </Card>
                            <LineChart data={light} />
                        </Flex>
                        {/* <Button onClick={getTemperatureFeedData}> Temp</Button>
                        <Button onClick={getLightFeedData}> Light</Button>
                        <Button onClick={getHumidityFeedData}> Humid</Button>
                        <Button onClick={getLedFeedData}> Led</Button> */}

                    </div>
                </Content>
            </Layout>
        </Layout>
    )
};
export default Home;