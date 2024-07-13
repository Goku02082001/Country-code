import React from "react";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Favourite } from "../Pages/Favourite";
import { PrivateRoute } from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/favorite"
        element={
          <PrivateRoute>
            <Favourite />
          </PrivateRoute>
        }
      ></Route>
      
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};

export { AllRoutes };
