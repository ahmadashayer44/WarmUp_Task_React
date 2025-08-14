import "./User.css";
import userImage from "../assets/user.png";
import Checked from "../assets/check.png";
import clsx from "clsx";
function User({ name, checked }) {
  return (
    <div className={clsx(checked && "user-container", !checked && "in-active")}>
      <img src={userImage} alt="user" className="user-image" />
      <div className="user-name">{name}</div>
      <div className="checked-container">
        {checked ? (
          <img src={Checked} alt="checked" className="checked-icon" />
        ) : (
          <span className="unchecked-icon"></span>
        )}
      </div>
    </div>
  );
}

export default User;
