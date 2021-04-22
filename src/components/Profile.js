import { React, useState } from "react";
import { connect } from "react-redux";
import "./../css/profile.css";
import { updateUser } from "../redux/actions/user";
function Profile(props) {
  const [updateValue, setUpdateValue] = useState({ username: "" });
  const [isChange, setIsChange] = useState(false);
  const handleSubmit = () => {
    if (updateValue.image !== null && updateValue.image) {
      const formData = new FormData();
      formData.append("image", updateValue.image, updateValue.image.name);
      props.updateUser(
        `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/users`,
        props.token,
        formData
      );
      setUpdateValue({ username: "" });
      setIsChange(false);
    }
  };
  return (
    <main className="profile">
      <header className=" d-flex flex-column justify-content-center align-items-center">
        <div className="profile-picture">
          <img
            style={{ borderRadius: "50%" }}
            src={
              props.dataUser.photo_profile !== null &&
              props.dataUser.photo_profile !== ""
                ? `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}${props.dataUser.photo_profile}`
                : "https://jodemy.netlify.app/assets/Profile-Picture-banner.png"
            }
            alt="profile-pictur"
          />
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              name="profilePictureUpdate"
              id="profilePictureUpdate"
              style={{ display: "none" }}
              onChange={(e) => {
                setUpdateValue({ ...updateValue, image: e.target.files[0] });
                setIsChange(true);
              }}
            />
            <label htmlFor="profilePictureUpdate">
              <img
                src="https://jodemy.netlify.app/assets/Edit Icon.png"
                alt="Edit Icon.png"
              />
            </label>
            {isChange ? <button type="submit">Save</button> : null}
          </form>
        </div>
        <div className="profile-name">{`${props.dataUser.username}`}</div>
      </header>
      <div>
        <h2 className="profile-title">Profile Settings</h2>
        <div className="profile-option">
          <div className="option-list">
            <img
              src="https://jodemy.netlify.app/assets/profil-settings/Phone Icon.png"
              alt="Phone Icon.png"
            />
            <span className="setting_text">Phone Number</span>
            <span className="arrow">&#x3e;</span>
          </div>
          <div className="option-list">
            <img
              src="https://jodemy.netlify.app/assets/profil-settings/PIN Icon.png"
              alt="PIN Icon.png"
            />
            <span className="setting_text">Change Password</span>
            <span className="arrow">&#x3e;</span>
          </div>
          <div className="option-list">
            <img
              src="https://jodemy.netlify.app/assets/profil-settings/Chats Icon.png"
              alt="Chats Icon.png"
            />
            <span className="setting_text">Chat settings</span>
            <span className="arrow">&#x3e;</span>
          </div>
          <div className="option-list">
            <img
              src="https://jodemy.netlify.app/assets/profil-settings/Notif Icon.png"
              alt="Notif Icon.png"
            />
            <span className="setting_text">Push Notification</span>
            <span className="arrow">&#x3e;</span>
          </div>
          <div className="option-list">
            <img
              src="https://jodemy.netlify.app/assets/profil-settings/Security Icon.png"
              alt="Security Icon.png"
            />
            <span className="setting_text">Privacy and Security</span>
            <span className="arrow">&#x3e;</span>
          </div>
          <div className="option-list">
            <img
              src="https://jodemy.netlify.app/assets/profil-settings/Storage Icon.png"
              alt="Storage Icon.png"
            />
            <span className="setting_text">Data and Storage</span>
            <span className="arrow">&#x3e;</span>
          </div>
        </div>
      </div>
    </main>
  );
}
const mapStateToProps = (state) => ({
  token: state.auth.results.token,
  dataUser: state.user.results,
  checkUser: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  updateUser: (url, token, FormData) => {
    dispatch(updateUser(url, token, FormData));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
