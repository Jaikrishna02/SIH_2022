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
        <div>
        <iframe
        width="100%"
        height="700"
        src="https://ap-south-1.quicksight.aws.amazon.com/sn/embed/share/accounts/757776451407/dashboards/a647f449-e6c2-4fcc-b7cb-ad6f2e968665?directory_alias=airport-visibility-prediction">
    </iframe>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default AnalyticsHomePage;
