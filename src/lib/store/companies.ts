import { createSlice } from "@reduxjs/toolkit";
import { Unit, User, WorkOrder, Company, Asset } from "../models";

export interface ReducerProps {
  companies: Array<Company>;
  users: Array<User>;
  units: Array<Unit>;
  workOrders: Array<WorkOrder>;
  assets: Array<Asset>;
  selectedCompanyId: number;
}

const iCompanyArrayState: Array<Company> = [];
const iUsersArrayState: Array<User> = [];
const iUnitsArrayState: Array<Unit> = [];
const iWorkOrdersArrayState: Array<WorkOrder> = [];
const iAssetsArrayState: Array<Asset> = [];

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    companies: iCompanyArrayState,
    users: iUsersArrayState,
    units: iUnitsArrayState,
    workOrders: iWorkOrdersArrayState,
    assets: iAssetsArrayState,
    selectedCompanyId: 1,
  },
  reducers: {
    updateStore: (state, action) => {
      return { ...state, ...action.payload };
    },
    setSelectedCompanyId: (state, action) => {
      state.selectedCompanyId = action.payload;
    },
    updateAssets(state, action) {
      state.assets = action.payload;
    },
  },
});

export const { updateStore, setSelectedCompanyId, updateAssets } =
  storeSlice.actions;
