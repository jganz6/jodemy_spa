import React from "react";
import { Link } from "react-router-dom";
import "./../css/activity-facilitator.css";

function FacilitatorActivity(props) {
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
            <tr onClick={props.buttonList[2].buttonAction5}>
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
                  src="https://jodemy.netlify.app/assets/activity/Student Icon.png"
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
                  src="https://jodemy.netlify.app/assets/activity/Student Icon.png"
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
                  src="https://jodemy.netlify.app/assets/activity/Student Icon.png"
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
      <div className="create-new-class">
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
    </>
  );
}

export default FacilitatorActivity;
