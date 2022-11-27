import { AreaChart, Title } from "@tremor/react";

const LeadBox = () => {
  const chartdata = [
    {
      date: "Jan 22",
      SemiAnalysis: 2890,
      "The Pragmatic Engineer": 2338,
    },
    {
      date: "Feb 22",
      SemiAnalysis: 2756,
      "The Pragmatic Engineer": 2103,
    },
    {
      date: "Mar 22",
      SemiAnalysis: 3322,
      "The Pragmatic Engineer": 2194,
    },
    {
      date: "Apr 22",
      SemiAnalysis: 3470,
      "The Pragmatic Engineer": 2108,
    },
    {
      date: "May 22",
      SemiAnalysis: 3475,
      "The Pragmatic Engineer": 1812,
    },
    {
      date: "Jun 22",
      SemiAnalysis: 3129,
      "The Pragmatic Engineer": 1726,
    },
  ];

  const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <div className="lead-box">
      <div className="lead-box-header">
        <h2>Lead Box</h2>
      </div>
      <div className="lead-box-body">
        <Title>Newsletter revenue over time (USD)</Title>
        <AreaChart
          data={chartdata}
          categories={["SemiAnalysis", "The Pragmatic Engineer"]}
          dataKey="date"
          height="h-40"
          colors={["indigo", "cyan"]}
          valueFormatter={dataFormatter}
          marginTop="mt-4"
        />
      </div>
    </div>
  );
};

export default LeadBox;
