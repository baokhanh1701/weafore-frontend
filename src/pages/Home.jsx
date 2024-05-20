import { Layout, theme, Typography, Flex, Card, Switch, Button } from 'antd';
import HumidityPlot from '../components/HumidityPlot';
import LineChart from '../components/LineChart';
import getTemperatureFeedData from '../services/adafruitio/getTemperatureFeedData';
import getHumidityFeedData from '../services/adafruitio/getHumidityFeedData';
import getLightFeedData from '../services/adafruitio/getLightFeedData';
import { useEffect, useState } from 'react';
import getCurrentWeatherApi from '../services/weatherapi/getCurrentWeatherApi';
import jsonata from 'jsonata';
import GaugeChart from '../components/GaugeChart';
import getServoFeedData from '../services/adafruitio/getServoFeedData'
import getLedFeedData from '../services/adafruitio/getLedFeedData';
import DualLineChart from '../components/DualLineChart';
import createServoFeedData from '../services/adafruitio/createServoFeedData';
import createLedFeedData from '../services/adafruitio/createLedFeedData';
const { Content } = Layout;
const { Text } = Typography;


const Home = () => {
    const [led, setLed] = useState([])
    const [servo, setServo] = useState([])
    const [currentWeather, setCurrentWeather] = useState({})
    const [temperature, setTemperature] = useState([])
    const [humidity, setHumidity] = useState([])
    const [light, setLight] = useState([])
    const [servoSwitch, setServoSwitch] = useState(0)
    const [ledSwitch, setLedSwitch] = useState(0)

    const fetchServoData = async () => {
        const servo_data = await getServoFeedData()
        // console.log(servo_data)
        const result = await jsonata_expression.evaluate(servo_data)
        setServoSwitch(result[result.length - 1].value)
        setServo(result)
    }

    const fetchLedData = async () => {
        const led_data = await getLedFeedData()
        // console.log(led_data)
        const result = await jsonata_expression.evaluate(led_data)
        setLedSwitch(result[result.length - 1].value)
        setLed(result)
    }

    const switchLed = async (value) => {
        // console.log(`switch to ${+value}`);
        setLedSwitch(+value)
        await createLedFeedData(+value)
        alert('Switched led')
    }

    const switchServo = async (value) => {
        console.log(`switch to ${+value}`);
        setServoSwitch(+value)

        await createServoFeedData(+value)
        alert('Switched servo')
    }
    useEffect(() => {
        fetchLedData()
        fetchServoData()
    }, [servoSwitch, ledSwitch])
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
                        width: "100%",
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
                <Content>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            width: "100%",
                        }}
                    >
                        <Text strong
                            style={{
                                fontSize: "3em"
                            }}>
                            Welcome to Weafore!
                        </Text>
                        <br></br>
                        <Text
                            style={{
                                fontSize: "1.5em",
                                marginBottom: "1.5rem"
                            }}
                        >
                            Here is a few key insights from our services.
                        </Text>
                        <Flex
                            wrap='wrap'
                            gap="small"
                        >
                            <div
                                style={{
                                    border: "1px solid #001d66",

                                    borderRadius: "10px",
                                }}
                            >
                                <br></br>
                                <Text
                                    style={{
                                        fontSize: "1.5em",
                                        marginLeft: "1.5rem",
                                    }}
                                    strong
                                >
                                    Key Insights
                                </Text>
                                <Flex
                                    style={{
                                        marginBottom: "2.5rem",
                                    }}
                                    wrap="wrap"
                                    gap={"small"}
                                >
                                    <Flex
                                        style={{

                                            height: "100%",
                                            paddingTop: "1.5rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                margin: "1.5rem",
                                                marginTop: "-1.5rem",

                                            }}
                                        >
                                            <Card
                                                style={{
                                                    paddingBottom: "1rem",
                                                    paddingTop: "1rem",
                                                    paddingLeft: "1rem",
                                                    paddingRight: "1rem",
                                                    border: "1px solid #030852",
                                                    height: "25rem",
                                                    width: "15rem"
                                                }}
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
                                                        width={150}
                                                        height={150}
                                                    />
                                                }
                                            >
                                                <Text strong italic
                                                    style={{
                                                        fontWeight: "bold",
                                                        fontSize: "1rem",
                                                    }}>
                                                    Status: {currentWeather?.current?.is_day ? "Good Day Ahead!" : "Sleep Tight!"}
                                                </Text>
                                                <br />
                                                Cloud Coverage: {currentWeather?.current?.cloud ? currentWeather?.current?.cloud : "Loading"} (%)
                                                <br />
                                                UV Index: {currentWeather?.current?.uv ? currentWeather?.current?.uv : "Loading"}
                                            </Card>
                                        </div>
                                        <div
                                            style={{
                                                margin: "1.5rem",
                                                marginTop: "-1.5rem",

                                            }}
                                        >
                                            <HumidityPlot data={humidity} />
                                        </div>
                                        <div
                                            style={{
                                                margin: "1.5rem",
                                                marginTop: "-1.5rem",
                                            }}
                                        >
                                            <GaugeChart data={temperature} />
                                        </div>
                                    </Flex>

                                </Flex>
                                <Flex
                                    vertical={true}
                                    gap={"small"}
                                >
                                    <Text
                                        style={{
                                            fontSize: "1.5em",
                                            marginLeft: "1.5rem"
                                        }}
                                        strong
                                    >
                                        Humidity
                                    </Text>
                                    <LineChart data={humidity} />
                                </Flex>
                                <Flex
                                    vertical={true}
                                    gap={"small"}
                                >
                                    <Text
                                        style={{
                                            fontSize: "1.5em",
                                            marginLeft: "1.5rem"
                                        }}
                                        strong
                                    >
                                        Temperature
                                    </Text>
                                    <LineChart data={temperature} />
                                </Flex>
                                <Flex
                                    vertical={true}
                                    gap={"small"}
                                >
                                    <Text
                                        style={{
                                            fontSize: "1.5em",
                                            marginLeft: "1.5rem"
                                        }}
                                        strong
                                    >
                                        Light
                                    </Text>
                                    <LineChart data={light} />
                                </Flex>
                            </div>
                            <div
                                style={{
                                    height: "100%",
                                    marginLeft: "10rem",
                                }}
                            >
                                <div
                                    style={{
                                        position: "fixed",
                                        top: "50%",
                                        left: "80%",
                                        transform: "translate(-50%, -50%)",
                                        padding: "10px",
                                        borderRadius: "10px",
                                        border: "1px solid #001d66",
                                        backgroundColor: "#91caff",
                                        color: "white"
                                    }}
                                >
                                    <div
                                        style={{ margin: "2.5rem" }}
                                    >
                                        <Flex vertical={true}
                                            style={{
                                                paddingRight: "2.5rem"
                                            }}
                                        >
                                            <Text style={{
                                                fontSize: "1rem",
                                                fontWeight: "bold"
                                            }}> Roof Control Switch </Text>
                                            <Text style={{
                                            }}> Control your roof with one click. </Text>
                                            <Switch
                                                style={{
                                                    width: "5rem",
                                                }}
                                                value={servoSwitch}
                                                onChange={switchServo}

                                            />
                                        </Flex>
                                        <br />
                                        <br />
                                        <Flex vertical={true}
                                            style={{
                                                paddingRight: "5rem"
                                            }}
                                        >
                                            <Text style={{
                                                fontSize: "1rem",
                                                fontWeight: "bold"
                                            }}> Led Control Switch </Text>
                                            <Text style={{
                                            }}> Turn On/Off your LED. </Text>
                                            <Switch style={{
                                                width: "5rem",
                                            }}
                                                value={ledSwitch}
                                                onChange={switchLed}
                                            />
                                        </Flex>
                                        <br />
                                        <br />
                                        <Flex
                                            vertical={true}
                                            style={{
                                                paddingRight: "5rem"
                                            }}
                                        >
                                            <Button style={{ margin: "1rem" }} onClick={getTemperatureFeedData}> Get Temperature Feed Data</Button>
                                            <Button style={{ margin: "1rem" }} onClick={getLightFeedData}> Get Light Feed Data</Button>
                                            <Button style={{ margin: "1rem" }} onClick={getHumidityFeedData}> Get Humidity Feed Data</Button>
                                            <Button style={{ margin: "1rem" }} onClick={getLedFeedData}> Get Led Feed Data</Button>

                                        </Flex>
                                    </div>
                                </div>
                            </div>

                        </Flex>

                    </div>
                </Content>
            </Layout>
        </Layout>
    )
};
export default Home;