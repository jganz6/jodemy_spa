import React from "react";
import "./../css/activity.css";
import MainActivity from "./MainActivity";
import ClassDetail from "./ClassDetail";
import FacilitatorClassDetail from "./Facilitator_ClassDetail";
import FacilitatorMember from "./FacilitatorMember";

function Activity(props) {
  return (
    <main className="Activity">
      <Content2List
        content2={props.content2}
        buttonList={props.buttonList}
        data={props.data}
      />
    </main>
  );
}
function Content2List(props) {
  let result = null;
  if (props.content2 === "Class") {
    result = <MainActivity buttonList={props.buttonList} data={props.data} />;
  } else if (props.content2 === "ClassDetail") {
    result = <ClassDetail />;
  } else if (props.content2 === "f2") {
    result = <FacilitatorClassDetail />;
  } else if (props.content2 === "f3") {
    result = <FacilitatorMember />;
  }
  return result;
}

export default Activity;
