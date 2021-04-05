import React from "react";
import "./../css/my-class.css";
import { Link } from "react-router-dom";

function MyClass(props) {
  return (
    <>
      <header>
        <Link to="/Main/Activity/v1">
          <img
            src="https://jodemy.netlify.app/assets/back-icon.png"
            alt="back-icon.png"
          />
        </Link>
        <h3>My Class</h3>
      </header>
      <div className="my-class" style={{ overflowX: "auto" }}>
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
            {props.data.myClass.map((data, id) => {
              return (
                <tr key={id}>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>{data.class_name}</td>
                  <td>{data.category}</td>
                  <td>{data.description}</td>
                  <td>
                    <div className="progress">
                      <span className="title">80</span>
                      <div className="overlay"></div>
                      <div
                        className="left"
                        style={{
                          transform: "rotate(-72deg)",
                          zIndex: "1",
                        }}
                      ></div>
                      <div
                        className="right"
                        style={{ transform: "rotate(180deg)" }}
                      ></div>
                    </div>
                  </td>
                  <td>
                    <div className="status-my-class">Ongoing</div>
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      fontSize: "22px",
                      color: "#51E72B",
                      fontWeight: "900",
                    }}
                  >
                    {data.SCORE}
                  </td>
                  <td>&#x22EE;</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
      </div>
    </>
  );
}

export default MyClass;
