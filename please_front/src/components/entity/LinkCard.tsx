import { Box, Grid, Typography, Chip, Stack, Button, ButtonGroup, Divider, TextField, Card, CardContent } from "@mui/material";


export default function LinkCard ({attribute}) {
  
  return (
    <Card sx={{ width: "90%", m: 1 }}>
      <CardContent sx={{ p: 1 }}>
        <Typography sx={{ fontSize: 14, mb: 1 }} color="text.secondary" gutterBottom>
          Кандидат
        </Typography>
        <Typography variant="body1">
          Фамилия
         </Typography>
      </CardContent>
    </Card>
  )
};
