// import './App.css';

// import Dashboard from './components/Dashboard';
// import Login from './components/Login';

// function App() {
//   return (
//     <div className="App">
//       <Dashboard/>
//       <Login/>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import "./App.css";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
// import RouteComponent from "./RouteComponent";
function App({routes}) {
  const router = useRoutes(routes.map((route) => {
    if (route.protected) {
      return { path: route.path, element: <ProtectedRoute>{route.element}</ProtectedRoute > }
    } else {
      return route
    }
  }));
  return (
    <div className="App">
      {router}
    </div>
  );
}
export default App;

