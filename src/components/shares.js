import { DonutChart } from "@tremor/react";

const Shares = () => {
  const data = [
    { label: "Facebook", value: 20 },
    { label: "Google", value: 10 },
    { label: "Apple", value: 30 },
    { label: "Amazon", value: 40 },
  ];

  return (
    <div className="shares-box">
      <div className="shares-box-header">
        <h2>Shares</h2>
      </div>
      <div className="shares-box-body">
        <DonutChart
          data={data}
          category="value"
          dataKey="label"
          valueFormatter={undefined}
          label={undefined}
          showLabel={true}
          showAnimation={true}
          marginTop="mt-6"
          colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
        />
      </div>
    </div>
  );
};

export default Shares;
