import { configureStore } from "@reduxjs/toolkit";
import { companiesSlice } from "./companies";

export const store = configureStore({ reducer: companiesSlice.reducer });
