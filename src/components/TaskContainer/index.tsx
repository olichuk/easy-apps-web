import "./styles.css";
import React, { useState } from "react";
import checkedIcon from "../../assets/icons/check-active-icon.svg";
import editIcon from "../../assets/icons/edit-pencil-icon.svg";
import deleteIcon from "../../assets/icons/trash-can-icon.svg";
import { useNavigate } from "react-router-dom";

interface IProps {
  id: string;
  title: string;
  done: boolean;
  deleteTask: (id: string) => void;
}

const TaskContainer = ({ id, title, done, deleteTask }: IProps) => {
  const [isDone, setIsDone] = useState(done);
  const navigate = useNavigate();
  const handleCheckboxClick = () => {
    setIsDone(!isDone);
  };

  const handleTaskClick = () => {
    navigate(`/task/${id}`);
  };
  const handleEditClick = () => {
    navigate(`/task/edit/${id}`);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure?")) {
      console.log(`Delete task ${id}`);
      deleteTask(id);
    }
  };

  return (
    <div className="task-container">
      <div className="task-container__checkbox" onClick={handleCheckboxClick}>
        {isDone ? (
          <img
            src={checkedIcon}
            alt="Checked"
            className="task-container__checkbox__completed"
          />
        ) : (
          <div className="task-container__checkbox__uncompleted" />
        )}
      </div>
      <span
        className={`task-container__title ${isDone ? "task-container__title__completed" : ""}`}
        onClick={handleTaskClick}
      >
        {title}
      </span>

      <div className="task-container__actions">
        <button
          className="task-container__actions__icon"
          onClick={handleDeleteClick}
        >
          <img src={deleteIcon} alt="Delete" />
        </button>
        <button
          className="task-container__actions__icon"
          onClick={handleEditClick}
        >
          <img src={editIcon} alt="Edit" />
        </button>
      </div>
    </div>
  );
};

export default TaskContainer;
