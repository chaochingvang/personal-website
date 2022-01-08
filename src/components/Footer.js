import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#c2c2c2",
      "&:hover": {
        fill: "#dedede",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<LinkedInIcon />} className={classes.root}
        onClick={() => window.open("https://www.linkedin.com/in/chaochingvang/")} />
      <BottomNavigationAction icon={<GitHubIcon />} className={classes.root}
        onClick={() => window.open("https://github.com/chaochingvang")} />
      {/* <BottomNavigationAction icon={<Instagram />} className={classes.root} /> */}
    </BottomNavigation>
  );
};
export default Footer;
