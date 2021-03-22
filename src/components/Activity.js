import React from "react";
import "./../css/activity.css";
import MainActivity from "./mainActivity";
import MyClass from "./myClass";
import ClassDetail from "./classDetail";
import ClassProgress from "./classProgress";
import FacilitatorActivity from "./FacilitatorActivity";
import FacilitatorClassDetail from "./Facilitator_ClassDetail";
import FacilitatorMember from "./FacilitatorMember";

function Activity(props) {
  return (
    <main className="Activity">
      <Content2List content2={props.content2} buttonList={props.buttonList} />
    </main>
  );
}
function Content2List(props) {
  let result = null;
  if (props.content2 === "v1") {
    result = <MainActivity buttonList={props.buttonList} />;
  } else if (props.content2 === "v2") {
    result = <MyClass />;
  } else if (props.content2 === "v3") {
    result = <ClassDetail />;
  } else if (props.content2 === "v4") {
    result = <ClassProgress />;
  } else if (props.content2 === "f1") {
    result = <FacilitatorActivity buttonList={props.buttonList} />;
  } else if (props.content2 === "f2") {
    result = <FacilitatorClassDetail />;
  } else if (props.content2 === "f3") {
    result = <FacilitatorMember />;
  }
  return result;
}

export default Activity;
