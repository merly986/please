import { Box, Grid, Typography, Chip, Stack, Button, ButtonGroup, Divider, TextField, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function LinkCard ({attribute}) {
  const navigate = useNavigate();

  function handleOnClick() {
    return navigate("/entity", {state: {type: attribute?.rentity_type_name, id: attribute?.entity_id}});
  };

  return (
    <Card sx={{ width: "90%", m: 1, cursor: "pointer" }} onClick={handleOnClick}>
      <CardContent sx={{ p: 1 }}>
        <Typography sx={{ fontSize: 14, mb: 1 }} color="text.secondary" gutterBottom>
          {attribute?.rentity_type_label}
        </Typography>
        <Typography variant="body1">
          ID - {attribute?.entity_id}
         </Typography>
      </CardContent>
    </Card>
  )
};
