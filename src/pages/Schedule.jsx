import { Layout, theme, Typography, Calendar, Alert, Modal } from 'antd';
import { useEffect, useState } from 'react';
import getCurrentWeatherApi from '../services/weatherapi/getCurrentWeatherApi';
import WeatherCards from '../components/WeatherCards';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import getWeatherHistory from '../services/weatherapi/getWeatherHistory';
import jsonata from 'jsonata';
import LineChart from '../components/LineChart';
const { Content } = Layout;
const { Text } = Typography;

dayjs.extend(relativeTime)

const Schedule = () => {
    const [currentWeather, setCurrentWeather] = useState({})
    const [date, setDate] = useState(() => dayjs('2017-01-25'));
    const [selectedDate, setSelectedDate] = useState(() => dayjs('2017-01-25'))
    const [weatherHistory, setWeatherHistory] = useState({})
    const [forecast, setForecast] = useState({})
    const [temperatureLine, setTemperatureLine] = useState({})
    const [humidityLine, setHumidityLine] = useState({})

    const [weatherModalOpen, setWeatherModalOpen] = useState(false);
    const [alertStatus, setAlertStatus] = useState('info')

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
    const temperature_line_jsonata = jsonata("$.forecast.forecastday.hour.{    'date': $substringAfter($.time, ' '),    'value': $.temp_c}")
    const humidity_line_jsonata = jsonata("$.forecast.forecastday.hour.{    'date': $substringAfter($.time, ' '),    'value': $.humidity}")

    const openWeatherModal = async (newDate) => {
        const now = dayjs()
        const nowCondition = now.to(newDate)
        const historyCondition = (
            nowCondition[0] == 'a'
            ||
            parseInt(nowCondition.substring(0, nowCondition.indexOf(' ', 0))) <= 5
        )
        const futureCondition = (
            nowCondition == 'in a day'
            ||
            parseInt(nowCondition.substring(3, nowCondition.indexOf(' ', 3))) <= 5
        )

        // console.log(now)
        // console.log(now.to(newDate))
        console.log(nowCondition)
        if (historyCondition) {
            // console.log("condition 1")
            const weatherHistoryAtDate = await getWeatherHistory(newDate)
            const _temperatureLine = await temperature_line_jsonata.evaluate(weatherHistoryAtDate)
            const _humidityLine = await humidity_line_jsonata.evaluate(weatherHistoryAtDate)
            setDate(newDate);
            setSelectedDate(newDate);
            setAlertStatus('success')
            setWeatherModalOpen(true)
            // console.log(_temperatureLine)
            setWeatherHistory(weatherHistoryAtDate)
            setTemperatureLine(_temperatureLine)
            setHumidityLine(_humidityLine)
        } else if (futureCondition) {
            // console.log("condition 2")
            setAlertStatus('success')
            setWeatherModalOpen(true)
            setDate(newDate);
            setSelectedDate(newDate);
        } else {
            setAlertStatus('error')
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
                            showIcon
                            // message={
                            //     (alertStatus == 'success')
                            //     ?
                            //     "Success"
                            //     :
                            //     "Limited"
                            // }
                            type={alertStatus}
                            message={
                                (alertStatus == 'success')
                                    ?
                                    `You selected date: ${selectedDate?.format('YYYY-MM-DD')}`
                                    :
                                    "Our services are only able to track weather history of forecast up to 6 days."
                            }
                        />
                        <Modal
                            title="Weather Report"
                            centered
                            open={weatherModalOpen}
                            onOk={() => setWeatherModalOpen(false)}
                            onCancel={() => setWeatherModalOpen(false)}
                            width={1000}

                        >
                            <Text
                                style={{
                                    fontSize: "1rem",
                                }}
                                strong
                            >
                                Overall
                            </Text>
                            <p>Average Humidity: {weatherHistory?.forecast?.forecastday[0]?.day?.avghumidity} (%)</p>
                            <p>Average Temperature: {weatherHistory?.forecast?.forecastday[0]?.day?.avgtemp_c} (°C)</p>
                            <p>Mininum Temperature: {weatherHistory?.forecast?.forecastday[0]?.day?.mintemp_c} (°C)</p>
                            <p>Maximum Temperature: {weatherHistory?.forecast?.forecastday[0]?.day?.maxtemp_c} (°C)</p>
                            <p>Total Precipitation: {weatherHistory?.forecast?.forecastday[0]?.day?.totalprecip_mm} (mm) </p>
                            <p>Chance of rain: {weatherHistory?.forecast?.forecastday[0]?.day?.daily_will_it_rain} (%) </p>
                            <br />

                            <Text
                                style={{
                                    fontSize: "1rem",
                                }}
                                strong
                            >
                                Temperature (Per Hours)
                            </Text>
                            <br />
                            <LineChart data={temperatureLine} />

                            <br />

                            <Text
                                style={{
                                    fontSize: "1rem",
                                }}
                                strong
                            >
                                Humidity (Per Hours)
                            </Text>
                            <br />
                            <LineChart data={humidityLine} />
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