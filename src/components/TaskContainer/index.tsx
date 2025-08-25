import "./styles.css";
import React from "react";
import checkedIcon from "../../assets/icons/check-active-icon.svg";
import editIcon from "../../assets/icons/edit-pencil-icon.svg";
import deleteIcon from "../../assets/icons/trash-can-icon.svg";
import { useNavigate } from "react-router-dom";
import useTasks from "../../hooks/useTasks";

interface IProps {
  _id: string;
  title: string;
  done: boolean;
  deleteTask: (_id: string) => void;
  changeStatus?: (isDone: boolean) => void;
}

const TaskContainer = ({
  _id,
  title,
  done,
  deleteTask,
  changeStatus,
}: IProps) => {
  const { changeTaskStatus } = useTasks();
  const navigate = useNavigate();
  const handleCheckboxClick = () => {
    _id && changeTaskStatus(_id, !done);
    changeStatus?.(!done);
  };

  const handleTaskClick = () => {
    navigate(`/task/${_id}`);
  };
  const handleEditClick = () => {
    navigate(`/task/edit/${_id}`);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure?")) {
      console.log(`Delete task ${_id}`);
      deleteTask(_id);
    }
  };

  return (
    <div className="task-container">
      <div className="task-container__checkbox" onClick={handleCheckboxClick}>
        {done ? (
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
        className={`task-container__title ${done ? "task-container__title__completed" : ""}`}
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
