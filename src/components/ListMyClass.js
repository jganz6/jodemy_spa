import React from "react";
import { useHistory } from "react-router-dom";
function ListMyClass({ data, token, subClass, role }) {
  const history = useHistory();
  const classHandler = (id_class, token) => {
    if (role === 0) {
      subClass(
        `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/subjectClass/${id_class}?limit=10`,
        token
      );
    }
    history.push(`ClassDetail?id=${id_class}`);
  };
  return (
    <tr onClick={() => classHandler(data.id_class, token)}>
      {role === 1 ? (
        <>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>{data.class_name}</td>
          <td>{data.category}</td>
          <td>{data.description}</td>
          <td colSpan="1">Friday, 08:00 - 09:40</td>
          <td style={{ display: "block" }}>
            {data.Student}{" "}
            <img
              src="https://jodemy.netlify.app/assets/activity/Student Icon.png"
              alt="student icon"
            />
          </td>
          <td>&#x22EE;</td>
        </>
      ) : (
        <>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>{data.class_name}</td>
          <td>{data.category}</td>
          <td>{data.description}</td>
          <td>
            <CircularBar progress={data.progress.toFixed(0)} />
          </td>
          <td>
            <div className="status-my-class">
              {data.progress.toFixed(0) < 100 ? "Ongoing" : "Completed"}
            </div>
          </td>
          <td
            style={{
              textAlign: "center",
              fontSize: "22px",
              color: `hsl(${((data.score / 100) * 180).toFixed(0)},100%,50%)`,
              fontWeight: "900",
            }}
          >
            {data.score === null ? "0" : data.score}
          </td>
          <td>&#x22EE;</td>
        </>
      )}
    </tr>
  );
}
const CircularBar = ({ progress }) => {
  const p = (progress / 100) * 360;
  return (
    <div className="progress">
      <span
        className="title"
        style={progress < 10 ? { paddingLeft: "13px" } : null}
      >
        {progress}
      </span>
      <div className="overlay"></div>
      <div
        className="left"
        style={{
          transform: `rotate(${p < 180 ? 0 : -180 - (180 - p)}deg)`,
          zIndex: `${p < 180 ? 0 : 1}`,
        }}
      ></div>
      <div
        className="right"
        style={{
          transform: `rotate(${p < 180 ? p : 180}deg)`,
          zIndex: `${p < 180 ? 0 : 1}`,
        }}
      ></div>
    </div>
  );
};
export default ListMyClass;
