import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Link,
  Grid,
} from "@mui/material";
import axios from "axios";
import { SiGnuprivacyguard } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const nav = useNavigate();
  const notify = () => toast("signup successfully..!");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setName('')
    setEmail('')                      
    setNumber('')
    setPassword('')

    if (password !== confirmPassword) {
      alert("Passwords you enter do not match");
      return;
    }
    try {
      const response = await axios.post(
        "https://670e4b65073307b4ee464347.mockapi.io/adminUser",
        { name,email,number,password }
      );
      alert("Signup successful!");
      nav("/login")
    } catch (error) {
      alert("Signup failed. Try again.");
      console.error("Error:", error);
    }
  };

  return (
    <Container maxWidth="xs" className="form-page text-center">
      <SiGnuprivacyguard className="fs-2" />
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="text"
          autoComplete="text"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="number"
          label="Phone-Number"
          name="number"
          autoComplete="number"
          autoFocus
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary" onClick={notify}>
          Sign Up
        </Button>
        <Grid container>
          <Grid item>
            <Link top={"/login"} href="/login" variant="body2" className="mt-3">
              Already have an account? Login
            </Link>
          </Grid>
        </Grid>
        {message && (
          <Typography variant="body2" color="error">
            {message}
          </Typography>
        )}
      </form>
      <ToastContainer/>
    </Container>
  );
};

export default Signup;
