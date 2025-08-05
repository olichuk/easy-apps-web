import React from "react";
import "./styles.css";
import TasksIcon from "../../assets/icons/tasks-icon.svg";
import ProfileIcon from "../../assets/icons/profile-icon.svg";
import CommonTasksIcon from "../../assets/icons/common-tasks-icon.svg";
import TasksIconActive from "../../assets/icons/tasks-active-icon.svg";
import ProfileIconActive from "../../assets/icons/profile-active-icon.svg";
import CommonTasksIconActive from "../../assets/icons/common-tasks-active-icon.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <footer className="footer">
      <div className="links">
        <Link to="/tasks">
          <div>
            <img src={currentPath === "/tasks" ? TasksIconActive : TasksIcon} />
          </div>
        </Link>
        <Link to="/profile">
          <div>
            <img
              src={currentPath === "/profile" ? ProfileIconActive : ProfileIcon}
            />
          </div>
        </Link>
        <Link to="/common-tasks">
          <div>
            <img
              src={
                currentPath === "/common-tasks"
                  ? CommonTasksIconActive
                  : CommonTasksIcon
              }
            />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
