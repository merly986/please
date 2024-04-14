import avatar from "/avatar.png";
import { Avatar } from "@mui/material";
import { Box, Grid, Typography, Chip, Stack, Button, ButtonGroup, Divider, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { CallEnd, Email, Edit } from '@mui/icons-material';

const candidate = {
  firstName: "Иван",
  lastName: "Иванов",
  middleName: "Иванович",
  foto: avatar,
  birthday: "01.01.2000",
  phone: "+79999999999",
  email: "email@email.ru",
  resumeDate: "02.02.2020"
};

function CandidateInfo () {
  const params = useParams();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={3}>
          <ButtonGroup
            orientation="vertical"
            variant="text"
            size="small"
            color="secondary"
          >
            <Button>Принять</Button>
            <Button>Отправить по этапу</Button>
            <Button color="error">Удалить</Button>
          </ButtonGroup>
        </Grid>
        <Grid item sm={12} md={2}>
	  <Avatar
	    src={candidate.foto}
	    alt="Фото"
	    sx={{height: 160, width: 120}}
	    variant="square"
	  />          
        </Grid>
        <Grid item sm={12} md={4}>
          <div>
            <Typography variant="h4">{candidate.lastName}</Typography>
            <Typography variant="h5">{candidate.firstName}</Typography>
            <Typography variant="h5">{candidate.middleName}</Typography>
            <Typography variant="caption" sx={{display: "block"}}>Дата рождения: {candidate.birthday}</Typography>
            <Button size="small" startIcon={<Edit />}>Изменить персональные данные</Button>
          </div>
        </Grid>
        <Grid item sm={12} md={3}>
          <Stack spacing={1}>
            <Chip icon={<CallEnd />} label={candidate.phone} variant="outlined" />
            <Chip icon={<Email />} label={candidate.email} variant="outlined" />
            <Button size="small"  startIcon={<Edit />}>Изменить контактные данные</Button>
          </Stack>
        </Grid>
        <Grid item sm={12} md={12}>
          <Divider sx={{mb: 1}}/>
          <Typography variant="h5" sx={{display: "inline", mr: 3}}>Общая информация</Typography>
          <Button size="small" startIcon={<Edit />}>Редактировать</Button>
          <Grid container spacing={2}>
            <Grid item sm={12} md={7}>
              <TextField sx={{mt: 2}}
                fullWidth
                label="Образование"
                defaultValue="Высшее"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField sx={{mt: 2}}
                fullWidth
                label="Специальность"
                defaultValue="Водитель трамвая"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField sx={{mt: 2}}
                fullWidth
                label="Готовность к обучению"
                defaultValue="Всегда!!!"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField sx={{mt: 2}}
                fullWidth
                label="Доп. профессиональные навыки, компетенции"
                defaultValue="..."
                InputProps={{
                  readOnly: true,
                }}
              />

            </Grid>
            <Grid item sm={12} md={5}>
              <TextField sx={{mt: 2}}
                fullWidth
                label="Дата поступления резюме"
                defaultValue={ candidate.resumeDate }
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField sx={{mt: 2}}
                fullWidth
                label="Признак резюме"
                defaultValue="годное"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField sx={{mt: 2}}
                fullWidth
                label="Цель резюме"
                defaultValue="Водить трамвай"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField sx={{mt: 2}}
                fullWidth
                label="Откуда пришёл"
                defaultValue="Из армии (жд войска)"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField sx={{mt: 2}}
                fullWidth
                label="Источник кандидата"
                defaultValue="Родильный дом №14"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12} md={12}>
          <TextField sx={{mt: 2}}
            fullWidth
            label="Комментарии"
            defaultValue="..."
            InputProps={{
              readOnly: true,
            }}
            multiline
          />
          <TextField sx={{mt: 2}}
            fullWidth
            label="Документы"
            defaultValue="Паспорт, военный билет, аттестат, права на трамвай"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CandidateInfo;
