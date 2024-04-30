import { Box, Grid, Typography, Chip, Stack, Button, ButtonGroup, Divider, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { getEntity } from "@/utils/utils";
import EntityDetailBody from "@/components/entity/EntityDetailBody.tsx";
import LinkCard from "@/components/entity/LinkCard.tsx";
import EntityAction from "@/components/entity/EntityAction.tsx";
import { useLocation } from 'react-router-dom';


export default function EntityDetail() {

  const { state } = useLocation()
  const currentEntityId = state?.id;

  const params = useParams();
  const rEntityTypeName = params.rEntityTypeName;
  const entityID = currentEntityId || params.entityID;

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
              <form id='formEntityDetail'>
                <EntityDetailBody entity={curEntity} />
              </form>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{mb: 2}} variant="h5" component="h2">Связаные карточки</Typography>
            <Box sx={{ overflowY: "auto"}} height={450}>
              <LinkCard attribute={{ entity_id: 85, rentity_type_label: "Заявка" }}/>
              <LinkCard attribute={{ entity_id: 83, rentity_type_label: "Кандидат" }}/>
            </Box>
          </Grid>
        </Grid>
        <EntityAction
          entityID={entityID}
          rentityTypeName={rEntityTypeName}
        />
      </Box>

  )
};
