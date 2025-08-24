import React from "react";
import "./styles.css";
import { BarLoader } from "react-spinners";
import AllTasksContainer from "../../components/AllTasksContainer";
import { useCommonTasks } from "../../hooks/useCommonTasks";
import CustomButton from "../../components/CustomButton";

const CommonTasksPage = () => {
  const { tasks, loading, error, hasMore, loadMore } = useCommonTasks(10);

  return (
    <div className="common-tasks-page-container">
      <div className="tasks-page-loader">
        {loading && (
          <div className="loader-container">
            <BarLoader color={"var(--violet)"} loading={loading} />
          </div>
        )}
      </div>
      {error && (
        <div className="common-tasks-page-container-message">
          Something went wrong
        </div>
      )}
      {!loading && !error && (
        <div className="common-tasks-list">
          {tasks.length === 0 ? (
            <div className="common-tasks-page-container-message">
              <p className="no-tasks-message">There are no tasks </p>
              <p className="no-tasks-message">at the moment </p>
            </div>
          ) : (
            tasks.map((task) => (
              <AllTasksContainer
                key={task._id}
                _id={task._id}
                title={task.title}
              />
            ))
          )}
          {!loading && hasMore && (
            <div className="common-tasks-page-load-more-button">
              <CustomButton text="Load More" onClick={loadMore} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default CommonTasksPage;
