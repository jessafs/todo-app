import React,{useState} from "react";
import api from "../helper/api";
import { useNavigate, Link } from "react-router-dom";
// import TestComp from "./TestComp";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  CardActions,
  Button,
} from "@mui/material";
// import { useDispatch } from "react-redux";
// import { login } from "../features/userSlice";

export default function Login() {
  let navigate = useNavigate();
  const initial = { password: "", username: "" };
  const [loginValues, setLoginValues] = useState(initial);
  const handleInputLoginField = (e) => {
    const { value, name } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleSubmit = async () => {
    const { username, password } = loginValues
    if (username && password) {
      const res = await api.login(loginValues);
      if (res.status === 'failed') {
        alert(res.msg)
      } else {
        //set global values 
        localStorage.setItem("token", res.response.token)
        // dispatch(login({ loginValues }))
        navigate("/dashboard");
      }
    } else {
      alert('All fields are required')
    }
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", top: 50 }}>
      <CardMedia
        component="img"
        height="250"
        image="https://cdn.wallpapersafari.com/67/24/CpzVIK.png"
      />
      <CardContent>
        {/* <TestComp msg={'hello tst'}/> */}
        <Typography variant="h5" component="div">
          Login
        </Typography>
        <TextField
          id="filled-basic"
          label="Username"
          name="username"
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
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </CardActions>
        <Typography>
          <Link to='/register'>
            Doesn't have an account? Sign up

          </Link>
        </Typography>

      </CardContent>
    </Card>
  );
}
