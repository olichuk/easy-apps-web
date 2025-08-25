import React, { useEffect } from "react";
import "./styles.css";
import TaskContainer from "../../components/TaskContainer";
import useTasks from "../../hooks/useTasks";
import { BarLoader } from "react-spinners";

const TasksPage = () => {
  const { tasks, loading, error, getAllTasks, deleteTask } = useTasks();

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="tasks-page-container">
      <div className="tasks-page-loader">
        {loading && (
          <div className="loader-container">
            <BarLoader color={"var(--violet)"} loading={loading} />
          </div>
        )}
      </div>
      {error && (
        <div className="tasks-page-container-message">Something went wrong</div>
      )}
      {!loading && !error && (
        <div className="tasks-list">
          {tasks.length === 0 ? (
            <div className="tasks-page-container-message">
              <p className="no-tasks-message">There are no tasks </p>
              <p className="no-tasks-message">at the moment </p>
            </div>
          ) : (
            tasks.map((task) => (
              <TaskContainer
                key={task._id}
                _id={task._id}
                title={task.title}
                done={task.done}
                deleteTask={deleteTask}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};
export default TasksPage;
