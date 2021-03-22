import React from "react";
import { Link } from "react-router-dom";

function FacilitatorActivity() {
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
              <th colSpan="1">Schedule</th>
              <th colSpan="1">Student</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Front-end fundamentals</td>
              <td>Software</td>
              <td>Learn the fundamentals</td>
              <td colSpan="1">Friday, 08:00 - 09:40</td>
              <td>
                24{" "}
                <img
                  src="http://localhost:3000/assets/activity/Student Icon.png"
                  alt="student icon"
                />
              </td>
              <td>&#x22EE;</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>HTML for beginners</td>
              <td>Software</td>
              <td>HTML from scratch</td>
              <td colSpan="1">Friday, 08:00 - 09:40</td>
              <td>
                24{" "}
                <img
                  src="http://localhost:3000/assets/activity/Student Icon.png"
                  alt="student icon"
                />
              </td>
              <td>&#x22EE;</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>History of Europe</td>
              <td>History</td>
              <td>The history of Europe concerns itself...</td>
              <td colSpan="1">Friday, 08:00 - 09:40</td>
              <td>
                24{" "}
                <img
                  src="http://localhost:3000/assets/activity/Student Icon.png"
                  alt="student icon"
                />
              </td>
              <td>&#x22EE;</td>
            </tr>
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
    </>
  );
}

export default FacilitatorActivity;
