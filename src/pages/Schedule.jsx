import { Layout, theme, Typography, Calendar } from 'antd';

const { Content } = Layout;
const { Text } = Typography;

const Schedule = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
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
                        <Calendar onPanelChange={onPanelChange} />
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
};

export default Schedule;