import { Flex, Text, ProgressBar } from "@tremor/react";

const MainBox = () => {
  return (
    <div className="main-box">
      <div className="main-box-header">
        <h2>Global stats</h2>
      </div>
      <div className="container-sales">
        <Text>Sales</Text>
        <h1>$20 000</h1>
        <div>
          <Flex>
            <Text>$ 9,012 &bull; 45%</Text>
            <Text>$ 20,000</Text>
          </Flex>
          <ProgressBar
            percentageValue={45}
            label="Goal"
            tooltip=""
            showAnimation={true}
            color="blue"
            marginTop="mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBox;
