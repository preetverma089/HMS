import React from "react";
import logo from "../assets/dj.png";
import Navbar from "./Navbar";
import { Button, Box } from "@mui/material";

const Headers = () => {
  return (
    <div className="flex justify-between items-center px-8 h-[70px] bg-[#011450]">
      {/* Logo Section */}
      <div className="flex items-center h-full">
        <img
          src={logo}
          alt="Logo"
          className="w-[140px] object-cover pt-[10px]"
        />
      </div>

      {/* Navbar Section */}
      <div className="flex items-center h-full">
        <Navbar />
      </div>

      {/* Button Section */}
      <Box display="flex" alignItems="center" gap={2} height="100%">
        <Button variant="contained" color="info">
          Login
        </Button>
        <Button variant="contained" color="primary">
          SignUp
        </Button>
      </Box>
    </div>
  );
};

export default Headers;
