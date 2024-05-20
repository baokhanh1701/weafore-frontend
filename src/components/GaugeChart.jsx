import { Gauge } from '@ant-design/plots';
import { Statistic, Flex } from 'antd';

const GaugeChart = ({ data }) => {
    const config = {
        autoFit: true,
        data: {
            target: data[0]? data[0].value : 0,
            total: 50,
            name: 'score',
            thresholds: [20, 40, 50],
        },
        legend: false,
        scale: {
            color: {
                range: ['green', '#FAAD14', '#F4664A'],
            },
        },
        style: {
            textContent: (target, total) => `Temp: ${target} °C \n`,
        },
    };
    return (
        <Flex
            vertical={true}
            style={{
                width: "15rem",
                height: "25rem",
                border: "1px solid #614700",
                borderRadius: "10px",
            }}
        >
            <Statistic
            style={{
                fontSize: "2rem",
                fontWeight: "bold",
                paddingBottom: "1rem",
                paddingTop: "1rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
            }}
            title="Current (Celcius): " value={data[0] ? data[0].value : "Loading..."} precision={2} />
            <Gauge {...config} />
        </Flex>
    );
};

export default GaugeChart;