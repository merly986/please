import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/auth";
import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";

function Register({ openInfoTooltip, onError }) {
  const [formValue, setFormValue] = useState({
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { password, email } = formValue;
    register(password, email)
      .then(() => {
        onError(false);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        onError(true);
        openInfoTooltip(true);
        console.log(err);
      });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formValue.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Зарегистрироватся
            </Button>
            {/* <Grid container>
              <Grid item>
                <Link href="/sign-in" variant="body2">
                  {" Уже зарегистрированы? Войти"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>

    </>
  );
}

export default Register;