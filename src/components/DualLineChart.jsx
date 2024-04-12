import { DualAxes } from '@ant-design/plots';
import { Statistic, Flex } from 'antd';

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
                    lineWidth: 2,
                },
            }
            // {
            //     type: 'line',
            //     yField: 'count',
            //     shapeField: 'smooth',
            //     style: {
            //         stroke: '#5AD8A6',
            //         lineWidth: 2,
            //     },
            //     axis: {
            //         y: {
            //             position: 'right',
            //             title: 'count',
            //             style: { titleFill: '#5AD8A6' },
            //         },
            //     },
            // },
        ],
    };
    return (
        <Flex
            style={{
                width: "65vw",
            }}
        >
            <DualAxes {...config} />

        </Flex>
    );
};

export default DualLineChart;

