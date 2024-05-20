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
      backgroundFill: "#5BBCFF",
      shape: 'pin',
    },
  };
  return (
    <Flex
      vertical={true}
      style={{
        width: "15rem",
        height: "25rem",
        border: "1px solid #030852",
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
          title="Current (%): " value={data[0] ? data[0].value : "Loading..."} precision={2} />
        <Liquid
          {...config} />
    </Flex>
  )
};

export default HumidityPlot;