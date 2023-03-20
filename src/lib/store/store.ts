import { configureStore } from "@reduxjs/toolkit";
import { storeSlice } from "./companies";

export const store = configureStore({ reducer: storeSlice.reducer });
