import { Layout, theme, Typography, Flex, Button } from 'antd';
import HumidityPlot from '../components/HumidityPlot';
import TemperatureLine from '../components/TemperatureLine';
import getAllFeeds from '../adafruitio/getAllFeeds';
import getTemperatureFeedData from '../adafruitio/getTemperatureFeedData';
import getLedFeedData from '../adafruitio/getLedFeedData';
import getHumidityFeedData from '../adafruitio/getHumidityFeedData';
import getLightFeedData from '../adafruitio/getLightFeedData';
const { Content } = Layout;
const { Text } = Typography;



const Home = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Layout>
                <div
                    style={{
                        width: "100vw",
                        height: "10vh",
                        backgroundImage: "linear-gradient(to right, #1677ff  0%, #0000 100%)"
                        // backgroundImage: "url()"
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
                        <Flex
                            style={{
                                marginBottom: "5rem",
                            }}
                            wrap="wrap"
                            gap={"small"}
                        >
                            <HumidityPlot />
                            <TemperatureLine />

                        </Flex>
                        <Button onClick={getTemperatureFeedData}> Temp</Button>
                        <Button onClick={getLightFeedData}> Light</Button>
                        <Button onClick={getHumidityFeedData}> Humid</Button>
                        <Button onClick={getLedFeedData}> Led</Button>

                    </div>
                </Content>
            </Layout>
        </Layout>
    )
};
export default Home;