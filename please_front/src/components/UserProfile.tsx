import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { Box, Typography } from "@mui/material";


function UserProfile({ user }) {

  const fakeUser = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@fake.com",
    photo: "https://picsum.photos/200/200"
  };
  const userData = user ? user : fakeUser;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Box
        component="img"
        src={userData.photo || "/default_photo.jpg"}
        sx={{ width: 200, height: 200, borderRadius: 1 }}
        alt={`${userData.firstName} ${userData.lastName}`}
      />
      <Typography variant="h4" gutterBottom>
        {userData.firstName} {userData.lastName}
      </Typography>
      <Typography variant="body1">{userData.email}</Typography>
    </Box>
  );
}

export default UserProfile;

