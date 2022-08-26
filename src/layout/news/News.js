import React from "react";
import Icon from "../../components/icon/Icon";

const News = () => {
  return (
    <div className="nk-news-list">
      <a className="nk-news-item" href="#news" onClick={(ev) => ev.preventDefault()}>
        <div className="nk-news-icon">
          <Icon name="card-view" />
        </div>
        <p>
            IMD Consus Weather Prediction
        </p>
      </a>
    </div>
  );
};

export default News;
