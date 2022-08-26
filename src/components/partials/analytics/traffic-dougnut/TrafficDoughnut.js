import React, { useState } from "react";
import { DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from "reactstrap";
import { TCDoughnut } from "../../charts/analytics/AnalyticsCharts";

const TrafficDougnut = () => {
  const [traffic, setTraffic] = useState("30");
  return (
    <React.Fragment>
      {" "}
      <div className="card-title-group">
        <div className="card-title card-title-sm">
          <h6 className="title">Traffic Channel</h6>
        </div>
      </div>
      <div className="traffic-channel">
        <div className="traffic-channel-doughnut-ck">
          <TCDoughnut state={traffic} className="analytics-doughnut"></TCDoughnut>
        </div>
        <div className="traffic-channel-group g-2">
          <div className="traffic-channel-data">
            <div className="title">
              <span className="dot dot-lg sq" style={{ background: "#798bff" }}></span>
              <span>Organic Search</span>
            </div>
            <div className="amount">
              {traffic === "7" ? "3,055" : traffic === "15" ? "4,505" : "4,705"} <small>58.63%</small>
            </div>
          </div>
          <div className="traffic-channel-data">
            <div className="title">
              <span className="dot dot-lg sq" style={{ background: "#b8acff" }}></span>
              <span>Social Media</span>
            </div>
            <div className="amount">
              {traffic === "7" ? "259" : traffic === "15" ? "1,059" : "1509"} <small>23.94%</small>
            </div>
          </div>
          <div className="traffic-channel-data">
            <div className="title">
              <span className="dot dot-lg sq" style={{ background: "#ffa9ce" }}></span>
              <span>Referrals</span>
            </div>
            <div className="amount">
              {traffic === "7" ? "438" : traffic === "15" ? "282" : "482"} <small>12.94%</small>
            </div>
          </div>
          <div className="traffic-channel-data">
            <div className="title">
              <span className="dot dot-lg sq" style={{ background: "#f9db7b" }}></span>
              <span>Others</span>
            </div>
            <div className="amount">
              {traffic === "7" ? "438" : traffic === "15" ? "800" : "1000"} <small>4.49%</small>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default TrafficDougnut;
