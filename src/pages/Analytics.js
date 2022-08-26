import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import AudienceOverview from "../components/partials/analytics/audience-overview/AudienceOverview";
import ActiveUser from "../components/partials/analytics/active-user/ActiveUser";
import WebsitePerformance from "../components/partials/analytics/website-perfomance/WebsitePerfomance";

import { getDateStructured } from "../utils/Utils";
import { selectDateFormat, selectLanguageOptions, selectTimezoneFormat } from "./app/file-manager/Data";

import TrafficChannel from "../components/partials/analytics/traffic-channel/Traffic";
import TrafficDougnut from "../components/partials/analytics/traffic-dougnut/TrafficDoughnut";
import UserMap from "../components/partials/analytics/user-map/UserMap";
import BrowserUser from "../components/partials/analytics/browser-users/BrowserUser";
import PageViewer from "../components/partials/analytics/page-view/PageView";
import SessionDevice from "../components/partials/analytics/session-devices/SessionDevice";
import { DropdownToggle, DropdownMenu, Card, UncontrolledDropdown, DropdownItem } from "reactstrap";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
  Row,
  Col,
  PreviewAltCard,
} from "../components/Component";

const DateUpdate = ({ formData, setFormData, setModal }) => {
  const submitForm = (formVal) => {
    let newForm = {
      date: formData.date,
      dateFormat: formData.dateFormat,
    };
    setFormData({ ...newForm });
    setModal(false);
  };
};
const AnalyticsHomePage = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="Analytics Dashboard" />
      <Content>
        <BlockHead size="sm">
          <div className="nk-block-between">
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Website Analytics
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome to Analytics Dashboard.</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v"></Icon>
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <form>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="dropdown-toggle btn btn-white btn-dim btn-outline-light">
                          <Icon className="d-none d-sm-inline" name="calender-date"></Icon>
                          <span>
                            <span className="d-none d-md-inline">Select</span> Airport
                          </span>
                          <Icon className="dd-indc" name="chevron-right"></Icon>
                        </DropdownToggle>
                        <DatePicker
                    selected={new Date()}
                    className="form-control"
                    onChange={(date) => DateUpdate.submitForm.setFormData({ ...formData, date: getDateStructured(date) })}
                    maxDate={new Date()}
                  />
                        <DropdownMenu>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                Delhi
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                Chennai
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                Mumbai
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                    <li className="nk-block-tools-opt">
                      <Button color="primary" type="submit">
                        <Icon name="reports"></Icon>
                        <span>Get Result</span>
                      </Button>
                    </li>
                  </ul>
                  </form>
                </div>
              </div>
            </BlockHeadContent>
          </div>
        </BlockHead>

        <Block>
          <Row className="g-gs">
            <Col lg="7" xxl="6">
              <PreviewAltCard className="h-100">
                <AudienceOverview />
              </PreviewAltCard>
            </Col>
            <Col md="6" lg="5" xxl="6">
              <PreviewAltCard className="h-100">
                <ActiveUser />
              </PreviewAltCard>
            </Col>
            <Col lg="7" xxl="6">
              <Card className="card-bordered h-100">
                <TrafficChannel />
              </Card>
            </Col>
            <Col md="6" xxl="6">
              <PreviewAltCard className="h-100">
                <TrafficDougnut />
              </PreviewAltCard>
            </Col>

          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default AnalyticsHomePage;
