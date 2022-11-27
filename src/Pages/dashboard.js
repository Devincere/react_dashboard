import Navbar from "../components/navbar";
import Profile from "../components/profile";
import MainBox from "../components/main_box";
import LeadBox from "../components/lead_box";
import Stocks from "../components/stocks";
import Shares from "../components/shares";
import BoxExemple from "../components/exemple";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center m-5">Dashboard</h1>
      <div className="main-grid">
        <div className="template-row">
          <Profile />
          <MainBox />
        </div>
        <div className="template-row">
          <LeadBox />
          <Stocks />
        </div>
        <div className="template-row">
          <Shares />
          <BoxExemple />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
