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
                    width: "100vw",
                    height: "10vh",
                    backgroundColor: "#1677ff"
                }}
            >
                <Text
                    style={{
                        fontSize: "3.5em",
                        paddingLeft: "1.5rem",
                        color: "white"
                    }}>
                    Control Panel
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
                    <Flex
                        style={{
                            marginBottom: "5rem",
                        }}
                        wrap="wrap"
                        gap={"small"}
                    >
                        <Flex
                            vertical={true}
                            style={{
                                paddingBottom: 24,
                                border: "2px solid #030852",
                                padding: "3rem",
                                margin: "0.75rem",
                                borderRadius: "10px",
                            }}
                        >

                            <Text style={{
                                fontSize: "2rem",
                                fontWeight: "bold",
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
                            <div
                                style={{
                                    marginTop: "1.5rem",
                                    marginBottom: "1.5rem",
                                    border: "1px solid #030852",
                                    borderRadius: "10px",
                                    backgroundColor: "#d6e4ff"

                                }}
                            >
                                <DualLineChart data={servo.slice(Math.max(servo.length - 20, 0))} />
                            </div>
                        </Flex>
                        <Flex vertical={true}
                            style={{
                                paddingRight: "1.5rem",
                                border: "2px solid #030852",
                                padding: "3rem",
                                margin: "0.75rem",
                                borderRadius: "10px",
                            }}
                        >
                            <Text style={{
                                fontSize: "2rem",
                                fontWeight: "bold",
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
                            <div
                                style={{
                                    marginTop: "1.5rem",
                                    marginBottom: "1.5rem",
                                    border: "1px solid #030852",
                                    borderRadius: "10px",
                                    backgroundColor: "#d6e4ff"

                                }}
                            >
                                {/* <LineChart data={led} /> */}
                                <DualLineChart data={led.slice(Math.max(led.length - 20, 0))} />
                            </div>

                        </Flex>
                    </Flex>
                </div>
            </Content>
        </Layout>
    )
};

export default ControlPanel;