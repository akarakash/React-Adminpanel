import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Link,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { SiGnuprivacyguard } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState([]);

  const nav = useNavigate();
  useEffect(() => {
    axios
      .get("https://670e4b65073307b4ee464347.mockapi.io/adminUser")
      .then((response) => {
        setValue(response.data);
      });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email) {
      let filterdata = value.filter((item) => item?.email == email);
      console.log(filterdata);
      if (filterdata.length == 0) {
        alert("please enter a email....");
      } else {
        if (password == filterdata[0].password) {
          localStorage.setItem('email',email)
          localStorage.setItem('password',password)
          nav("/");
        }
      }
    } else {  
    
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
          padding: 2,
          borderRadius: 1,
          boxShadow: 3,
          backgroundColor: "white",
        }}
      >
        <SiGnuprivacyguard className="fs-2" />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                sign in
              </Button>
              <Link top={"/signup"} href="/signup" variant="body2" className="mt-3">
              Not a User? Sign up
            </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
