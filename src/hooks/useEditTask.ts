import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useTasks from "./useTasks";

const useEditTask = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentTask, getTaskById, updateTask, deleteTask, loading } =
    useTasks();

  const [files, setFiles] = useState<(File | string)[]>([]);
  console.log("use edit task ", currentTask, id);

  useEffect(() => {
    if (id && (!currentTask || currentTask._id !== id)) {
      getTaskById(id);
    }
  }, [id]);

  useEffect(() => {
    console.log(files, "files in useEditTask");
  }, [files]);

  useEffect(() => {
    if (currentTask?.files && currentTask._id === id) {
      setFiles(currentTask.files);
    }
  }, [currentTask]);

  const addFile = (file: File) => {
    setFiles((prev) => {
      return [...prev, file];
    });
  };

  const removeFile = (fileToRemove: File | string) => {
    setFiles((prev) =>
      prev.filter((f) => {
        if (typeof f === "string" && typeof fileToRemove === "string") {
          console.log("removing string file: ", fileToRemove);
          return f !== fileToRemove;
        }
        if (f instanceof File && fileToRemove instanceof File) {
          console.log("removing File object: ", fileToRemove);
          return !(
            f.name === fileToRemove.name && f.size === fileToRemove.size
          );
        }
        return true;
      })
    );
  };

  const handleSubmit = (values: {
    _id: string;
    title: string;
    description: string;
    files: (File | string)[];
    done: boolean;
    oldFiles: string[];
    onSucsess?: () => void;
  }) => {
    if (!id) return;
    console.log(values, "==========");
    updateTask(
      values._id,
      values.title,
      values.description,
      values.files,
      values.done,
      values.oldFiles,
      () => {
        navigate("/tasks");
        values.onSucsess?.();
      }
    );
  };

  const handleDeleteClick = () => {
    if (!id) return;
    deleteTask(id);
    navigate("/tasks");
  };
  return {
    currentTask,
    loading,
    handleSubmit,
    files,
    addFile,
    setFiles,
    removeFile,
    handleDeleteClick,
  };
};

export default useEditTask;
