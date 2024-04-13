import { Line } from '@ant-design/plots';
import { Statistic, Flex } from 'antd';


const LineChart = ({ data }) => {

    const config = {
        data,
        xField: 'date',
        yField: 'value',
        point: {
            shapeField: 'circle',
            sizeField: 2,
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
                width: "75%",
            }}
        >
            <Line   {...config} />;
        </Flex>
    )


};

export default LineChart;