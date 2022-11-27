import { Title, List, ListItem } from "@tremor/react";

const Stocks = () => {

  const companies = [
    {
      company: "Apple",
      value: "$150",
    },
    {
      company: "Google",
      value: "$300",
    },
    {
      company: "Amazon",
      value: "$350",
    },
    {
      company: "Cisco",
      value: "$128",
    },
  ];

  return (
    <div className="stocks-box">
      <div className="stocks-box-header">
        <h2>Stocks</h2>
      </div>
      <div className="stocks-box-body">
        <Title>Stocks</Title>
        <List>
      {companies.map((item) => (
        <ListItem>
          <span>{item.company}</span>
          <span>{item.value}</span>
        </ListItem>
      ))}
    </List>
      </div>
    </div>
  )
}

export default Stocks;