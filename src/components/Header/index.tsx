import React from "react";
import "./styles.css";
import CustomButton from "../CustomButton";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { TRootState } from "../../store/index";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const taskCounter = useSelector(
    (state: TRootState) => state.tasks.tasks.length
  );
  const formatTaskCounter = (count: number) => {
    return count === 1 ? `${count} task` : `${count} tasks`;
  };
  return (
    <header className="header">
      <Link to="/tasks" className="logo-link">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <div className="title-container">
        {currentPath === "/tasks" && (
          <div className="header-title-container">
            <div className="header-counter-container">
              <p className="header-counter-title">You Have </p>
              <p className="header-counter-title">
                {formatTaskCounter(taskCounter)} here
              </p>
            </div>
            <CustomButton
              text="+ Add Task"
              onClick={() => navigate("/tasks/add")}
            />
          </div>
        )}
        {currentPath === "/profile" && (
          <h1 className="header-title">Profile</h1>
        )}
        {currentPath === "/common-tasks" && (
          <h1 className="header-title">Common Tasks</h1>
        )}
        {currentPath === "/tasks/add" && (
          <h1 className="header-title">Add new task</h1>
        )}
      </div>
      <div className="buttons-container">
        <CustomButton text="Tasks" onClick={() => navigate("/tasks")} />
        <CustomButton text="Profile" onClick={() => navigate("/profile")} />
        <CustomButton
          text="Common Tasks"
          onClick={() => navigate("/common-tasks")}
        />
      </div>
    </header>
  );
};

export default Header;
