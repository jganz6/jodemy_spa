import React from "react";
import "./../css/class-detail.css";
import { Link } from "react-router-dom";

function Facilitator_ClassDetail() {
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
            <Link
              to="/Main/Activity/f2"
              className="section-option option-selected"
            >
              Information
            </Link>
            <Link to="/Main/Activity/f2" className="section-option">
              Class Progress
            </Link>
            <a href="/" className="section-option">
              Class Discussion
            </a>
            <Link to="/Main/Activity/f3" className="section-option">
              Member
            </Link>
          </div>
          <h6>Description</h6>
          <div className="class-descption-text">
            Front end development manages everything that users visually see
            first in their browser or application. Front end developers are
            responsible for the look and feel of a site. Front end development
            is mostly focused on what some may coin the "client side" of
            development.
          </div>
          <h6>What will I learn?</h6>
          <div className="class-descption-text">
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                molestiae ut! Excepturi itaque doloribus repellendus sint dicta
                modi sequi perferendis reprehenderit ea earum maxime odio,
                asperiores eligendi eaque corporis ab!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                molestiae ut! Excepturi itaque doloribus repellendus sint dicta
                modi sequi perferendis reprehenderit ea earum maxime odio,
                asperiores eligendi eaque corporis ab!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                molestiae ut! Excepturi itaque doloribus repellendus sint dicta
                modi sequi perferendis reprehenderit ea earum maxime odio,
                asperiores eligendi eaque corporis ab!
              </li>
            </ul>
          </div>
          <h6>Content 2</h6>
          <div className="class-descption-text">
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                molestiae ut! Excepturi itaque doloribus repellendus sint dicta
                modi sequi perferendis reprehenderit ea earum maxime odio,
                asperiores eligendi eaque corporis ab!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                molestiae ut! Excepturi itaque doloribus repellendus sint dicta
                modi sequi perferendis reprehenderit ea earum maxime odio,
                asperiores eligendi eaque corporis ab!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                molestiae ut! Excepturi itaque doloribus repellendus sint dicta
                modi sequi perferendis reprehenderit ea earum maxime odio,
                asperiores eligendi eaque corporis ab!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Facilitator_ClassDetail;
