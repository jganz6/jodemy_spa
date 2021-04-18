import { React, useState } from "react";
import { connect } from "react-redux";
import ListNewClass from "./ListNewClass";
import ListMyClass from "./ListMyClass";
import { registerCLASS } from "./../redux/actions/registerClass";
import { getSubClass } from "./../redux/actions/subClass";
import "./../css/my-class.css";
import "./../css/activity-facilitator.css";
function MainActivity(props) {
  const [viewMyClass, setViewMyClass] = useState(false);
  const [pageSelect, setPageSelect] = useState(1);
  function viewMyClassHandler(handle) {
    setViewMyClass(handle);
  }
  const pages = [];
  for (let i = 1; i <= props.myClass.totalPage; i++) {
    pages.push(i);
  }
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
            <div className="my-class-sort">
              <label htmlFor="my-class-sort">Sort by: </label>
              <select name="my-class-sort" id="">
                <option value="all-category">All Categories</option>
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
            {viewMyClass
              ? props.myClass[0].map((data) => {
                  return (
                    <ListMyClass
                      key={data.id_class}
                      data={data}
                      token={props.token}
                      subClass={props.getSubClass}
                      role={props.role}
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
                onClick={() =>
                  setPageSelect(pageSelect > 1 ? pageSelect - 1 : pageSelect)
                }
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
                  onClick={() => setPageSelect(page)}
                >
                  {page}
                </div>
              ))}
              <div
                className="rectangle-shadow"
                onClick={() =>
                  setPageSelect(
                    pageSelect < pages.length ? pageSelect + 1 : pageSelect
                  )
                }
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
            viewMyClass
              ? { overflowX: "auto", display: "none" }
              : { overflowX: "auto" }
          }
        >
          <h6>Create New Class</h6>
          <form>
            <div className="flex-box-input">
              <div className="box-create-class">
                <div className="input-create-class">
                  <label htmlFor="cn">Class Name</label>:
                  <input name="cn" type="text" />
                </div>
                <div className="input-create-class">
                  <label htmlFor="categories">Categories</label>:
                  <select name="categories">
                    <option value="software">Software</option>
                    <option value="history">History</option>
                    <option value="finance">Finance</option>
                    <option value="science">Science</option>
                    <option value="math">Math</option>
                  </select>
                </div>
              </div>
              <div className="box-create-class">
                <div className="input-create-class">
                  <div className="col-div1">Pricing</div>:
                  <div className="radio-btn">
                    <input type="radio" name="free" value="free" />
                    <label htmlFor="free">Free</label>
                    <input type="radio" name="paid" value="paid" />
                    <label htmlFor="paid">Paid</label>
                  </div>
                </div>
                <div className="input-create-class">
                  <div className="col-div1">Schedule</div>:
                  <div>
                    <select name="schedule-select">
                      <option>Friday</option>
                      <option>Thursday</option>
                      <option>Wednesday</option>
                      <option>Tuesday</option>
                      <option>Monday</option>
                    </select>
                    <input type="time" /> - <input type="time" />
                  </div>
                </div>
              </div>
            </div>
            <div className="input-text-area">
              <label>Description</label>
              <textarea rows="10" cols="100"></textarea>
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
  registerClass: (url, token) => dispatch(registerCLASS(url, token)),
  getSubClass: (url, token) => dispatch(getSubClass(url, token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainActivity);
