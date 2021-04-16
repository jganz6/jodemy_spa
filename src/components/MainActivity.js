import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ListNewClass from "./ListNewClass";
import ListMyClass from "./ListMyClass";
import { registerClass } from "./../redux/actions/newClass";
function MainActivity(props) {
  return (
    <>
      <header>
        <h3>Activity</h3>
      </header>
      <div className="my-class" style={{ overflowX: "auto" }}>
        <h6>My class</h6>
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
            {props.myClass.map((data) => {
              return <ListMyClass key={data.id_class} data={data} />;
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="8">
                <Link to="/Main/Activity/v2">{`view all >`}</Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="new-class" style={{ overflowX: "auto" }}>
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
            {/*onClick={props.buttonList[2].buttonAction2}*/}
            {props.newClass[0].map((data) => {
              return (
                <ListNewClass
                  key={data.id_class}
                  data={data}
                  register={props.registerClass}
                  newClass={props.newClass}
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
  myClass: state.myClassReducer.results[0],
  newClass: state.newClass.results,
});
const mapDispatchToProps = (dispatch) => ({
  registerClass: (id_class, newClass) =>
    dispatch(registerClass(id_class, newClass)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainActivity);
