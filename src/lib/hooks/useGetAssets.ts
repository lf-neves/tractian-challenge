import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Asset } from "../models";
import { ReducerProps } from "../store/companies";

export const useGetAssets = (unitId: number): Array<Asset> => {
  const assets = useSelector((state: ReducerProps) => state.assets);

  const filteredAssets = useMemo(() => {
    return assets.filter((a) => a.unitId === unitId);
  }, [assets, unitId]);

  return filteredAssets;
};
