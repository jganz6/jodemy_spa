import React from "react";
import "./../css/class-progress.css";
import { Link } from "react-router-dom";

function classProgress() {
  return (
    <>
      <header>
        <Link to="/Main/Activity/v1">
          <img
            src="https://jodemy.netlify.app/assets/back-icon.png"
            alt="back-icon.png"
          />
        </Link>
        <h3>Front-end Fundamentals</h3>
      </header>
      <div className="class-detail">
        <div className="class-detail-head">
          <div className="foreground">
            <div className="class-head-text">
              <div className="category-icon">
                <img
                  src="https://jodemy.netlify.app/assets/activity/Software Icon.png"
                  alt="Software Icon.png"
                />
              </div>
              <div className="title-class">Front-end Fundamentals</div>
              <div className="head-text-detail">Level : Beginner</div>
              <div className="head-text-detail">Category : Software</div>
              <div className="head-text-detail">Price : Free</div>
              <div className="score-display">
                <div className="label-score">Your Score</div>86
              </div>
            </div>
          </div>
        </div>
        <div className="class-detail-body">
          <div className="detail-body-head">
            <div className="detail-void2"></div>
            <div className="line-percent">80% to complete</div>
          </div>
          <div className="section-class-detail">
            <Link to="/Main/Activity/v3" className="section-option">
              Information
            </Link>
            <a href="/" className="section-option option-selected">
              Class Progress
            </a>
            <a href="/" className="section-option">
              Class Discussion
            </a>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>HTML Essential Training</td>
                <td>You have completed this topic</td>
                <td className="scoreColor" style={{ color: "#2BE7D0" }}>
                  100
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>CSS Essential Training</td>
                <td>You have completed this topic</td>
                <td className="scoreColor" style={{ color: "#E7852B" }}>
                  42
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>Javascript Essential Training</td>
                <td>You have completed this topic</td>
                <td className="scoreColor" style={{ color: "#E6422B" }}>
                  21
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>Responsive Layout</td>
                <td>You have completed this topic</td>
                <td className="scoreColor" style={{ color: "#2BE7D0" }}>
                  98
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>Mid-term Exam</td>
                <td>You have completed this topic</td>
                <td className="scoreColor" style={{ color: "#51E72B" }}>
                  86
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>Bootstrap4 Essential Training</td>
                <td>You have completed this topic</td>
                <td className="scoreColor" style={{ color: "#7EE72B" }}>
                  72
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>Sass Essential Training</td>
                <td>Friday, 6 November 2020 08.00 - 09.40</td>
                <td className="scoreColor" style={{ color: "#FFF" }}></td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>Learning React.js</td>
                <td>Friday, 13 November 2020 08.00 - 09.40</td>
                <td>
                  <div className="unfinished">Unfinished</div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>UX for Web Design</td>
                <td>Friday, 20 November 2020 08.00 - 09.40</td>
                <td>
                  <div className="unfinished">Unfinished</div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>Final-term Exam</td>
                <td>Friday, 27 November 2020 08.00 - 09.40</td>
                <td>
                  <div className="unfinished">Unfinished</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default classProgress;
