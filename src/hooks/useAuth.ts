/** @format */

import { useDispatch, useSelector } from "react-redux";
import {
  signInAsyncAction,
  signUpAsyncAction,
} from "../store/asyncActions/authAsyncActions";
import { TAppDispatch, TRootState } from "../store";
import { useMemo } from "react";

const useAuth = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const accessToken = useSelector<TRootState, string | null>(
    (state: TRootState) => state.auth.accessToken
  );

  const isAuth = useMemo(() => {
    const isAccessToken = !!accessToken;
    return isAccessToken;
  }, [accessToken]);

  const isLoading = useSelector((state: TRootState) => state.auth.isLoading);

  const signIn = (email: string, password: string) => {
    dispatch(signInAsyncAction({ email: email, password: password }));
  };

  const signUp = (
    email: string,
    name: string,
    password: string,
    avatar?: File
  ) => {
    dispatch(signUpAsyncAction({ email, name, password, avatar }));
  };

  return {
    accessToken,
    isLoading,
    signIn,
    signUp,
    isAuth,
  };
};

export default useAuth;
