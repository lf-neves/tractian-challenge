import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Asset } from "../models";
import { ReducerProps } from "../store/companies";

export const useGetAssetDetails = (assetId: number): Asset | undefined => {
  const assets = useSelector((state: ReducerProps) => state.assets);

  const filteredAsset = useMemo(() => {
    return assets.find((a) => a.id === assetId);
  }, [assetId, assets]);

  return filteredAsset;
};
