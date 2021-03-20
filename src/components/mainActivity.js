import React from "react";

function mainActivity() {
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
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Front-end fundamentals</td>
              <td>Software</td>
              <td>Learn the fundamentals</td>
              <td>
                <div className="progress">
                  <span className="title">80</span>
                  <div className="overlay"></div>
                  <div
                    className="left"
                    style={{ transform: [{ rotate: "-72deg" }], zIndex: "1" }}
                  ></div>
                  <div
                    className="right"
                    style={{ transform: [{ rotate: "180deg" }] }}
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
                86{" "}
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
              <td>
                <div className="progress">
                  <span className="title">25</span>
                  <div className="overlay"></div>
                  <div
                    className="left"
                    style={{ transform: [{ rotate: "90deg" }] }}
                  ></div>
                  <div
                    className="right"
                    style={{ transform: [{ rotate: "90deg" }] }}
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
                71{" "}
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
              <td>
                <div className="progress">
                  <span className="title">69</span>
                  <div className="overlay"></div>
                  <div
                    className="left"
                    style={{
                      transform: [{ rotate: "-111.6deg" }],
                      zIndex: "1",
                    }}
                  ></div>
                  <div
                    className="right"
                    style={{ transform: [{ rotate: "180deg" }] }}
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
                  color: "#CCE72B",
                  fontWeight: "900",
                }}
              >
                62
              </td>
              <td>&#x22EE;</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="8">
                <a href="/My-class.html">{`view all >`}</a>
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
            <img src="./../../assets/Search Icon.png" alt="Search Icon.png" />
          </label>
          <button className="btn btn-search">Search</button>
        </div>
        <div className="search-filter">
          <div>
            Categories{" "}
            <img src="./../../assets/back-icon.png" alt="back-icon.png" />
          </div>
          <div>
            Level <img src="./../../assets/back-icon.png" alt="back-icon.png" />
          </div>
          <div>
            Pricing{" "}
            <img src="./../../assets/back-icon.png" alt="back-icon.png" />
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
            <tr>
              <td>Know more Javascript</td>
              <td>Software</td>
              <td>Javascript from the basic for...</td>
              <td>Beginner</td>
              <td>Free</td>
              <td>
                <div className="new-class-register">Register</div>
              </td>
              <td>&#x22EE;</td>
            </tr>
            <tr>
              <td>HTML and CSS to code</td>
              <td>Software</td>
              <td>Start combining HTML and CSS to...</td>
              <td>Intermediate</td>
              <td>$10</td>
              <td>
                <div className="new-class-register">Register</div>
              </td>
              <td>&#x22EE;</td>
            </tr>
            <tr>
              <td>Indonesian war history</td>
              <td>History</td>
              <td>From the first colonization until...</td>
              <td>Advance</td>
              <td>$50</td>
              <td>
                <div className="new-class-register">Register</div>
              </td>
              <td>&#x22EE;</td>
            </tr>
            <tr>
              <td>Budhism and Modern Psychology</td>
              <td>Psychology</td>
              <td>Budhism and science are deeply...</td>
              <td>Beginner</td>
              <td>Free</td>
              <td>
                <div className="new-class-register">Register</div>
              </td>
              <td>&#x22EE;</td>
            </tr>
            <tr>
              <td>Financial markets</td>
              <td>Finance</td>
              <td>An overview of the ideas, methods...</td>
              <td>Intermediate</td>
              <td>$10</td>
              <td>
                <div className="new-class-register">Register</div>
              </td>
              <td>&#x22EE;</td>
            </tr>
            <tr>
              <td>Corporate finance</td>
              <td>Finance</td>
              <td>Introduction to the fundamentals</td>
              <td>Advance</td>
              <td>$50</td>
              <td>
                <div className="new-class-register">Register</div>
              </td>
              <td>&#x22EE;</td>
            </tr>
            <tr>
              <td>Algoritm specialization</td>
              <td>Math</td>
              <td>Learn to think like computer...</td>
              <td>Advance</td>
              <td>$50</td>
              <td>
                <div className="new-class-register">Register</div>
              </td>
              <td>&#x22EE;</td>
            </tr>
            <tr>
              <td>Business and Financial Modeling</td>
              <td>Software</td>
              <td>Designed to help you make...</td>
              <td>Beginner</td>
              <td>Free</td>
              <td>
                <div className="new-class-register">Register</div>
              </td>
              <td>&#x22EE;</td>
            </tr>
            <tr>
              <td>Marketing in a Digital World</td>
              <td>Software</td>
              <td>This class examines how digital...</td>
              <td>Intermediate</td>
              <td>$10</td>
              <td>
                <div className="new-class-register">Register</div>
              </td>
              <td>&#x22EE;</td>
            </tr>
            <tr>
              <td>Social Psychology</td>
              <td>Psychology</td>
              <td>This class offers some answers...</td>
              <td>Advance</td>
              <td>$50</td>
              <td>
                <div className="new-class-register">Register</div>
              </td>
              <td>&#x22EE;</td>
            </tr>
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

export default mainActivity;
