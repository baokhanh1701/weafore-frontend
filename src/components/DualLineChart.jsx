import { DualAxes } from '@ant-design/plots';
import {  Flex } from 'antd';

const DualLineChart = ({ data }) => {
    const config = {
        data,
        xField: 'date',
        legend: true,
        children: [
            {
                type: 'line',
                yField: 'value',
                shapeField: 'vh',
                style: {
                    stroke: '#29cae4',
                    lineWidth: 4,
                },
            }
        ],
    };
    return (
        <Flex
            style={{
                width: "100%",
            }}
        >
            <DualAxes {...config} />

        </Flex>
    );
};

export default DualLineChart;

