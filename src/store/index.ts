import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./reducers";

export const store = configureStore({
  reducer: routeReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
