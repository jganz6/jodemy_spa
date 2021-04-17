import React from "react";

function ListMyClass({ data }) {
  return (
    <tr>
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
          color: "#51E72B",
          fontWeight: "900",
        }}
      >
        {data.score === null ? "0" : data.score}
      </td>
      <td>&#x22EE;</td>
    </tr>
  );
}
const CircularBar = ({ progress }) => {
  const p = (progress / 100) * 360;
  return (
    <div className="progress">
      <span className="title">{progress}</span>
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
