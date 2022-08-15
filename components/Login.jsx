import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
export default function Login() {
  const [loginCredentials, setLoginCredential] = useState({
    email: "",
    password: "",
  });
  //login
  const hubmitHandler = async (e) => {
    e.preventDefault();
    e.target.reset();
    const { data } = await axios.post(
      `https://limadi-api.atiar.info/api/v1/auth/login?email=${loginCredentials.email}&password=${loginCredentials.password}`,
      {
        headers: {
          "content-type": "application/json",
          "app-role": "company",
        },
      }
    );
    console.log(data);
  };

  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        placeContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "6px",
          width: "500px",
        }}
        component="form"
        onSubmit={hubmitHandler}
      >
        <Stack spacing={3} sx={{ padding: "50px" }}>
          <Stack spacing={1}>
            <Typography
              align="center"
              variant="bold"
              sx={{ fontSize: "21px", fontWeight: 700 }}
            >
              Sign In
            </Typography>
            <Typography align="center">Please sign in to continue</Typography>
          </Stack>
          <Stack spacing={2}>
            <TextField
              className="styleTextField"
              size="large"
              variant="standard"
              type="text"
              placeholder="Email"
              required
              InputProps={{ disableUnderline: true }}
              onChange={(e) =>
                setLoginCredential({
                  ...loginCredentials,
                  email: e.target.value,
                })
              }
            />
            <TextField
              className="styleTextField"
              size="large"
              variant="standard"
              type="password"
              placeholder="Password"
              required
              InputProps={{
                endAdornment: <VisibilityIcon />,
                disableUnderline: true,
              }}
              onChange={(e) =>
                setLoginCredential({
                  ...loginCredentials,
                  password: e.target.value,
                })
              }
            />
            <div className="buttonWrapper">
              <Button
                size="medium"
                variant="contained"
                sx={{
                  width: "120px",
                  backgroundColor: "#47A7FF",
                  color: "#FFFFFF",
                }}
                type="submit"
              >
                Sign In
              </Button>
            </div>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
