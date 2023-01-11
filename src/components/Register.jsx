import React,{useState} from "react";
import api from "../helper/api";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  CardActions,
  Button,
} from "@mui/material";

function RegisterForm() {
  let navigate = useNavigate ()
  const initial = {
    userRegister: {
      fullName: "",
      username: "",
      password: "",
      email: "",
    },
    error: [],
  };
  const [registerValues, setRegisterValues] = useState(initial);
  const handleInputLoginField = (e) => {
    const { value, name } = e.target;
    const { userRegister } = registerValues;
    setRegisterValues({
      ...setRegisterValues,
      userRegister: { ...userRegister, [name]: value },
      error: [],
    });
  };
  const handleSubmit = async() => {
    const res = await api.register(registerValues.userRegister)
    navigate("/dashboard")
  };
  return (
    <Card sx={{ maxWidth: 600, margin: "auto", top: 50 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://cdn.wallpapersafari.com/67/24/CpzVIK.png"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Sign Up
          </Typography>
            <TextField
              id="filled-basic"
              label="full Name"
              name="fullName"
              variant="filled"
              onChange={(e) => handleInputLoginField(e)}
            />
          <br /><br />
            <TextField
              with="100"
              id="filled-basic"
              name="username"
              label="Username"
              variant="filled"
              onChange={(e) => handleInputLoginField(e)}
            />
          <br />
          <br />
            <TextField
              id="filled-basic"
              label="Email"
              name="email"
              variant="filled"
              onChange={(e) => handleInputLoginField(e)}
            />
          <br />
          <br />
            <TextField
              with="100"
              id="filled-basic"
              name="password"
              label="Password"
              variant="filled"
              onChange={(e) => handleInputLoginField(e)}
            />
          <CardActions style={{justifyContent: 'center'}} >
          <Button 
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </CardActions>
        </CardContent>

    </Card>
    
  );
}
export default RegisterForm;
