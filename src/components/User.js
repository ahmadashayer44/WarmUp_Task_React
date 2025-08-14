import "./User.css";
import userImage from "../assets/user.png";
import Checked from "../assets/check.png";
import clsx from "clsx";
import { useState } from "react";
function User({ name, checked }) {
  let [checkedState, setCheckedState] = useState(checked);
  return (
    <div
      className={clsx(
        checkedState && "user-container",
        !checkedState && "in-active"
      )}
    >
      <img src={userImage} alt="user" className="user-image" />
      <div className="user-name">{name}</div>
      <div
        className="checked-container"
        onClick={() => setCheckedState(!checkedState)}
      >
        {checkedState ? (
          <img src={Checked} alt="checked" className="checked-icon" />
        ) : (
          <span className="unchecked-icon"></span>
        )}
      </div>
    </div>
  );
}

export default User;
