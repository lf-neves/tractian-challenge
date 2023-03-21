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
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "../common/Flex";
import { DashboardItem } from "../Dashboard/DashboardItem";
import Title from "../Dashboard/DashboardItem/Title";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface EditAssetProps {
  asset: Asset;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface EditAssetFormProps {
  model: string;
  sensors: Array<string>;
  specifications: {
    maxTemp?: number;
    power?: number;
    rpm?: number;
  };
  metrics: {
    lastUptimeAt: string;
    totalCollectsUptime: number;
    totalUptime: number;
  };
}

export const EditAssetForm: React.FC<EditAssetProps> = ({ asset, setOpen }) => {
  const { handleSubmit, register, control } = useForm<EditAssetFormProps>({
    defaultValues: {
      ...asset,
    },
  });
  const { fields, remove, append } = useFieldArray({
    control,
    //@ts-ignore
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
    setOpen(false);
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

            <Title>Specifications</Title>
            <TextField
              InputLabelProps={{
                shrink: asset.specifications.power !== undefined,
              }}
              {...register("specifications.power")}
              sx={{ my: 2 }}
              label="Power (kWh)"
              fullWidth
            />
            <TextField
              InputLabelProps={{
                shrink: asset.specifications.maxTemp !== undefined,
              }}
              {...register("specifications.maxTemp")}
              sx={{ my: 2 }}
              label="Max Temperature (Celsius)"
              fullWidth
            />
            <TextField
              InputLabelProps={{
                shrink: asset.specifications.rpm !== undefined,
              }}
              {...register("specifications.rpm")}
              sx={{ my: 2 }}
              label="RPM"
              fullWidth
            />
          </DashboardItem>
          <DashboardItem sx={{ mt: 4 }} xs={12}>
            <Title>Asset Metrics</Title>
            <Controller
              control={control}
              name={"metrics.lastUptimeAt"}
              render={({ field: { onChange } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    sx={{ my: 2 }}
                    label="Last Uptime At"
                    defaultValue={dayjs(asset.metrics.lastUptimeAt)}
                    onChange={(e) => onChange(e?.toISOString())}
                  />
                </LocalizationProvider>
              )}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              {...register("metrics.totalCollectsUptime", {
                valueAsNumber: true,
              })}
              sx={{ my: 2 }}
              label="Total Collects Uptime"
              fullWidth
              required
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              {...register("metrics.totalUptime")}
              sx={{ my: 2 }}
              label="Total Uptime"
              fullWidth
              required
            />
          </DashboardItem>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: 5,
          }}
        >
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};
