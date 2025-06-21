import React from "react";
import { TextField, Box, Checkbox, Button } from "@mui/material";
import { FaFacebookSquare } from "react-icons/fa";
import logo from "../../assets/dj.png";
import { FcGoogle } from "react-icons/fc";
const Signup = () => {
  return (
    <div className="bg-[#011450] min-h-screen flex justify-center items-center relative">
      <div className="absolute top-[5px]">
        <img
          src={logo}
          alt="logo"
          className="h-[190px] w-[190px] object-contain mx-auto"
        />
      </div>
      <div className="bg-white w-[35%] px-[60px] rounded-[6px] pt-30 pb-[20px]">
        <h1 className="font-bold text-3xl text-center font-serif">
          Sign Up in to <span className="text-[#041150]">Doctor Ji</span>
        </h1>
        <p className="text-center text-gray-500 font-serif mt-[12px]">
          Connect with the best professionals
        </p>
        <p className="text-gray-500 text-[13px] mt-[16px] ">First Name</p>
        <Box className=" mt-[8px]">
          <TextField
            id="outlined-basic"
            placeholder="First Name"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>
        <p className="text-gray-500 text-[13px] mt-[16px] ">Last Name</p>
        <Box className=" mt-[8px]">
          <TextField
            id="outlined-basic"
            placeholder="Last Name"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>

        <p className="text-gray-500 text-[13px] mt-[16px] ">E-Mail Address</p>
        <Box className=" mt-[8px]">
          <TextField
            id="outlined-basic"
            size="small"
            placeholder="Enter Email"
            fullWidth
            variant="outlined"
          />
        </Box>

        {/* <div className="flex gap-36 mt-[8px] items-center">
          <div className="flex justify-center items-center">
            <Checkbox size="small" />
            <p className="text-gray-500 text-[13px]"> Remember me</p>
          </div>
          <div>
            <p className="text-[13px] text-blue-600">
              <a href="">Forgot Password ?</a>
            </p>
          </div>
        </div> */}
        <Button
          variant="contained"
          size="large"
          sx={{ marginTop: "18px", backgroundColor: "#02B1F1" }}
          fullWidth
        >
          Sign In
        </Button>
        <div className="flex items-center justify-center gap-4 mt-5">
          <hr className="flex-grow border-gray-400" />
          <span className="text-gray-400 text-xs font-serif">OR</span>
          <hr className="flex-grow border-gray-400" />
        </div>
        <div className="flex justify-baseline items-center gap-[90px] border border-gray-200 py-[10px] px-[16px] rounded-[4px] mt-[18px]">
          <div>
            <FcGoogle size={25} />
          </div>
          <div>
            <p className="font-bold text-[13px]"> Continue with Google</p>
          </div>
        </div>

        <div className="flex justify-baseline gap-[90px] items-center border border-gray-200 py-[10px] px-[16px] rounded-[4px] mt-[18px]">
          <div>
            <FaFacebookSquare size={25} color="blue" />
          </div>
          <div>
            <p className="font-bold text-[13px]"> Continue with Facebook</p>
          </div>
        </div>

        <h1 className=" text-center mt-[18px] text-[14px] text-gray-400 font-serif">
          Already have account?{" "}
          <span>
            <a href="" className=" text-blue-600">
              Login
            </a>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Signup;
