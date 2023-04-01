import React from "react";
import sidebarCss from "./Sidebar.module.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser} from '../../features/userSlice'

const Sidebar = () => {
  const user = useSelector(selectUser);
  console.log(user);

  const recentItem = (topic) => {
    return (
      <div className={sidebarCss.sidebar_recentItem}>
        <span className={sidebarCss.sidebar_hash}>#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className={sidebarCss.sidebar}>
      <div className={sidebarCss.sidebar_top}>
        <img
          src="https://marketplace.canva.com/EAFFI2trtnE/1/0/1600w/canva-black-minimalist-motivation-quote-linkedin-banner-cqVV-6-1kOk.jpg"
          alt=""
        />
        <Avatar className={sidebarCss.sidebar_avatar} 
          src={user.photoURL}
        >{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className={sidebarCss.sidebar_stats}>
        <div className={sidebarCss.sidebar_stat}>
          <p>Connections</p>
          <p className={sidebarCss.sidebar_statNumber}>2,543</p>
        </div>
        <div className={sidebarCss.sidebar_stat}>
          <p>Who's viewed your profile</p>
          <p className={sidebarCss.sidebar_statNumber}>2,448</p>
        </div>
      </div>
      <div className={sidebarCss.sidebar_button}>
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("dsa")}
        {recentItem("softwaredevelopment")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
