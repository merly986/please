import { Box, Grid, Typography, Chip, Stack, Button, ButtonGroup, Divider, TextField } from "@mui/material";


export default function EntityField ({attribute}) {
  const rAttrLabel = attribute?.rattr_label;
  const rAttrType = attribute?.rattr_type;
  const entityAttrValue = attribute?.entity_attr_value;
  
  const readOnly = {
    readOnly: false
  };

  
  switch(rAttrType) {
    case 'date':
      return <TextField InputProps={
            readOnly
          } label={rAttrLabel} defaultValue={entityAttrValue} />;
      break;
    default:
      return <TextField sx={{display: "block", m: 2}} label={rAttrLabel} defaultValue={entityAttrValue}/ >;
      break;
  };
};
