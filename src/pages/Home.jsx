import { Layout, theme, Typography, Flex, Button } from 'antd';
import HumidityPlot from '../components/HumidityPlot';
import LineChart from '../components/LineChart';
import getTemperatureFeedData from '../adafruitio/getTemperatureFeedData';
import getLedFeedData from '../adafruitio/getLedFeedData';
import getHumidityFeedData from '../adafruitio/getHumidityFeedData';
import getLightFeedData from '../adafruitio/getLightFeedData';
import { useEffect, useState } from 'react';
import jsonata from 'jsonata';
import GaugeChart from '../components/GaugeChart';
const { Content } = Layout;
const { Text } = Typography;


const Home = () => {
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



    useEffect(() => {
        fetchTemperatureData()
        fetchHumidityData()
        fetchLightData()
    }, [])
    return (
        <Layout>
            <Layout>
                <div
                    style={{
                        width: "100vw",
                        backgroundImage: "linear-gradient(to right, #1677ff  0%, #0000 100%)"
                    }}
                >
                    <Text
                        style={{
                            fontSize: "3.5em",
                            paddingLeft: "2rem",
                            color: "#003a8c"
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