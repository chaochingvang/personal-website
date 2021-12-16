import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  body2: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Current
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Full Stack Software Engineering Student
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Prime Digital Academy - Minneapolis, MN
          </Typography>
          <Typography variant="body2" align="center" className={classes.body2}>
            August 2021 - January 2022
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <ul>
              <li>Solo Project: Fishing For One</li>
              <ul>
                <li>
                  Scoped, designed and developed a full CRUD Single Page Application (SPA) intended to improve the fishing experience of users. The project starting from the initial scope to the completed project presentation was a two week sprint.
                </li>
                <li>
                  The application functions as an informational guide on local fish types and common fishing lures and provides recommendations to enhance the user's fishing experience. FishingForOne also serves as a journal where users can record their own personal entries that will populate the application's database and increase its recommendation accuracy
                </li>
                <li>
                  Technologies used: Javascript, React, Node.js, Redux, Redux Saga, PostgreSQL, HTML, CSS, Express.js, Passport.js, Filestack API, etc.
                </li>
              </ul>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            html & css
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            company name where worked
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
            repudiandae, rerum necessitatibus nisi mollitia.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Fullstack Javascript
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            company name where worked
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
            repudiandae, rerum necessitatibus nisi mollitia.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Django & React
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            company name where worked
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
            repudiandae, rerum necessitatibus nisi mollitia.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Django & React
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            company name where worked
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
            repudiandae, rerum necessitatibus nisi mollitia.
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Django & React
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            company name where worked
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
            repudiandae, rerum necessitatibus nisi mollitia.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
