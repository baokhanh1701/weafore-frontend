import { Layout, theme, Typography, Calendar, Alert, Modal } from 'antd';
import { useEffect, useState } from 'react';
import getCurrentWeatherApi from '../services/weatherapi/getCurrentWeatherApi';
import WeatherCards from '../components/WeatherCards';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const { Content } = Layout;
const { Text } = Typography;

dayjs.extend(relativeTime)

const Schedule = () => {
    const [currentWeather, setCurrentWeather] = useState({})
    const [date, setDate] = useState(() => dayjs('2017-01-25'));
    const [selectedDate, setSelectedDate] = useState(() => dayjs('2017-01-25'))
    const [history, setHistory] = useState({})
    const [forecast, setForecast] = useState({})
    const [weatherModalOpen, setWeatherModalOpen] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const fetchCurrentWeatherData = async () => {
        const result = await getCurrentWeatherApi();
        setCurrentWeather(result);
        return result;
    }

    const openWeatherModal = async (newDate) => {
        const now = dayjs()
        console.log(now)
        // console.log(now.to(newDate))
        const nowCondition = now.to(newDate)
        // console.log(nowCondition[3])
        if (
            nowCondition == 'a day ago'
            ||
            parseInt(nowCondition[0]) <= 5
        ) {
            // console.log("condition 1")
            setWeatherModalOpen(true)
            setDate(newDate);
            setSelectedDate(newDate);
        } else if (
            nowCondition == 'in a day'
            ||
            parseInt(nowCondition[3]) <= 5
        ) {

            // console.log("condition 2")
            setWeatherModalOpen(true)
            setDate(newDate);
            setSelectedDate(newDate);
        } else {
            console.log("Out of bound")
        }
    }

    useEffect(() => {
        fetchCurrentWeatherData()
    }, [])

    return (
        <Layout style={{
            height: "100%"
        }}>

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
                            color: "white",
                            paddingLeft: "2rem"

                        }}>
                        Schedule
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
                        <Text
                            style={{
                                fontSize: "2.5em",
                            }}
                            strong
                        >
                            Today's Weather
                        </Text>
                        <br />
                        <Text
                            style={{
                                fontSize: "1.75em",
                            }}
                            italic
                        >
                            Ho Chi Minh City, Vietnam
                        </Text>
                        <WeatherCards currentWeather={currentWeather ? currentWeather : "Loading"} />
                        <Alert
                            type={""}
                            message={`You selected date: ${selectedDate?.format('YYYY-MM-DD')}`}
                        />
                        <Modal
                            title="Weather Report"
                            centered
                            open={weatherModalOpen}
                            onOk={() => setWeatherModalOpen(false)}
                            onCancel={() => setWeatherModalOpen(false)}
                        >
                            <p>some contents...</p>
                            <p>some contents...</p>
                            <p>some contents...</p>
                        </Modal>
                        <Calendar
                            onSelect={openWeatherModal}
                            onPanelChange={onPanelChange}
                        />
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
};

export default Schedule;