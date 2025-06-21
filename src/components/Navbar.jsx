import React from "react";
const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-6 text-base text-white">
        <li>
          <a href="#" className="hover:text-blue-500 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition">
            Service
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition">
            Doctor
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Menu, MenuItem } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <nav>
//       <ul className="flex justify-center items-center gap-6 text-base text-white">
//         <li>
//           <a href="#" className="hover:text-blue-500 transition">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-blue-500 transition">
//             About
//           </a>
//         </li>

//         {/* Services Dropdown */}
//         <li>
//           <button
//             onClick={handleClick}
//             className="flex items-center hover:text-blue-500 transition focus:outline-none"
//           >
//             Services
//             <ArrowDropDownIcon className="text-white group-hover:text-blue-500" />
//           </button>
//           <Menu
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//             anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//             transformOrigin={{ vertical: "top", horizontal: "left" }}
//             MenuListProps={{
//               className: "py-0",
//             }}
//             PaperProps={{
//               className: "bg-white",
//               sx: {
//                 mt: 1,
//               },
//             }}
//           >
//             <MenuItem onClick={handleClose}>Dental</MenuItem>
//             <MenuItem onClick={handleClose}>Cardiology</MenuItem>
//             <MenuItem onClick={handleClose}>Pediatrics</MenuItem>
//           </Menu>
//         </li>

//         <li>
//           <a href="#" className="hover:text-blue-500 transition">
//             Doctor
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-blue-500 transition">
//             Contact
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
