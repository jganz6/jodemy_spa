import { React, useState } from "react";
import { connect } from "react-redux";
import ListNewClass from "./ListNewClass";
import ListMyClass from "./ListMyClass";
import { registerCLASS } from "./../redux/actions/registerClass";
import "./../css/my-class.css";
function MainActivity(props) {
  const [viewMyClass, setViewMyClass] = useState(false);
  function viewMyClassHandler(handle) {
    setViewMyClass(handle);
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
          </thead>
          <tbody>
            {props.myClass[0].map((data) => {
              return <ListMyClass key={data.id_class} data={data} />;
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
            <div>Showing 10 out of 21</div>
            <div className="list-page-newclass">
              <div className="rectangle-shadow">&#x3c;</div>
              <div className="rectangle-shadow rectangle_on">1</div>
              <div className="rectangle-shadow">2</div>
              <div className="rectangle-shadow">3</div>
              <div className="rectangle-shadow">&#x3e;</div>
            </div>
          </div>
        ) : null}
      </div>
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
    </>
  );
}
const mapStateToProps = (state) => ({
  myClass: state.myClassReducer.results,
  newClass: state.newClass.results,
  token: state.auth.results.token,
  registerCLASS: state.registerCLASS,
});
const mapDispatchToProps = (dispatch) => ({
  registerClass: (url, token, newClass) =>
    dispatch(registerCLASS(url, token, newClass)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainActivity);
