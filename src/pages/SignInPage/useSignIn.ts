import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import type { TAppDispatch, TRootState } from "../../store";
import { loginThunk } from "../../store/reducers/authSlice";

const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispatch>();

  const { isAuthenticated } = useSelector((state: TRootState) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      dispatch(loginThunk({
        email: values.email,
        password: values.password
      }));
    }
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    {
      formik,
    }
  )
};

export default useSignIn;