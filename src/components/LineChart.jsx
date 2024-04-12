import { Line } from '@ant-design/plots';
import { Statistic, Flex } from 'antd';


const LineChart = ({ data }) => {

    const config = {
        data,
        xField: 'date',
        yField: 'value',
        point: {
            shapeField: 'square',
            sizeField: 4,
        },
        interaction: {
            tooltip: {
                marker: false,
            },
        },
        style: {
            lineWidth: 2,
        },
    };

    return (
        <Flex
            vertical={true}
            style={{
                width: "65vw",
            }}
        >
            <Line   {...config} />;
        </Flex>
    )


};

export default LineChart;