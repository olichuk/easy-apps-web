import React from "react";
import "./styles.css";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import ImagePicker from "../ImagePicker";
import { Formik } from "formik";
import { useProfile } from "../../hooks/useProfile";

const ProfileForm = () => {
  const { data, loading } = useProfile();

  if (loading || !data) return <div>Loading...</div>;
  console.log("Profile data:", data);
  console.log("Avatar preview:", data.avatar);

  return (
    <Formik
      initialValues={{
        email: data.email,
        name: data.name,
        avatar: null,
        avatarPreview: data.avatar || "",
      }}
      onSubmit={(values) => {
        console.log("Update user:", values);
      }}
      enableReinitialize
    >
      {({ handleChange, handleSubmit, setFieldValue, values }) => (
        <div className="profile-form-container">
          <ImagePicker values={values} setFieldValue={setFieldValue} />

          <div className="profile-form-inputs">
            <CustomInput
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              disabled={true}
            />
            <CustomInput
              label="Name"
              value={values.name}
              onChange={handleChange("name")}
              type="text"
            />
          </div>

          <div className="profile-form-buttons">
            <CustomButton
              text="Update"
              type="submit"
              onClick={() => handleSubmit()}
            />
            <CustomButton text="Logout" onClick={() => console.log("logout")} />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default ProfileForm;
