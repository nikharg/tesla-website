import React from "react";
import "./Header.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import teslaLogo from "../tesla-motors-logo-svgrepo-com.svg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div className="navbar">
      <div className="left">
        <img src={teslaLogo} alt="tesla-logo" />
      </div>
      <div className="middle">
        <motion.div
          className="nav-items"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Vehicles
        </motion.div>
        <motion.div
          className="nav-items"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Charging
        </motion.div>
        <motion.div
          className="nav-items"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Discover
        </motion.div>
      </div>
      <div className="right">
        <HelpOutlineOutlinedIcon />
        <LanguageOutlinedIcon />
        <AccountCircleOutlinedIcon />
      </div>
    </motion.div>
  );
};

export default Header;
