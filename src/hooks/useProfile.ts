import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileThunk } from "../store/asyncActions/getProfileThunk";
import { TRootState, TAppDispatch } from "../store";

export const useProfile = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const { data, loading, error } = useSelector(
    (state: TRootState) => state.user
  );

  useEffect(() => {
    dispatch(getProfileThunk());
  }, [dispatch]);

  return { data, loading, error };
};
