import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import type { TAppDispatch, TRootState } from "../../store";

const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispatch>();

  const { isAuthenticated } = useSelector((state: TRootState) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return {};
};

export default useSignIn;