import { Layout, theme, Typography, Switch, Flex, Card } from 'antd';

const { Content } = Layout;
const { Text } = Typography;


const ControlPanel = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <div
                style={{
                    width: "100vw",
                    height: "10vh",
                    backgroundImage: "linear-gradient(to right, #1677ff  0%, #0000 100%)"
                }}
            >
                <Text
                    style={{
                        fontSize: "3.5em",
                        paddingLeft: "2rem",
                        color: "#003a8c"
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
                        vertical={true}
                        style={{
                            marginBottom: "5rem",
                        }}
                        wrap="wrap"
                        gap={"small"}
                    >
                        <Flex
                            style={{
                                width: "50%",
                                height: "50%",
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
                                    <Switch />

                                </Flex>
                            </div>

                            <div>
                                <Card title="Default size card" extra={<a href="#">More</a>}>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                            </div>
                        </Flex>
                        <Flex
                            style={{
                                width: "50%",
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
                                <Switch />
                            </Flex>
                            <div>
                                <Card title="Default size card" extra={<a href="#">More</a>}>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                            </div>

                        </Flex>
                    </Flex>
                </div>
            </Content>
        </Layout>
    )
};

export default ControlPanel;