import React from "react";
import "./MyWork.css";
import themePattern from "../../assets/theme_pattern.svg";
import myWorkData from "../../data/mywork_data";
import arrowIcon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="portfolio" className="mywork container">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={themePattern} alt="" />
      </div>

      <div className="mywork-container">
        {myWorkData.map((work, index) => (
          <a key={index} href={work.git_repo_url} target="blank">
            <img src={work.w_img} alt="work image" />
          </a>
        ))}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
