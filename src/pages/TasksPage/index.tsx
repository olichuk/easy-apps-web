import React, { useEffect } from "react";
import "./styles.css";
import TaskContainer from "../../components/TaskContainer";
import useTasks from "../../hooks/useTasks";

const TasksPage = () => {
  const { tasks, loading, error, getAllTasks, deleteTask } = useTasks();

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="tasks-page-container">
      {loading && (
        <div className="tasks-page-container-message">Loading...</div>
      )}
      {error && (
        <div className="tasks-page-container-message">Something went wrong</div>
      )}
      {!loading && !error && (
        <div className="tasks-list">
          {tasks.length === 0 ? (
            <div className="tasks-page-container-message">No tasks yet</div>
          ) : (
            tasks.map((task) => (
              <TaskContainer
                key={task.id}
                id={task.id}
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
