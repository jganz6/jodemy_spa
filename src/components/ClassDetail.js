import { React, useState } from "react";
import "./../css/class-detail.css";
import { Link, useLocation } from "react-router-dom";
import { registerCLASS } from "./../redux/actions/registerClass";
import { getSubClass } from "./../redux/actions/subClass";
import { connect } from "react-redux";
import ClassProgress from "./classProgress";

function ClassDetail(props) {
  const [subContent, setSubContent] = useState(0);
  const qs = new URLSearchParams(useLocation().search).get("id");
  const myClass = props.myClass[0].find((data) => data.id_class === Number(qs));
  console.log(myClass);
  const contentHandler = (number) => {
    setSubContent(number);
  };
  return (
    <>
      <header>
        <Link to="/Main/Activity/Class">
          <img
            src="https://jodemy.netlify.app/assets/back-icon.png"
            alt="back-icon.png"
          />
        </Link>
        <h3>{myClass.class_name}</h3>
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
              <div className="title-class">{myClass.class_name}</div>
              <div className="head-text-detail">Level : {myClass.level}</div>
              <div className="head-text-detail">
                Category : {myClass.category}
              </div>
              <div className="head-text-detail">
                Price : {myClass.pricing === 0 ? "Free" : myClass.pricing}
              </div>
              <div
                className="score-display"
                style={{
                  color: `hsl(${(
                    (myClass.score === null ? 0 : myClass.score / 100) * 180
                  ).toFixed(0)},100%,50%)`,
                }}
              >
                <div className="label-score">Your Score</div>
                {myClass.score === null ? "0" : myClass.score}
              </div>
              {/* <div className="new-class-register">Register</div> */}
            </div>
          </div>
        </div>
        <div className="class-detail-body">
          <div className="detail-body-head">
            <div className="detail-void"></div>
          </div>
          <div className="section-class-detail">
            <span
              onClick={() => contentHandler(0)}
              className={
                subContent === 0
                  ? "section-option option-selected"
                  : "section-option"
              }
            >
              Information
            </span>
            <span
              onClick={() => contentHandler(1)}
              className={
                subContent === 1
                  ? "section-option option-selected"
                  : "section-option"
              }
            >
              Class Progress
            </span>
            <a href="/" className="section-option">
              Class Discussion
            </a>
          </div>
          {subContent === 0 ? (
            <>
              <h6>Description</h6>
              <div className="class-descption-text">{myClass.description}</div>
              <h6>What will I learn?</h6>
              <div className="class-descption-text">
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, molestiae ut! Excepturi itaque doloribus repellendus
                    sint dicta modi sequi perferendis reprehenderit ea earum
                    maxime odio, asperiores eligendi eaque corporis ab!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, molestiae ut! Excepturi itaque doloribus repellendus
                    sint dicta modi sequi perferendis reprehenderit ea earum
                    maxime odio, asperiores eligendi eaque corporis ab!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, molestiae ut! Excepturi itaque doloribus repellendus
                    sint dicta modi sequi perferendis reprehenderit ea earum
                    maxime odio, asperiores eligendi eaque corporis ab!
                  </li>
                </ul>
              </div>
              <h6>Content 2</h6>
              <div className="class-descption-text">
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, molestiae ut! Excepturi itaque doloribus repellendus
                    sint dicta modi sequi perferendis reprehenderit ea earum
                    maxime odio, asperiores eligendi eaque corporis ab!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, molestiae ut! Excepturi itaque doloribus repellendus
                    sint dicta modi sequi perferendis reprehenderit ea earum
                    maxime odio, asperiores eligendi eaque corporis ab!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, molestiae ut! Excepturi itaque doloribus repellendus
                    sint dicta modi sequi perferendis reprehenderit ea earum
                    maxime odio, asperiores eligendi eaque corporis ab!
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <ClassProgress subClass={props.subClass} />
          )}
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  myClass: state.myClassReducer.results,
  newClass: state.newClass.results,
  token: state.auth.results.token,
  registerCLASS: state.registerCLASS,
  subClass: state.subClass.results,
});
const mapDispatchToProps = (dispatch) => ({
  registerClass: (url, token) => dispatch(registerCLASS(url, token)),
  getSubClass: (url, token) => dispatch(getSubClass(url, token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ClassDetail);
