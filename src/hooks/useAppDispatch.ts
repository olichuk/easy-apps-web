import { useDispatch } from "react-redux";
import type { TAppDispatch } from "../store/index";

export const useAppDispatch = () => useDispatch<TAppDispatch>();
