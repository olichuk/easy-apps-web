import React from "react";
import "./styles.css";

interface IProps {
  done: boolean;
}

const ProgressStatus = ({ done }: IProps) => {
  return (
    <div>
      {done ? (
        <div className="done-container">
          <span className="text-done">Done</span>
        </div>
      ) : (
        <div className="progress-container">
          <span className="text-progress">IN PROGRESS</span>
        </div>
      )}
    </div>
  );
};

export default ProgressStatus;
