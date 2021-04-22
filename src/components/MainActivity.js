import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import ListNewClass from "./ListNewClass";
import ListMyClass from "./ListMyClass";
import { registerCLASS } from "./../redux/actions/registerClass";
import { getSubClass } from "./../redux/actions/subClass";
import { getNewClass } from "../redux/actions/newClass";
import {
  getMyClass,
  createClass,
  deleteClass,
  updateClass,
} from "./../redux/actions/myClass";
import "./../css/my-class.css";
import "./../css/activity-facilitator.css";
import { useLocation } from "react-router-dom";
function MainActivity(props) {
  const [viewMyClass, setViewMyClass] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [pageSelect, setPageSelect] = useState(1);
  const [createClass, setCreateClass] = useState({
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
  const qs = new URLSearchParams(useLocation().search);
  console.log(qs.get());
  function viewMyClassHandler(handle) {
    setViewMyClass(handle);
  }
  const pages = [];
  for (let i = 1; i <= props.myClass.totalPage; i++) {
    pages.push(i);
  }
  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("image", createClass.image, createClass.image.name);
    formData.append("class_name", createClass.class_name);
    formData.append("category", createClass.category);
    formData.append("level", createClass.level);
    formData.append("description", createClass.description);
    formData.append("pricing", createClass.pricing);
    formData.append("schedule", createClass.schedule);
    formData.append("start_time", createClass.start_time);
    formData.append("end_time", createClass.end_time);
    props.createClass(
      `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class`,
      props.token,
      formData
    );
    e.preventDefault();
  };
  useEffect(() => {
    if (viewMyClass) {
      if (props.role === 1) {
        props.getMyClass(
          `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/list?search=${searchValue}&limit=10`,
          props.token
        );
      } else if (props.role === 0) {
        props.getMyClass(
          `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/myClass?search=${searchValue}&limit=10`,
          props.token
        );
      }
    }
  });
  return (
    <>
      <header>
        <span
          onClick={() => viewMyClassHandler(false)}
          style={!viewMyClass ? { display: "none" } : null}
        >
          <img
            src="https://jodemy.netlify.app/assets/back-icon.png"
            alt="back-icon.png"
          />
        </span>
        <h3>{!viewMyClass ? "Activity" : "My Class"}</h3>
      </header>
      <div className="my-class" style={{ overflowX: "auto" }}>
        {!viewMyClass ? (
          <h6>My class</h6>
        ) : (
          <div className="search-my-class">
            <input
              type="search"
              name="input-search"
              value={searchValue}
              placeholder="Quick Search"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <label htmlFor="input-search">
              <img
                src="https://jodemy.netlify.app/assets/Search Icon.png"
                alt="Search Icon.png"
              />
            </label>
            <button
              className="btn btn-search"
              onClick={() => {
                if (props.role === 1) {
                  props.getMyClass(
                    `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/list?search=${searchValue}&limit=10`,
                    props.token
                  );
                } else if (props.role === 0) {
                  props.getMyClass(
                    `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/myClass?search=${searchValue}&limit=10`,
                    props.token
                  );
                }
              }}
            >
              Search
            </button>
            <div className="my-class-sort">
              <label htmlFor="my-class-sort">Sort by: </label>
              <select
                name="my-class-sort"
                id=""
                value={filterValue}
                onChange={(e) => {
                  setFilterValue(e.target.value);
                  if (props.role === 1) {
                    props.getMyClass(
                      `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/list?filter=${filterValue}&limit=10`,
                      props.token
                    );
                  } else if (props.role === 0) {
                    props.getMyClass(
                      `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/myClass?filter=${filterValue}&limit=10`,
                      props.token
                    );
                  }
                }}
              >
                <option value="">All Categories</option>
                <option value="math">Math</option>
                <option value="science">Science</option>
                <option value="software">Software</option>
              </select>
            </div>
          </div>
        )}
        <table>
          <thead>
            {props.role === 1 ? (
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>Class Name</th>
                <th>Category</th>
                <th>Description</th>
                <th colSpan="1">Schedule</th>
                <th colSpan="1" style={{ display: "block" }}>
                  Student
                </th>
              </tr>
            ) : (
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>Class Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Progress</th>
                <th>Status</th>
                <th colSpan="1">Score</th>
              </tr>
            )}
          </thead>
          <tbody>
            {props.myClass[0].length === 0 || !props.myClass[0]
              ? null
              : viewMyClass
              ? props.myClass[0].map((data) => {
                  return (
                    <ListMyClass
                      key={data.id_class}
                      data={data}
                      token={props.token}
                      subClass={props.getSubClass}
                      role={props.role}
                      actionDeleteClass={props.deleteClass}
                      actionUpdateClass={props.updateClass}
                      showForm={showForm}
                      setShowForm={setShowForm}
                    />
                  );
                })
              : props.myClass[0].slice(0, 3).map((data) => {
                  return (
                    <ListMyClass
                      key={data.id_class}
                      data={data}
                      token={props.token}
                      subClass={props.getSubClass}
                      role={props.role}
                      actionDeleteClass={props.deleteClass}
                      actionUpdateClass={props.updateClass}
                      showForm={showForm}
                      setShowForm={setShowForm}
                    />
                  );
                })}
          </tbody>
          {!viewMyClass ? (
            <tfoot>
              <tr>
                <td colSpan="8">
                  <span
                    onClick={() => viewMyClassHandler(true)}
                  >{`view all >`}</span>
                </td>
              </tr>
            </tfoot>
          ) : null}
        </table>
        {viewMyClass ? (
          <div className="footer-table-newclass">
            <div>
              Showing {props.myClass[0].length} out of {props.myClass.count}
            </div>
            <div className="list-page-newclass">
              <div
                className="rectangle-shadow"
                onClick={() => {
                  setPageSelect(pageSelect > 1 ? pageSelect - 1 : pageSelect);
                  if (props.role === 1) {
                    props.getMyClass(
                      `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/list?page=${pageSelect}&limit=10`,
                      props.token
                    );
                  } else if (props.role === 0) {
                    props.getMyClass(
                      `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/myClass?page=${pageSelect}&limit=10`,
                      props.token
                    );
                  }
                }}
              >
                &#x3c;
              </div>
              {pages.map((page) => (
                <div
                  key={page}
                  className={
                    pageSelect === page
                      ? "rectangle-shadow rectangle_on"
                      : "rectangle-shadow"
                  }
                  onClick={() => {
                    setPageSelect(page);
                    if (props.role === 1) {
                      props.getMyClass(
                        `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/list?page=${pageSelect}&limit=10`,
                        props.token
                      );
                    } else if (props.role === 0) {
                      props.getMyClass(
                        `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/myClass?page=${pageSelect}&limit=10`,
                        props.token
                      );
                    }
                  }}
                >
                  {page}
                </div>
              ))}
              <div
                className="rectangle-shadow"
                onClick={() => {
                  setPageSelect(
                    pageSelect < pages.length ? pageSelect + 1 : pageSelect
                  );
                  if (props.role === 1) {
                    props.getMyClass(
                      `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/list?page=${pageSelect}&limit=10`,
                      props.token
                    );
                  } else if (props.role === 0) {
                    props.getMyClass(
                      `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/myClass?page=${pageSelect}&limit=10`,
                      props.token
                    );
                  }
                }}
              >
                &#x3e;
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {props.role === 1 ? (
        <div
          className="create-new-class"
          style={
            viewMyClass || showForm
              ? { overflowX: "auto", display: "none" }
              : { overflowX: "auto" }
          }
        >
          <h6>Create New Class</h6>
          <form onSubmit={handleSubmit}>
            <div className="flex-box-input">
              <div className="box-create-class">
                <div className="input-create-class">
                  <label htmlFor="cn">Class Name</label>:
                  <input
                    name="cn"
                    type="text"
                    value={createClass.class_name}
                    onChange={(e) =>
                      setCreateClass({
                        ...createClass,
                        class_name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-create-class">
                  <label htmlFor="categories">Categories</label>:
                  <select
                    name="categories"
                    value={createClass.category}
                    onChange={(e) =>
                      setCreateClass({
                        ...createClass,
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
                    value={createClass.level}
                    onChange={(e) =>
                      setCreateClass({
                        ...createClass,
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
                      id="choice1"
                      value="0"
                      onChange={(e) =>
                        setCreateClass({
                          ...createClass,
                          pricing: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="choice1">Free</label>
                    <input
                      type="radio"
                      name="price"
                      id="choice2"
                      value="paid"
                    />
                    <label htmlFor="choice2">Paid</label>
                    <label htmlFor="choicePrice">:</label>
                    <input
                      type="text"
                      name="price"
                      id="choicePrice"
                      className="price-radio"
                      value={createClass.pricing}
                      onChange={(e) =>
                        setCreateClass({
                          ...createClass,
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
                      value={createClass.schedule}
                      onChange={(e) =>
                        setCreateClass({
                          ...createClass,
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
                      value={createClass.start_time}
                      onChange={(e) =>
                        setCreateClass({
                          ...createClass,
                          start_time: e.target.value + ":00",
                        })
                      }
                    />{" "}
                    -{" "}
                    <input
                      type="time"
                      value={createClass.end_time}
                      onChange={(e) =>
                        setCreateClass({
                          ...createClass,
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
                    id="myFile"
                    onChange={(e) =>
                      setCreateClass({
                        ...createClass,
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
                value={createClass.description}
                onChange={(e) =>
                  setCreateClass({
                    ...createClass,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <button type="submit">Create</button>
          </form>
        </div>
      ) : (
        <div
          className="new-class"
          style={
            viewMyClass
              ? { overflowX: "auto", display: "none" }
              : { overflowX: "auto" }
          }
        >
          <h6>New class</h6>
          <div className="search-new-class">
            <input
              type="search"
              name="input-search"
              id=""
              placeholder="Quick Search"
            />
            <label htmlFor="input-search">
              <img
                src="https://jodemy.netlify.app/assets/Search Icon.png"
                alt="Search Icon.png"
              />
            </label>
            <button className="btn btn-search">Search</button>
          </div>
          <div className="search-filter">
            <div>
              Categories{" "}
              <img
                src="https://jodemy.netlify.app/assets/back-icon.png"
                alt="back-icon.png"
              />
            </div>
            <div>
              Level{" "}
              <img
                src="https://jodemy.netlify.app/assets/back-icon.png"
                alt="back-icon.png"
              />
            </div>
            <div>
              Pricing{" "}
              <img
                src="https://jodemy.netlify.app/assets/back-icon.png"
                alt="back-icon.png"
              />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Class Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Level</th>
                <th colSpan="2">Pricing</th>
              </tr>
            </thead>
            <tbody>
              {props.newClass[0].map((data) => {
                return (
                  <ListNewClass
                    key={data.id_class}
                    data={data}
                    register={props.registerClass}
                    token={props.token}
                  />
                );
              })}
            </tbody>
          </table>
          <div className="footer-table-newclass">
            <div>Showing 10 out of 64</div>
            <div className="list-page-newclass">
              <div className="rectangle-shadow">&#x3c;</div>
              <div className="rectangle-shadow rectangle_on">1</div>
              <div className="rectangle-shadow">2</div>
              <div className="rectangle-shadow">3</div>
              <div className="rectangle-shadow">4</div>
              <div className="rectangle-shadow">5</div>
              <div>...</div>
              <div className="rectangle-shadow">&#x3e;</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const mapStateToProps = (state) => ({
  myClass: state.myClassReducer.results,
  newClass: state.newClass.results,
  token: state.auth.results.token,
  role: state.user.results.role,
  registerCLASS: state.registerCLASS,
});
const mapDispatchToProps = (dispatch) => ({
  getMyClass: (url, token) => dispatch(getMyClass(url, token)),
  getNewClass: (url, token) => dispatch(getNewClass(url, token)),
  registerClass: (url, token) => dispatch(registerCLASS(url, token)),
  getSubClass: (url, token) => dispatch(getSubClass(url, token)),
  deleteClass: (url, token) => dispatch(deleteClass(url, token)),
  createClass: (url, token, formData) =>
    dispatch(createClass(url, token, formData)),
  updateClass: (url, token, formData) =>
    dispatch(updateClass(url, token, formData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainActivity);
