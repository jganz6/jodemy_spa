import { React, useState } from "react";
import { useHistory } from "react-router-dom";
function ListMyClass({
  data,
  token,
  subClass,
  role,
  actionDeleteClass,
  actionUpdateClass,
  showForm,
  setShowForm,
}) {
  const [popsAction, setPopsAction] = useState(null);
  const [popsFormAction, setPopsFormAction] = useState(null);
  const [formUpdate, setFormUpdate] = useState({
    image: null,
    class_name: "",
    category: "Software",
    level: "Beginner",
    description: "",
    pricing: "",
    schedule: "",
    start_time: "",
    end_time: "",
  });

  // const [isAction, setIsAction] = useState(false);
  const history = useHistory();
  const classHandler = (id_class, token) => {
    if (role === 0) {
      subClass(
        `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/subjectClass/${id_class}?limit=10`,
        token
      );
    } else if (role === 1) {
      subClass(
        `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/subjectByIdFacilitator/${id_class}?limit=10`,
        token
      );
    }
    history.push(`ClassDetail?id=${id_class}`);
  };
  const handleSubmit = (e) => {
    const formData = new FormData();
    if (formUpdate.image !== null) {
      formData.append("image", formUpdate.image, formUpdate.image.name);
    }
    formData.append("class_name", formUpdate.class_name);
    formData.append("category", formUpdate.category);
    formData.append("level", formUpdate.level);
    formData.append("description", formUpdate.description);
    formData.append("pricing", formUpdate.pricing);
    formData.append("schedule", formUpdate.schedule);
    formData.append("start_time", formUpdate.start_time);
    formData.append("end_time", formUpdate.end_time);
    actionUpdateClass(
      `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/${data.id_class}`,
      token,
      formData
    );
    setShowForm(false);
    e.preventDefault();
  };
  return (
    <tr>
      {role === 1 ? (
        <>
          <td>
            <input type="checkbox" name="" id="" />
            <div
              style={
                popsFormAction === data.id_class && showForm
                  ? {
                      display: "flex",
                      position: "fixed",
                      top: "0",
                      left: "0",
                      width: "100vw",
                      height: "100vh",
                      zIndex: "4",
                      backgroundColor: "rgba(0, 0, 0, 0.753)",
                      justifyContent: "center",
                      alignItems: "center",
                    }
                  : { display: "none" }
              }
            >
              <div className="create-new-class">
                <form
                  style={{
                    position: "inherit",
                  }}
                  onSubmit={handleSubmit}
                >
                  <div className="flex-box-input">
                    <div className="box-create-class">
                      <div className="input-create-class">
                        <label htmlFor="cn">Class Name</label>:
                        <input
                          name="cn"
                          type="text"
                          value={formUpdate.class_name}
                          onChange={(e) =>
                            setFormUpdate({
                              ...formUpdate,
                              class_name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="input-create-class">
                        <label htmlFor="categories">Categories</label>:
                        <select
                          name="categories"
                          value={formUpdate.category}
                          onChange={(e) =>
                            setFormUpdate({
                              ...formUpdate,
                              category: e.target.value,
                            })
                          }
                        >
                          <option value="Software">Software</option>
                          <option value="History">History</option>
                          <option value="Finance">Finance</option>
                          <option value="Science">Science</option>
                          <option value="Math">Math</option>
                        </select>
                      </div>
                      <div className="input-create-class">
                        <label htmlFor="categories">Categories</label>:
                        <select
                          name="categories"
                          value={formUpdate.level}
                          onChange={(e) =>
                            setFormUpdate({
                              ...formUpdate,
                              level: e.target.value,
                            })
                          }
                        >
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advance">Advance</option>
                        </select>
                      </div>
                    </div>
                    <div className="box-create-class">
                      <div className="input-create-class">
                        <div className="col-div1">Pricing</div>:
                        <div className="radio-btn">
                          <input
                            type="radio"
                            name="price"
                            value="0"
                            onChange={(e) =>
                              setFormUpdate({
                                ...formUpdate,
                                pricing: e.target.value,
                              })
                            }
                          />
                          <label htmlFor="choice1">Free</label>
                          <input type="radio" name="price" value="paid" />
                          <label htmlFor="choice2">Paid</label>
                          <label htmlFor="choicePrice">:</label>
                          <input
                            type="text"
                            name="price"
                            className="price-radio"
                            value={formUpdate.pricing}
                            onChange={(e) =>
                              setFormUpdate({
                                ...formUpdate,
                                pricing: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="input-create-class">
                        <div className="col-div1">Schedule</div>:
                        <div>
                          <select
                            name="schedule-select"
                            value={formUpdate.schedule}
                            onChange={(e) =>
                              setFormUpdate({
                                ...formUpdate,
                                schedule: e.target.value,
                              })
                            }
                          >
                            <option>Friday</option>
                            <option>Thursday</option>
                            <option>Wednesday</option>
                            <option>Tuesday</option>
                            <option>Monday</option>
                          </select>
                          <input
                            type="time"
                            value={formUpdate.start_time}
                            onChange={(e) =>
                              setFormUpdate({
                                ...formUpdate,
                                start_time: e.target.value + ":00",
                              })
                            }
                          />{" "}
                          -{" "}
                          <input
                            type="time"
                            value={formUpdate.end_time}
                            onChange={(e) =>
                              setFormUpdate({
                                ...formUpdate,
                                end_time: e.target.value + ":00",
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="input-create-class">
                        <div className="col-div1">Logo Class</div>:
                        <input
                          type="file"
                          onChange={(e) =>
                            setFormUpdate({
                              ...formUpdate,
                              image: e.target.files[0],
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-text-area">
                    <label>Description</label>
                    <textarea
                      rows="10"
                      cols="100"
                      value={formUpdate.description}
                      onChange={(e) =>
                        setFormUpdate({
                          ...formUpdate,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <button
                    style={{
                      position: "inherit",
                    }}
                    type="submit"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    style={{
                      backgroundColor: "red",
                      color: "#fff",
                      width: "30%",
                      border: "none",
                      borderRadius: "20px",
                    }}
                    onClick={() => {
                      setPopsAction(null);
                      setPopsFormAction(null);
                      setShowForm(false);
                    }}
                  >
                    close
                  </button>
                </form>
              </div>
            </div>
          </td>
          <td>{data.class_name}</td>
          <td>{data.category}</td>
          <td>{data.description}</td>
          <td colSpan="1">{`${data.schedule}, ${data.start_time.slice(
            0,
            5
          )} - ${data.end_time.slice(0, 5)}`}</td>
          <td style={{ display: "block" }}>
            {data.Student}{" "}
            <img
              src="https://jodemy.netlify.app/assets/activity/Student Icon.png"
              alt="student icon"
            />
          </td>
          <td
            onClick={() => {
              popsAction === null
                ? setPopsAction(data.id_class)
                : setPopsAction(null);
            }}
          >
            {popsAction === data.id_class ? (
              <div className="popsAction">
                <div onClick={() => classHandler(data.id_class, token)}>
                  detail
                </div>
                <div
                  onClick={() => {
                    setFormUpdate({
                      image: null,
                      class_name: data.class_name,
                      category: data.category,
                      level: data.level,
                      description: data.description,
                      pricing: data.pricing,
                      schedule: data.schedule,
                      start_time: data.start_time,
                      end_time: data.end_time,
                    });
                    setPopsFormAction(data.id_class);
                    setShowForm(true);
                  }}
                >
                  update
                </div>
                <div
                  onClick={() =>
                    actionDeleteClass(
                      `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/${data.id_class}`,
                      token
                    )
                  }
                >
                  delete
                </div>
              </div>
            ) : null}
            &#x22EE;
          </td>
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
          <td
            onClick={() => {
              popsAction === null
                ? setPopsAction(data.id_class)
                : setPopsAction(null);
            }}
          >
            {popsAction === data.id_class ? (
              <div className="popsAction">
                <div
                  onClick={() => classHandler(data.id_class, token)}
                  style={{ borderRadius: "10px" }}
                >
                  detail
                </div>
              </div>
            ) : null}
            &#x22EE;
          </td>
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
