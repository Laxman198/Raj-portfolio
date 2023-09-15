import React from "react";
import "./workcard.css";
function AccCard ({ item }) {
  return (
    <div className='work-card'>
      <img src={item.companyLogo}className="work-logo" />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
        <a href={item.learnMoreLink} target="_blank" rel="noopener noreferrer">
          <button className="learn-more-button">View</button>
        </a>
      </div>
    </div>
  );
}

export default AccCard;