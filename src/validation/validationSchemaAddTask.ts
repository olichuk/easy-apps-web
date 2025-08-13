import * as Yup from "yup";

const validationSchemaAddTasks = Yup.object().shape({
  title: Yup.string().required("Title is required").min(2),
  description: Yup.string().required("Description is required"),
});

export default validationSchemaAddTasks;
