import { Box, Grid, Typography, Chip, Stack, Button, ButtonGroup, Divider, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { getEntity } from "./utils";
import EntityDetailBody from "@/components/entity/EntityDetailBody.tsx"


export default function EntityDetail () {
  const params = useParams();
  const rEntityTypeName = params.rEntityTypeName;
  const entityID = params.entityID;
  
  const curEntity = getEntity(rEntityTypeName, entityID);


  return (
    <>
      <Typography sx={{mb: 2}} variant="h4" component="h1">{curEntity?.rentity_type_label}</Typography>
      <Divider />
      <EntityDetailBody entity={curEntity} />
    </>
  )
};
