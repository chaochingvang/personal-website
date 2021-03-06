import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typed from "react-typed";
import makeStyles from '@mui/styles/makeStyles';
import avatar from "../chaoching.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    margin: theme.spacing(5),
  },
  title: {
    color: "#dedede",
  },
  subtitle: {
    color: "#c2c2c2",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justifyContent="center">
        <Avatar className={classes.avatar} src={avatar} alt="Chaoching Vang" />
      </Grid>
      <Typography className={classes.title} variant="h3">
        <Typed strings={["CHAOCHING VANG"]} typeSpeed={80} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Fullstack Software Developer",
            "Frontend Developer",
            "Backend Developer",
            "Problem Solver",
            "Youth Worker",
            "Hmong",
          ]}
          // the higher the typeSpeed the slower it types
          typeSpeed={80}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
