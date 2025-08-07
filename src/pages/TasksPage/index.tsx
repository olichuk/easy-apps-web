import React, { useEffect } from "react";
import "./styles.css";
import TaskContainer from "../../components/TaskContainer";
import useTasks from "../../hooks/useTasks";

const TasksPage = () => {
  const { tasks, loading, error, getAllTasks } = useTasks();

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
              />
            ))
          )}
        </div>
      )}

      {/* <TaskContainer id="1" title="Sample Task" done={false} />
      <TaskContainer id="2" title="Sample Task" done={false} />
      <TaskContainer id="3" title="Sample Task" done={false} />
      <TaskContainer id="4" title="Sample Task" done={false} />
      <TaskContainer id="5" title="Sample Task" done={false} />
      <TaskContainer id="6" title="Sample Task" done={false} />
      <TaskContainer id="7" title="Sample Task" done={false} />
      <TaskContainer id="8" title="Sample Task" done={false} />
      <TaskContainer id="9" title="Sample Task" done={false} />
      <TaskContainer id="10" title="Sample Task" done={false} />
      <TaskContainer id="11" title="Sample Task" done={false} />
      <TaskContainer id="12" title="Sample Task" done={false} />
      <TaskContainer id="13" title="Sample Task" done={false} /> */}
    </div>
  );
};
export default TasksPage;
