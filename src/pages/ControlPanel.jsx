import { useState, useEffect } from 'react';
import jsonata from 'jsonata';
import { Layout, theme, Typography, Switch, Flex, Card } from 'antd';
import getServoFeedData from '../services/adafruitio/getServoFeedData'
import getLedFeedData from '../services/adafruitio/getLedFeedData';
import DualLineChart from '../components/DualLineChart';
import createServoFeedData from '../services/adafruitio/createServoFeedData';
import createLedFeedData from '../services/adafruitio/createLedFeedData';

const { Content } = Layout;
const { Text } = Typography;



const ControlPanel = () => {
    const [led, setLed] = useState([])
    const [servo, setServo] = useState([])
    const jsonata_expression = jsonata("$reverse($.{'value': $number($.value),'date': $.created_at})")
    const [servoSwitch, setServoSwitch] = useState(0)
    const [ledSwitch, setLedSwitch] = useState(0)
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

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

    return (
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
                    Control Panel
                </Text>
            </div>
            <Content
                style={{
                    margin: '24px 16px 0',
                    width: "100%",
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
                    <Flex
                        style={{
                            marginBottom: "5rem",
                        }}
                        wrap="wrap"
                        gap={"small"}
                    >
                        <Flex
                            style={{
                                paddingBottom: 24,
                            }}
                        >
                            <div>
                                <Flex vertical={true}
                                    style={{
                                        paddingRight: "5rem"
                                    }}
                                >
                                    <Text style={{
                                        fontSize: "2rem"
                                    }}> Roof Control Switch </Text>
                                    <Text style={{
                                        fontSize: "1rem"
                                    }}> Control your roof with one click. </Text>
                                    <br />
                                    <Switch
                                        style={{
                                            width: "5rem",
                                        }}
                                        value={servoSwitch}
                                        onChange={switchServo}

                                    />
                                    <Flex
                                        style={{
                                            marginTop: "7rem",
                                            marginBottom: "7rem"
                                        }}
                                        wrap="wrap"
                                        gap={"small"}
                                    >
                                        <DualLineChart data={servo.slice(Math.max(servo.length - 20, 0))} />
                                    </Flex>
                                </Flex>
                            </div>
                        </Flex>

                        <Flex
                            style={{
                                height: "50%",
                                paddingBottom: 24,
                            }}
                        >
                            <Flex vertical={true}
                                style={{
                                    paddingRight: "5rem"
                                }}
                            >
                                <Text style={{
                                    fontSize: "2rem"
                                }}> Led Control Switch </Text>
                                <Text style={{
                                    fontSize: "1rem"
                                }}> Turn On/Off your LED. </Text>
                                <br />
                                <Switch style={{
                                    width: "5rem",
                                }}
                                    value={ledSwitch}
                                    onChange={switchLed}
                                />
                                <Flex
                                    style={{
                                        marginTop: "7rem",
                                        marginBottom: "7rem"

                                    }}
                                    wrap="wrap"
                                    gap={"small"}
                                >
                                    {/* <LineChart data={led} /> */}
                                    <DualLineChart data={led.slice(Math.max(led.length - 20, 0))} />
                                </Flex>
                                
                            </Flex>
                        </Flex>
                    </Flex>
                </div>
            </Content>
        </Layout>
    )
};

export default ControlPanel;