import React from "react";
import "./../css/dashboard.css";

function Dashboard(props) {
  return (
    <>
      <main className="Dashboard">
        <header>
          <div style={{ padding: "10px" }}>News</div>
          <div className="news-picture">
            <img
              src="https://jodemy.netlify.app/assets/dashboard/news-picture.png"
              alt="news_picture.png"
            />
            <div className="shadow-picture">
              <div className="news-title">
                New update for front end development class sylabus!
              </div>
              <div className="navigation-point">
                <div className="point point-selected"></div>
                <div className="point"></div>
                <div className="point"></div>
                <div className="point"></div>
              </div>
            </div>
          </div>
        </header>
        <div className="all-schedule">
          <div className="header-schedule">
            <div className="title-schedule">
              <div className="date-now">My Class</div>
              <img
                src="https://jodemy.netlify.app/assets/dashboard/Calendar Icon.png"
                alt="Calendar Icon.png"
              />
            </div>
            <div className="date-now monthYear">October 2020</div>
            <div className="date-week">
              <div className="day-description">
                <div className="name-day">Mo</div>
                <div className="date-day">12</div>
              </div>
              <div className="day-description">
                <div className="name-day">Tu</div>
                <div className="date-day">13</div>
              </div>
              <div className="day-description">
                <div className="name-day">We</div>
                <div className="date-day">14</div>
              </div>
              <div className="day-description">
                <div className="name-day">Th</div>
                <div className="date-day">15</div>
              </div>
              <div className="day-description day-selected">
                <div className="name-day">Fr</div>
                <div className="date-day">16</div>
              </div>
              <div className="day-description">
                <div className="name-day">Sa</div>
                <div className="date-day">17</div>
              </div>
              <div className="day-description">
                <div className="name-day">Su</div>
                <div className="date-day">18</div>
              </div>
            </div>
          </div>
          <div className="schedule-facilitator">
            <table style={{ marginBottom: "20px" }}>
              <tbody>
                <tr>
                  <td colSpan="2">Friday, 08:00 - 09:40</td>
                  <td colSpan="2">Front-end fundamentals</td>
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
                  <td colSpan="2">Friday, 08:00 - 09:40</td>
                  <td colSpan="2">HTML for beginners</td>
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
            </table>
            <button className="btn-plusNewTask">
              <img
                src="https://jodemy.netlify.app/assets/activity/Plus Icon.png"
                alt="PlusIcon"
              />
              New Task
            </button>
          </div>
        </div>
      </main>
      <aside
        id="chat-side"
        style={
          props.buttonShow.chat === true ? props.buttonShow.styleChat : null
        }
      >
        <div className="message-head">
          Messages
          <img
            src="https://jodemy.netlify.app/assets/dashboard/Plus Icon.png"
            alt="Plus Icon.png"
          />
        </div>
        <div className="message-search">
          <input
            type="search"
            name="message_search"
            id=""
            placeholder="Search"
          />
          <label htmlFor="message_search">
            <img
              src="https://jodemy.netlify.app/assets/Dashboard/Search Icon.png"
              alt="Search Icon.png"
            />
          </label>
        </div>
        <div className="message-list">
          <div className="message-detail">
            <div className="message-photo">
              <img
                src="https://jodemy.netlify.app/assets/photo_profile/photo1.png"
                alt="photo1.png"
              />
            </div>
            <div className="message-spoiler">
              <div className="message-name">Nissa Sabyan</div>
              <div className="message-text">How about number 3?</div>
            </div>
            <div className="message-time">10.15 pm</div>
          </div>
          <div className="message-detail">
            <div className="message-photo">
              <img
                src="https://jodemy.netlify.app/assets/photo_profile/photo2.png"
                alt="photo2.png"
              />
            </div>
            <div className="message-spoiler">
              <div className="message-name">Rio Dewanto</div>
              <div className="message-text">I'm hungry.</div>
            </div>
            <div className="message-time">9.12 pm</div>
          </div>
          <div className="message-detail">
            <div className="message-photo">
              <img
                src="https://jodemy.netlify.app/assets/photo_profile/photo3.png"
                alt="photo3.png"
              />
            </div>
            <div className="message-spoiler">
              <div className="message-name">Discussion Group 21 (5)</div>
              <div className="message-text">
                Nissa : Let’s finish the task for tomorrow
              </div>
            </div>
            <div className="message-time">1.23 pm</div>
          </div>
          <div className="message-detail">
            <div className="message-photo">
              <img
                src="https://jodemy.netlify.app/assets/photo_profile/photo4.png"
                alt="photo4.png"
              />
            </div>
            <div className="message-spoiler">
              <div className="message-name">Isyana Sarasvati</div>
              <div className="message-text">Thanks.</div>
            </div>
            <div className="message-time">Yesterday</div>
          </div>
          <div className="message-detail">
            <div className="message-photo">
              <img
                src="https://jodemy.netlify.app/assets/photo_profile/photo5.png"
                alt="photo5.png"
              />
            </div>
            <div className="message-spoiler">
              <div className="message-name">Tompi</div>
              <div className="message-text">See you later!</div>
            </div>
            <div className="message-time">Yesterday</div>
          </div>
          <div className="message-detail">
            <div className="message-photo">
              <img
                src="https://jodemy.netlify.app/assets/photo_profile/photo6.png"
                alt="photo6.png"
              />
            </div>
            <div className="message-spoiler">
              <div className="message-name">
                You, Tompi, Isyana Sarasvati, Peppy
              </div>
              <div className="message-text">
                Haha. Yes, I heard before that you and Rosa.
              </div>
            </div>
            <div className="message-time">8/10</div>
          </div>
          <div className="message-detail">
            <div className="message-photo">
              <img
                src="https://jodemy.netlify.app/assets/photo_profile/photo7.png"
                alt="photo7.png"
              />
            </div>
            <div className="message-spoiler">
              <div className="message-name">Peppy</div>
              <div className="message-text">Haha. Me too</div>
            </div>
            <div className="message-time">7/10</div>
          </div>
          <div className="message-detail">
            <div className="message-photo">
              <img
                src="https://jodemy.netlify.app/assets/photo_profile/photo8.png"
                alt="photo8.png"
              />
            </div>
            <div className="message-spoiler">
              <div className="message-name">Sandra Dewi</div>
              <div className="message-text">how about number 3?</div>
            </div>
            <div className="message-time">1/10</div>
          </div>
          <div className="message-detail">
            <div className="message-photo">
              <img
                src="https://jodemy.netlify.app/assets/photo_profile/photo9.png"
                alt="photo9.png"
              />
            </div>
            <div className="message-spoiler">
              <div className="message-name">Reza Rahardian</div>
              <div className="message-text">I'm hungry.</div>
            </div>
            <div className="message-time">1/10</div>
          </div>
          <div className="message-detail">
            <div className="message-photo">
              <img
                src="https://jodemy.netlify.app/assets/photo_profile/photo10.png"
                alt="photo10.png"
              />
            </div>
            <div className="message-spoiler">
              <div className="message-name">Discussion Group 23 (5)</div>
              <div className="message-text">
                Nissa : Lets finish the task for tomorrow
              </div>
            </div>
            <div className="message-time">22/9</div>
          </div>
          <div className="message-detail">
            <div className="message-photo">
              <img
                src="https://jodemy.netlify.app/assets/photo_profile/photo11.png"
                alt="photo11.png"
              />
            </div>
            <div className="message-spoiler">
              <div className="message-name">Raissa</div>
              <div className="message-text">Thanks.</div>
            </div>
            <div className="message-time">21/9</div>
          </div>
          <div className="message-detail">
            <div className="message-photo">
              <img
                src="https://jodemy.netlify.app/assets/photo_profile/photo12.png"
                alt="photo12.png"
              />
            </div>
            <div className="message-spoiler">
              <div className="message-name">dr. Adrian</div>
              <div className="message-text">See you later!</div>
            </div>
            <div className="message-time">21/9</div>
          </div>
          <div className="message-detail">
            <div className="message-photo">
              <img
                src="https://jodemy.netlify.app/assets/photo_profile/photo13.png"
                alt="photo13.png"
              />
            </div>
            <div className="message-spoiler">
              <div className="message-name">Uus</div>
              <div className="message-text">Haha. Me too</div>
            </div>
            <div className="message-time">11/8</div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Dashboard;
