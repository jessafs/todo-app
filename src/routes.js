import React from "react";
import Login from "./components/Login";
import Register from "./components/Register"
import Dashboard from "./components/Dashboard";
const routes = [
    {path:'/',element:<Login/>},
    {path:'/register',element:<Register/>},
    {path:'/dashboard',element:<Dashboard/>},
]

export default routes;