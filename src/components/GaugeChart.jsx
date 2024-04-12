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
                width: "20rem",
                padding: 24,
            }}
        >
            <Statistic title="Current: " value={data[0] ? data[0].value : "Loading..."} precision={2} />
            <Gauge {...config} />
        </Flex>
    );
};

export default GaugeChart;