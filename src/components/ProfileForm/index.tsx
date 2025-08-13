import React from "react";
import "./styles.css";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import ImagePicker from "../ImagePicker";
import { Formik } from "formik";
import { useProfile } from "../../hooks/useProfile";
import { useDispatch } from "react-redux";
import { saveProfileThunk } from "../../store/asyncActions/saveProfileThunk";
import { TAppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { logoutWithRedirectThunk } from "../../store/asyncActions/logoutWithRedirectThunk";

const ProfileForm = () => {
  const { data, loading } = useProfile();
  const dispatch = useDispatch<TAppDispatch>();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  if (loading || !data) return <div>Loading...</div>;

  return (
    <Formik
      initialValues={{
        email: data.email,
        name: data.name,
        avatar: null as File | null,
        avatarPreview: data.avatar || "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await dispatch(saveProfileThunk(values)).unwrap();
          alert("Profile updated successfully");
        } catch {
          alert("Failed to update profile");
        } finally {
          setSubmitting(false);
        }
      }}
      enableReinitialize
    >
      {({ handleChange, handleSubmit, setFieldValue, values }) => {
        const isDirty =
          values.name !== data.name ||
          values.avatar !== null ||
          (values.avatarPreview === "" && data.avatar);
        
        return (
          <div className="profile-form-container">
            <ImagePicker values={values} setFieldValue={setFieldValue} />

            <div className="profile-form-inputs">
              <CustomInput
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                disabled
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
                disabled={!isDirty || !values.name.trim()}
                onClick={() => handleSubmit()}
              />
              <CustomButton
                text={isLoggingOut ? "Logging out..." : "Logout"}
                onClick={async () => {
                  setIsLoggingOut(true);
                  await dispatch(logoutWithRedirectThunk(navigate));
                  setIsLoggingOut(false);
                }}
                disabled={isLoggingOut}
              />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default ProfileForm;
