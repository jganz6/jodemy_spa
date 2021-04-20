import { React, useState } from "react";
import "./../css/class-detail.css";
import "./../css/class-progress.css";
import "./../css/FacilitatorPops.css";
import { Link, useLocation } from "react-router-dom";
import { registerCLASS } from "./../redux/actions/registerClass";
import { getSubClass } from "./../redux/actions/subClass";
import { connect } from "react-redux";
import ClassProgress from "./ClassProgress";
import { getMembers, getMemberSubjects } from "../redux/actions/myClass";

function ClassDetail(props) {
  const [subContent, setSubContent] = useState(0);
  const [modal, setModal] = useState(false);
  const [userSelected, setUserSelected] = useState("");
  function openPops(id_member) {
    setModal(true);
    const member = props.members.results[0].find(
      (member) => member.id_account === id_member
    );
    setUserSelected(member.username);
    props.getMemberSubjects(
      `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/members/subject/${id_member}.${qs}?limit=10`,
      props.token
    );
  }
  function closePops() {
    setModal(false);
  }
  const qs = new URLSearchParams(useLocation().search).get("id");
  const myClass = props.myClass[0].find((data) => data.id_class === Number(qs));
  const contentHandler = (number) => {
    if (number === 4) {
      props.getMembers(
        `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/members/${qs}?limit=10`,
        props.token
      );
    }
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
              {props.role === 0 ? (
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
              ) : null}
              {/* <div className="new-class-register">Register</div> */}
            </div>
          </div>
        </div>
        <div className="class-detail-body">
          {props.role === 1 || subContent === 1 ? (
            <div className="detail-body-head">
              <div className="detail-void2"></div>
              <div className="line-percent">
                {myClass.progress || 100}% to complete
                <div
                  className="line-percent-before"
                  style={{ width: `${myClass.progress || 100}%` }}
                ></div>
                <div
                  className="line-percent-after"
                  style={{ width: `${100 - (myClass.progress || 100)}%` }}
                ></div>
              </div>
            </div>
          ) : (
            <div className="detail-body-head">
              <div className="detail-void"></div>
            </div>
          )}
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
            {props.role === 1 ? (
              <span
                onClick={() => contentHandler(4)}
                className={
                  subContent === 4
                    ? "section-option option-selected"
                    : "section-option"
                }
              >
                Member
              </span>
            ) : null}
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
          ) : subContent === 1 ? (
            <ClassProgress
              subClass={props.subClass}
              role={props.role}
              myClass={myClass}
            />
          ) : subContent === 4 ? (
            <>
              <div
                className={
                  modal === true
                    ? "pops-background"
                    : "props-background modalHide"
                }
              >
                <div className="popsScoringMember">
                  <div className="header-popsScoringMember">
                    <img
                      src="https://jodemy.netlify.app/assets/photo_profile/photo14.png"
                      alt="photo14"
                    />
                    {userSelected}
                    <button className="closePops" onClick={closePops}>
                      X
                    </button>
                  </div>
                  <table>
                    <tbody>
                      {props.memberSubjects.isFulfilled
                        ? props.memberSubjects.results[0].map((subject) => {
                            return (
                              <tr key={subject.id_subject}>
                                <td>{subject.subject_name}</td>
                                {subject.score === null ? (
                                  <td
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <div className="unfinished">Unfinished</div>
                                  </td>
                                ) : (
                                  <td
                                    className="scoreColor"
                                    style={{
                                      color: `hsl(${(
                                        (subject.score === null
                                          ? 0
                                          : subject.score / 100) * 180
                                      ).toFixed(0)},100%,50%)`,
                                    }}
                                  >
                                    {subject.score.toFixed(0)}
                                  </td>
                                )}
                              </tr>
                            );
                          })
                        : null}

                      {/* <tr>
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
                        <td
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <div className="unfinished">Unfinished</div>
                        </td>
                      </tr>
                      <tr>
                        <td>UX for Web Design</td>
                        <td
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <div className="unfinished">Unfinished</div>
                        </td>
                      </tr>
                      <tr>
                        <td>Final-term Exam</td>
                        <td
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <div className="unfinished">Unfinished</div>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
              <table>
                <tbody>
                  {props.members.isFulfilled
                    ? props.members.results[0].map((member) => {
                        return (
                          <tr
                            key={member.id_account}
                            onClick={() => openPops(member.id_account)}
                          >
                            <td>
                              <img
                                src="https://jodemy.netlify.app/assets/photo_profile/photo14.png"
                                alt="photo14"
                              />
                            </td>
                            <td>{member.username}</td>
                            <td>&#x22EE;</td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </>
          ) : null}
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
  role: state.user.results.role,
  members: state.members,
  memberSubjects: state.memberSubjects,
});
const mapDispatchToProps = (dispatch) => ({
  registerClass: (url, token) => dispatch(registerCLASS(url, token)),
  getSubClass: (url, token) => dispatch(getSubClass(url, token)),
  getMembers: (url, token) => dispatch(getMembers(url, token)),
  getMemberSubjects: (url, token) => dispatch(getMemberSubjects(url, token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ClassDetail);
