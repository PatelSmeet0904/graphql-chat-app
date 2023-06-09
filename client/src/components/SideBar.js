import React from "react";
import { Box, Typography, Divider, Stack } from "@mui/material";
import UserCard from "./UserCard";
import LogoutIcon from "@mui/icons-material/Logout";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../graphql/queries";
import { useNavigate } from "react-router-dom";

const SideBar = ({ setloggedIn }) => {
  const { loading, data, error } = useQuery(GET_ALL_USERS, {fetchPolicy: "no-cache"});
  const navigate = useNavigate()

  if (loading) return <Typography variant="h6">Loading Users...</Typography>;

  if (error) {
    console.log(error.message);
  }
  return (
    <Box backgroundColor="#f7f7f7" height="100vh" width="250px" padding="10px">
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">Chat</Typography>
        <LogoutIcon
          onClick={() => {
            sessionStorage.removeItem("jwt");
            setloggedIn(false);
            navigate('/')
          }}
        />
      </Stack>

      <Divider />
      {data.users.map((item) => {
        return <UserCard key={item.id} item={item} />;
      })}
    </Box>
  );
};

export default SideBar;
