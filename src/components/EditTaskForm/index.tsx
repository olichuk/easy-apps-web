import React from "react";
import { Formik } from "formik";
import validationSchemaAddTasks from "../../validation/validationSchemaAddTask";
import TaskAttachments from "../../components/TaskAttachments/index";
import CustomInput from "../CustomInput/index";
import CustomButton from "../CustomButton/index";
import TextError from "../../components/TextError/index";
import useEditTask from "../../hooks/useEditTask";

const EditTaskPage = () => {
  const {
    currentTask,
    loading,
    files,
    handleSubmit,
    addFile,
    removeFile,
    handleDeleteClick,
  } = useEditTask();

  return (
    <Formik
      enableReinitialize
      initialValues={{
        _id: currentTask?._id || "",
        title: currentTask?.title || "",
        description: currentTask?.description || "",
        files: [] as File[],
        done: currentTask?.done || false,
        oldFiles: (currentTask?.files as string[]) || [],
      }}
      validationSchema={validationSchemaAddTasks}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, setFieldValue, errors, values, isSubmitting }) => (
        <div className="add-task-form-container">
          <div className="add-task-form-inputs">
            <CustomInput
              type="text"
              label="Task title"
              value={values.title}
              onChange={(e) => setFieldValue("title", e.target.value)}
            />
            {errors.title && <TextError error={errors.title} />}

            <CustomInput
              type="text"
              label="Task description"
              value={values.description}
              onChange={(e) => setFieldValue("description", e.target.value)}
            />
            {errors.description && <TextError error={errors.description} />}

            <label>
              Completed:
              <input
                type="checkbox"
                checked={values.done}
                onChange={(e) => setFieldValue("done", e.target.checked)}
              />
            </label>

            <TaskAttachments
              attachments={files}
              addAttachment={addFile}
              removeAttachment={removeFile}
            />
          </div>

          <div className="add-task-form-button">
            <CustomButton
              type="submit"
              text={isSubmitting || loading ? "Saving..." : "Save"}
              onClick={() => handleSubmit()}
            />
          </div>

          <div className="delete-task-form-button">
            <CustomButton
              type="submit"
              text="Delete"
              onClick={handleDeleteClick}
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default EditTaskPage;
