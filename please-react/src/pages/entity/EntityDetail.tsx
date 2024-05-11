import { Box, Grid, Typography, Chip, Stack, Button, ButtonGroup, Divider, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { getEntity } from "../../api/getEntity";
import EntityDetailBody from "../../components/entity/EntityDetailBody";
import LinkCard from "../../components/entity/LinkCard";
import EntityAction from "../../components/entity/EntityAction.tsx";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function EntityDetail() {

  
  const [ loadingEntity, setLoadingEntity ] = useState(true)
  const [ curEntity, setCurEntity] = useState({})
  

  const { state } = useLocation()
  const rEntityTypeName = state?.type;
  const entityID = state?.id;

  // const params = useParams();
  // const rEntityTypeName = currentEntityType || params.rEntityTypeName;
  // const entityID = currentEntityId || params.entityID;
  
  useEffect(()=>{
    setLoadingEntity(true);
    getEntity(rEntityTypeName, entityID)
        .then((entity) => {
          setCurEntity(entity);
          setLoadingEntity(false);
        })
        .catch(err => console.log(err));
  }, [rEntityTypeName, entityID]
  );

  return (

    !loadingEntity && <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{mb: 2}} variant="h4" component="h1">{curEntity?.rentity_type_label}</Typography>
          <Divider />
        </Grid>
        <Grid item xs={9} borderRadius={2} border={0}>
          <Box sx={{p: 2, overflowY:"auto"}} height={450}>
            <form id='formEntityDetail'>
              <EntityDetailBody entity={curEntity} />
            </form>
          </Box>
        </Grid>
        <Grid item xs={3} borderRadius={2} border={0}>
          <Typography sx={{mb: 2}} variant="h5" component="h2">Связаные карточки</Typography>
          <Box sx={{ overflowY: "auto"}} height={450}>
            <LinkCard attribute={{ entity_id: 40, rentity_type_label: "Заявка", rentity_type_name: "request" }}/>
            <LinkCard attribute={{ entity_id: 87, rentity_type_label: "Кандидат", rentity_type_name: "candidate" }}/>
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
