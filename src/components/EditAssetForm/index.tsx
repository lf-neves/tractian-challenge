import { Asset } from "@/lib/models";
import { ReducerProps, updateAssets } from "@/lib/store/companies";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "../common/Flex";
import { DashboardItem } from "../Dashboard/DashboardItem";
import Title from "../Dashboard/DashboardItem/Title";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

interface EditAssetProps {
  asset: Asset;
}

interface EditAssetFormProps {
  model: string;
  sensors: Array<string>;
  specifications: any;
  lastUpTimeAt: string;
  totalCollectsUptime: number;
  totalUptime: number;
}

export const EditAssetForm: React.FC<EditAssetProps> = ({ asset }) => {
  const { handleSubmit, register, control } = useForm<EditAssetFormProps>({
    defaultValues: {
      model: asset.model,
      sensors: asset.sensors,
      specifications: asset.specifications,
      lastUpTimeAt: asset.metrics.lastUptimeAt,
      totalCollectsUptime: asset.metrics.totalCollectsUptime,
      totalUptime: asset.metrics.totalUptime,
    },
  });
  const { fields, remove, append } = useFieldArray({
    control,
    name: "sensors",
  });

  const dispatch = useDispatch();
  const assets = useSelector((state: ReducerProps) => state.assets);

  const onSubmit = (data: EditAssetFormProps) => {
    const editedAsset = { ...asset, ...data };
    const newAssets = assets.map((a) =>
      a.id === editedAsset.id ? editedAsset : a
    );

    dispatch(updateAssets(newAssets));
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 5 }}>
        {" "}
        Edit Asset - {asset.name}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <DashboardItem xs={12}>
            <Title>Techinical Details</Title>
            <TextField
              InputLabelProps={{ shrink: true }}
              {...register("model")}
              sx={{ my: 2 }}
              label="Model"
              fullWidth
            />
            <Box sx={{ my: 3 }}>
              {fields.map((field, index) => (
                <Flex key={field.id}>
                  <TextField
                    {...register(`sensors.${index}`)}
                    InputLabelProps={{ shrink: true }}
                    defaultValue={asset.sensors[index]}
                    sx={{ my: 2 }}
                    label={`Sensor ${index + 1}`}
                    fullWidth
                  />
                  <IconButton sx={{ mx: 2 }} onClick={() => remove(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Flex>
              ))}

              <IconButton size="small" onClick={() => append("")}>
                <AddIcon /> Add New Sensor
              </IconButton>
            </Box>

            {/* <TextField
              InputLabelProps={{ shrink: true }}
              {...register("specifications")}
              sx={{ my: 2 }}
              label="Specifications"
              fullWidth
            /> */}
          </DashboardItem>
          <DashboardItem sx={{ mt: 4 }} xs={12}>
            <Title>Asset Metrics</Title>
            <TextField
              InputLabelProps={{ shrink: true }}
              {...register("lastUpTimeAt")}
              sx={{ my: 2 }}
              label="lastUpTime"
              fullWidth
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              {...register("totalCollectsUptime")}
              sx={{ my: 2 }}
              label="Total Collects Uptime"
              fullWidth
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              {...register("totalUptime")}
              sx={{ my: 2 }}
              label="Total Uptime"
              fullWidth
            />
          </DashboardItem>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            pt: 5,
          }}
        >
          <Button variant="contained">
            <input
              type="submit"
              value="Submit"
              style={{
                backgroundColor: "transparent",
                border: 0,
                color: "white",
                fontFamily: "inherit",
                padding: 3,
                fontWeight: "inherit",
              }}
            />
          </Button>
        </Box>
      </form>
    </Box>
  );
};
