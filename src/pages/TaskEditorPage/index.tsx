import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useTasks from "../../hooks/useTasks";
import EditTaskForm from "../../components/EditTaskForm";
import React from "react";


const TaskEditorPage = () => {
  const { id } = useParams<{ id: string }>();
  const { currentTask, loading, error, getTaskById, } = useTasks();

  useEffect(() => void (id && getTaskById(id)), [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!currentTask) return <div>No task found</div>;

  return <EditTaskForm/>;
};

export default TaskEditorPage;
