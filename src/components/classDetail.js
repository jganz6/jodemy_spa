import React from "react";
import "./../css/class-detail.css";
import { Link } from "react-router-dom";

function classDetail() {
  return (
    <>
      <header>
        <Link to="/Main/Activity/v1">
          <img
            src="https://jodemy.netlify.app/assets/back-icon.png"
            alt="back-icon.png"
          />
        </Link>
        <h3>Know More Javascript</h3>
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
              <div className="title-class">Know More Javascript</div>
              <div className="head-text-detail">Level : Beginner</div>
              <div className="head-text-detail">Category : Software</div>
              <div className="head-text-detail">Price : Free</div>
              <div className="new-class-register">Register</div>
            </div>
          </div>
        </div>
        <div className="class-detail-body">
          <div className="detail-body-head">
            <div className="detail-void"></div>
          </div>
          <div className="section-class-detail">
            <a href="/" className="section-option option-selected">
              Information
            </a>
            <Link to="/Main/Activity/v4" className="section-option">
              Class Progress
            </Link>
            <a href="/" className="section-option">
              Class Discussion
            </a>
          </div>
          <h6>Description</h6>
          <div className="class-descption-text">
            Javascript from the basic for beginner. JavaScript is a programming
            language that adds interactivity to your website. This happens in
            games, in the behavior of responses when buttons are pressed or with
            data entry on forms; with dynamic styling; with animation, etc. This
            class helps you get started with JavaScript and furthers your
            understanding of what is possible.
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

export default classDetail;
