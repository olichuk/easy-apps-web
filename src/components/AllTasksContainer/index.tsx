import "./styles.css";
import React from "react";

interface IProps {
  _id: string;
  title: string;
}

const AllTasksContainer = ({ title }: IProps) => {
  return (
    <div className="task-container">
      <span className="task-container__title ">{title}</span>
    </div>
  );
};

export default AllTasksContainer;
