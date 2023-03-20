import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Asset } from "@/lib/models";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { AssetStatusChip } from "./AssetStatusChip";

interface AssetProps {
  asset: Asset;
}

export const AssetItem: React.FC<AssetProps> = ({ asset }) => {
  const router = useRouter();

  return (
    <Grid item md={4}>
      <Card>
        <CardHeader
          sx={{ backgroundColor: "white" }}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={asset.name}
          subheader={asset.model}
        />
        <CardMedia
          component="img"
          height="194"
          image={asset.image}
          alt="Paella dish"
          sx={{ padding: "0.1rem" }}
        />
        <CardContent sx={{ padding: "0.5rem" }}>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
            paddingBottom: "1rem",
          }}
        >
          <AssetStatusChip status={asset.status} />
          <Button
            variant="outlined"
            size="small"
            onClick={() =>
              router.push(`/units/${asset.unitId}/assets/${asset.id}`)
            }
          >
            Details
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};
