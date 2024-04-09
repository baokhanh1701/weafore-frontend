import { Liquid } from '@ant-design/plots';
import { Statistic, Flex } from 'antd';
const HumidityPlot = () => {
  const config = {
    percent: 0.7,
    style: {
      outlineBorder: 4,
      outlineDistance: 8,
      waveLength: 128,
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
      <Statistic title="Current Humidity (%)" value={70.23} precision={2} />
      <Liquid
        {...config} />
    </Flex>
  )
};

export default HumidityPlot;