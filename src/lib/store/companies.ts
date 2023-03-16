import { Company } from "../models/Companies";
import { createSlice } from "@reduxjs/toolkit";

const initialCompanyArrayState: Array<Company> = [];

export const companiesSlice = createSlice({
  name: "companies",
  initialState: {
    companies: initialCompanyArrayState,
    selectedCompany: null,
  },
  reducers: {
    updateCompanies: (state, action) => {
      state.companies = action.payload;
    },
  },
});

export const { updateCompanies } = companiesSlice.actions;
