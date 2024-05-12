import { Box, Grid, Typography, Chip, Stack, Button, ButtonGroup, Divider, TextField } from "@mui/material";
import EntityField from "../../components/entity/EntityField.tsx"


export default function EntityDetailBody ({entity}) {
  const entityAttr = entity?.entity_attr;
  
  const listFields = entityAttr.map((attribute) => <EntityField key={attribute?.entity_attr_id} attribute={attribute} />)

  return <Box display="flex" flexWrap="wrap">{listFields}</Box>
};
