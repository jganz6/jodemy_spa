import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../css/FacilitatorPops.css";

function FacilitatorMember() {
  const [modal, setModal] = useState(false);
  function openPops() {
    setModal(true);
  }
  function closePops() {
    setModal(false);
  }
  return (
    <>
      <header>
        <Link to="/Main/Activity/f1">
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
            </div>
          </div>
        </div>
        <div className="class-detail-body">
          <div className="detail-body-head">
            <div className="detail-void2"></div>
            <div className="line-percent">80% to complete</div>
          </div>
          <div className="section-class-detail">
            <Link to="/Main/Activity/f2" className="section-option">
              Information
            </Link>
            <Link to="/Main/Activity/f2" className="section-option">
              Class Progress
            </Link>
            <Link to="/" className="section-option">
              Class Discussion
            </Link>
            <Link
              to="/Main/Activity/f3"
              className="section-option option-selected"
            >
              Member
            </Link>
          </div>
          <div
            className={
              modal === true ? "pops-background" : "props-background modalHide"
            }
          >
            <div className="popsScoringMember">
              <div className="header-popsScoringMember">
                <img
                  src="https://jodemy.netlify.app/assets/photo_profile/photo14.png"
                  alt="photo14"
                />
                Deddy Corbuzier
                <button className="closePops" onClick={closePops}>
                  X
                </button>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>HTML Essential Training</td>
                    <td className="scoreColor" style={{ color: "#2BE7D0" }}>
                      100
                    </td>
                  </tr>
                  <tr>
                    <td>CSS Essential Training</td>
                    <td className="scoreColor" style={{ color: "#E7852B" }}>
                      42
                    </td>
                  </tr>
                  <tr>
                    <td>Javascript Essential Training</td>
                    <td className="scoreColor" style={{ color: "#E6422B" }}>
                      21
                    </td>
                  </tr>
                  <tr>
                    <td>Responsive Layout</td>
                    <td className="scoreColor" style={{ color: "#2BE7D0" }}>
                      98
                    </td>
                  </tr>
                  <tr>
                    <td>Mid-term Exam</td>
                    <td className="scoreColor" style={{ color: "#51E72B" }}>
                      86
                    </td>
                  </tr>
                  <tr>
                    <td>Learning React.js</td>
                    <td>
                      <div className="unfinished">Unfinished</div>
                    </td>
                  </tr>
                  <tr>
                    <td>UX for Web Design</td>
                    <td>
                      <div className="unfinished">Unfinished</div>
                    </td>
                  </tr>
                  <tr>
                    <td>Final-term Exam</td>
                    <td>
                      <div className="unfinished">Unfinished</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <table>
            <tbody>
              <tr onClick={openPops}>
                <td>
                  <img
                    src="https://jodemy.netlify.app/assets/photo_profile/photo14.png"
                    alt="photo14"
                  />
                </td>
                <td>Deddy Cobuzier</td>
                <td>&#x22EE;</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://jodemy.netlify.app/assets/photo_profile/photo2.png"
                    alt="photo2"
                  />
                </td>
                <td>Eden Hazard</td>
                <td>&#x22EE;</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://jodemy.netlify.app/assets/photo_profile/photo15.png"
                    alt="photo15"
                  />
                </td>
                <td>Isyana Sarasvati</td>
                <td>&#x22EE;</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://jodemy.netlify.app/assets/photo_profile/photo1.png"
                    alt="photo1"
                  />
                </td>
                <td>Nissa Sabyan</td>
                <td>&#x22EE;</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://jodemy.netlify.app/assets/photo_profile/photo3.png"
                    alt="photo3"
                  />
                </td>
                <td>Peppy</td>
                <td>&#x22EE;</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://jodemy.netlify.app/assets/photo_profile/photo16.png"
                    alt="photo16"
                  />
                </td>
                <td>Prilly Latuconsina</td>
                <td>&#x22EE;</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://jodemy.netlify.app/assets/photo_profile/photo10.png"
                    alt="photo10"
                  />
                </td>
                <td>Prof. Winarto</td>
                <td>&#x22EE;</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://jodemy.netlify.app/assets/photo_profile/photo8.png"
                    alt="photo8"
                  />
                </td>
                <td>Rio Dewanto</td>
                <td>&#x22EE;</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://jodemy.netlify.app/assets/photo_profile/photo9.png"
                    alt="photo9"
                  />
                </td>
                <td>Tompi</td>
                <td>&#x22EE;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default FacilitatorMember;
