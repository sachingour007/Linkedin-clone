import React from "react";

//Components
import "./Header.css";
import HeaderOption from "./HeaderOption";

//Icons
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { auth } from "../firebase";

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
    console.log("i am log out");
  }

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://img.freepik.com/free-icon/linkedin_318-183415.jpg"
          alt="Logo_Img"
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Newtork" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="messaging" Icon={MessageIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption
          title="Me"
          avatar="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
};

export default Header;
