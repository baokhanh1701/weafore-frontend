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
        colorField: 'category'
    };

    return (
        <Flex
            vertical={true}
            style={{
                width: "50vw",
                border: "1px solid #030852",
                marginLeft: "1.5rem",
                // marginRight: "1.5rem",
                marginBottom: "1.5rem",
                borderRadius: "10px"
            }}
        >
            <Line   {...config} />;
        </Flex>
    )


};

export default LineChart;