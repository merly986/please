import { Box, Grid, Typography, Chip, Stack, Button, ButtonGroup, Divider, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { getEntity } from "@/utils/utils";
import EntityDetailBody from "@/components/entity/EntityDetailBody.tsx"
import LinkCard from "@/components/entity/LinkCard.tsx"
import EntityAction from "@/components/entity/EntityAction.tsx"


export default function EntityDetail () {
  const params = useParams();
  const rEntityTypeName = params.rEntityTypeName;
  const entityID = params.entityID;
  
  const curEntity = getEntity(rEntityTypeName, entityID);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{mb: 2}} variant="h4" component="h1">{curEntity?.rentity_type_label}</Typography>
          <Divider />
        </Grid>
        <Grid item xs={9}>
          <Box sx={{p: 2}}>
            <EntityDetailBody entity={curEntity} />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={{mb: 2}} variant="h5" component="h2">Связаные карточки</Typography>
          <Box sx={{ overflowY: "auto"}} height={450}>
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
            <LinkCard />
          </Box>
        </Grid>
      </Grid>
      <EntityAction />
    </Box>
  )
};
