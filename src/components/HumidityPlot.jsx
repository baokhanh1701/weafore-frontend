import { Liquid } from '@ant-design/plots';
import { Statistic, Flex } from 'antd';
const HumidityPlot = ({ data }) => {
  const humidity_data = data[0] ? data[0].value : 0;
  const config = {
    percent: humidity_data / 100,
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
      <Statistic title="Current: " value={data[0] ? data[0].value : "Loading..."} precision={2} />
      <Liquid
        {...config} />
    </Flex>
  )
};

export default HumidityPlot;