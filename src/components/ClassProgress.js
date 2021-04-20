import { React, useState } from "react";

function ClassProgress(props) {
  const [popsAction, setPopsAction] = useState(null);
  function getMonth(num) {
    const month = [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (num[0] === "0") {
      return month[num[1]];
    } else {
      return month[num];
    }
  }
  return (
    <>
      <table>
        <tbody>
          {props.role === 0
            ? props.subClass[0].map((data) => {
                return (
                  <tr key={data.id_subject}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>{data.subject_name}</td>
                    <td>
                      {data.score === null
                        ? `${props.myClass.schedule}, ${data.subject_date.slice(
                            8,
                            10
                          )} ${getMonth(
                            data.subject_date.slice(5, 7)
                          )} ${data.subject_date.slice(
                            0,
                            4
                          )} ${props.myClass.start_time.slice(
                            0,
                            5
                          )} - ${props.myClass.end_time.slice(0, 5)}`
                        : "You have completed this topic"}
                    </td>
                    {data.score === null ? (
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
                            (data.score === null ? 0 : data.score / 100) * 180
                          ).toFixed(0)},100%,50%)`,
                        }}
                      >
                        {(data.score === null ? 0 : data.score).toFixed(0)}
                      </td>
                    )}
                  </tr>
                );
              })
            : props.subClass[0].map((data) => {
                return (
                  <tr key={data.id_subject}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>{data.subject_name}</td>
                    <td>{`${props.myClass.schedule}, ${data.subject_date.slice(
                      8,
                      10
                    )} ${getMonth(
                      data.subject_date.slice(5, 7)
                    )} ${data.subject_date.slice(
                      0,
                      4
                    )} ${props.myClass.start_time.slice(
                      0,
                      5
                    )} - ${props.myClass.end_time.slice(0, 5)}`}</td>
                    <td
                      onClick={() => {
                        popsAction === null
                          ? setPopsAction(data.id_subject)
                          : setPopsAction(null);
                      }}
                    >
                      {popsAction === data.id_subject ? (
                        <div className="popsAction">
                          <div style={{ display: "none" }}>detail</div>
                          <div
                            style={{ borderRadius: "10px 10px 0 0" }}
                            onClick={() => console.log("update")}
                          >
                            update
                          </div>
                          <div>delete</div>
                        </div>
                      ) : null}
                      &#x22EE;
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </>
  );
}

export default ClassProgress;
