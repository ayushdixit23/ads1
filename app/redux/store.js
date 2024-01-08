import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slice/dataSlice";
import { api } from "./slice/apiSlice";
import  userSlice  from "./slice/userData";

export const store = configureStore({
	reducer:{
  [api.reducerPath]:api.reducer,
	data:dataSlice,
	userData:userSlice
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
