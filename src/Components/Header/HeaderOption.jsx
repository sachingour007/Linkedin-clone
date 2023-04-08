import { Avatar } from "@mui/material";
import React from "react";
import styles from "./HeaderOption.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const HeaderOption = ({ avatar, title, Icon, onClick,  }) => {
  const user = useSelector(selectUser);
  // console.log(user);

  return (
    <div onClick={onClick} className={styles.headerOption}>
      {Icon && <Icon className={styles.headerOption_icon} />}
      {avatar && (
        <Avatar className={`${styles.headerOption_icon}`}>{user?.email[0]}</Avatar>
      )}
      <h3 className={`${styles.headerOption_title}`}>{title}</h3>
    </div>
  );
};

export default HeaderOption;
