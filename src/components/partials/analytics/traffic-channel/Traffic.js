import React, { useEffect, useState } from "react";
import {
  trafficChannelData,
  trafficChannelDataSet2,
  trafficChannelDataSet3,
  trafficChannelDataSet4,
} from "../../charts/analytics/AnalyticsData";
import { DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from "reactstrap";
import { Icon, DataTableHead, DataTableRow, DataTableItem } from "../../../Component";
import { WPCharts } from "../../charts/analytics/AnalyticsCharts";

const TrafficChannel = () => {
  const [dd, setdd] = useState("30");
  const [trafficData, setTrafficData] = useState(trafficChannelData);

  useEffect(() => {
    if (dd === "30") {
      setTrafficData(trafficChannelDataSet3);
    } else if (dd === "15") {
      setTrafficData(trafficChannelDataSet4);
    } else {
      setTrafficData(trafficChannelDataSet2);
    }
  }, [dd]);

  return (
    <React.Fragment>
      <div className="card-inner mb-n2">
        <div className="card-title-group">
          <div className="card-title card-title-sm">
            <h6 className="title">Traffic Channel</h6>
            <p>Top traffic channels metrics.</p>
          </div>
        </div>
      </div>
      <div className="nk-tb-list is-loose traffic-channel-table">
        <DataTableHead>
          <DataTableRow className="nk-tb-channel">
            <span>Channel</span>
          </DataTableRow>
          <DataTableRow className="nk-tb-sessions">
            <span>Sessions</span>
          </DataTableRow>
          <DataTableRow className="nk-tb-prev-sessions">
            <span>Prev Sessions</span>
          </DataTableRow>
          <DataTableRow className="nk-tb-change">
            <span>Change</span>
          </DataTableRow>
          <DataTableRow className="nk-tb-trend tb-col-sm text-right">
            <span>Trend</span>
          </DataTableRow>
        </DataTableHead>
        {trafficData.map((item) => {
          return (
            <DataTableItem className="nk-tb-item" key={item.id}>
              <DataTableRow className="nk-tb-channel">
                <span className="tb-lead">{item.channel}</span>
              </DataTableRow>
              <DataTableRow className="nk-tb-sessions">
                <span className="tb-sub tb-amount">
                  <span>{item.sessions}</span>
                </span>
              </DataTableRow>
              <DataTableRow className="nk-tb-prev-sessions">
                <span className="tb-sub tb-amount">
                  <span>{item.prev}</span>
                </span>
              </DataTableRow>
              <DataTableRow className="nk-tb-change">
                <span className="tb-sub">
                  <span>{item.change}%</span>{" "}
                  <span className={`change ${item.changeDifference}`}>
                    <Icon name={`arrow-long-${item.changeDifference}`}></Icon>
                  </span>
                </span>
              </DataTableRow>
              <DataTableRow className="nk-tb-trend text-right">
                <div className="traffic-channel-ck ml-auto">
                  <WPCharts data={item.chart}></WPCharts>
                </div>
              </DataTableRow>
            </DataTableItem>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default TrafficChannel;
