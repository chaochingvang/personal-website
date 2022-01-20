import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#dedede",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #222",
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
    borderBottom: "2px solid #222",
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
      borderColor: "#222 #3c3c3c transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#222",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #222 #3c3c3c",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "#3c3c3c",
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
    color: "#222",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#222",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "#222",
  },
  body2: {
    color: "#222",
  },
  subtitle1: {
    color: "#222",
  },
}));


//// JOB POSITION FORMAT ////
/* 
<Box component="div" className={classes.timeLineItem}>
  <Typography variant="h5" align="center" className={classes.subHeading}>
    JOB POSITION TITLE
  </Typography>
  <Typography variant="body1" align="center" className={classes.body1}>
    LOCATION
  </Typography>
  <Typography variant="body2" align="center" className={classes.body2}>
    DATE
  </Typography>
  <Typography variant="subtitle1" align="left" className={classes.subtitle1}>
    <ul>
      <li>JOB DETAILS GOES HERE</li>
    </ul>
  </Typography>
</Box> 
*/

//// YEAR FORMAT ////
/* 
<Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
    YEAR GOES HERE
  </Typography> 
*/



const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>


        <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >
          Current
        </Typography>


        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" align="center" className={classes.subHeading}>
            Full Stack Software Engineering Student
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Prime Digital Academy - Minneapolis, MN
          </Typography>
          <Typography variant="body2" align="center" className={classes.body2}>
            August 2021 - January 2022
          </Typography> 
          <Typography variant="subtitle1" align="left" className={classes.subtitle1}>
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
              <li>Group Project: Lystr</li>
              <ul>
                <li>
                  Worked together in a team of 4 to scope, design and develop a full CRUD Single Page Application (SPA) for a client as a pro bono project.
                </li>
                <li>
                  The application is designed to connect owners of recreational vehicles to interested renters. Owners can list out their recreational vehicles and renters can search by location and date availability for vehicles they may be interested in renting.
                </li>
                <li>
                  Technologies used: Javascript, React, Node.js, Redux, Redux Saga, PostgreSQL, HTML, CSS, Express.js, Passport.js, Amazon Simple Storage Service (AWS S3) API, OpenCage Geocoding API, Leaflet.js, etc.
                </li>
              </ul>
            </ul>
          </Typography>
        </Box>

        
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>

        
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Research Professional
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            SoLaHmo - Saint Paul, MN
          </Typography>
          <Typography variant="body2" align="center" className={classes.body2}>
            September 2018 - March 2021
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <ul>
              <li>SoLaHmo is a nationally-funded clinical Community Based Participatory Action Research (CBPAR) project designed at improving the healthcare of low-income Hmong-speaking and Spanish-speaking patients with high blood pressure</li>
              <li>Translated research materials from English into Hmong ensuring accuracy and contextual relevance to the Hmong community</li>
              <li>Evaluated and assessed the eligibility of patients using clinical data pulls</li>
              <li>Arranged clinic visits for patients to perform preliminary screening to ensure eligibility for research study</li>
              <li>Recruited patients for research study by phone using Hmong and English accordingly to patients' preference</li>
              <li>Enrolled patients in person adhering to research protocols and guidelines</li>
              <li>Administered research study surveys in Hmong and English</li>
              <li>Troubleshot patients' study devices upon discovery of issues or communication from patient</li>
              <li>Validated research team in protocol training and patient enrollment processes</li >
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
          <Typography variant="h5" align="center" className={classes.subHeading}>
            Research Consultant
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Metropolitan Council of the Twin Cities - Greater Minneapolis-St.Paul Area
          </Typography>
          <Typography variant="body2" align="center" className={classes.body2}>
            October 2019 - June 2020
          </Typography>
          <Typography variant="subtitle1" align="left" className={classes.subtitle1}>
            <ul>
              <li>Participated as a consultant with the Metropolitan Council's Youth and Parks research team to discover findings about the accessibility and experiences of young people in the neighboring county parks</li>
              <li>Assisted in planning, programming, leading, and documenting field notes for Boy Scout Troop 100 in a Youth Park Research Day</li>
              <li>Moderated field activities with a group of 30 young scouts about the experiences of young people at the parks</li>
              <li>Facilitated debrief meetings to consult about preliminary findings with Troop 100</li>
            </ul>
          </Typography>
        </Box> 


        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" align="center" className={classes.subHeading}>
            Research Professional
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            University of Minnesota Medical School - Minneapolis, MN
          </Typography>
          <Typography variant="body2" align="center" className={classes.body2}>
            October 2017 - January 2020
          </Typography>
          <Typography variant="subtitle1" align="left" className={classes.subtitle1}>
            <ul>
              <li>Led the recruitment and retention process of study participants for a nationally-funded research study called Family Matters</li>
              <li>Administered research surveys and collected physiological measures from study participants aged 5-11</li>
              <li>Participated in data collection for research, including recruitment, survey research, and in-home data collection</li>
              <li>Recruited participants for research study, including recruiting by phone and in-person</li>
              <li>Developed, reviewed and updated research study protocols and reports using the REDCap database</li>
              <li>Managed the tracking of longitudinal participants throughout a period of 30 months</li>
              <li>Delegated recruitment and retention tasks to team members</li>
              <li>Trained new research team members on study protocols and practices</li>
              <li>Oversaw the process of contacting hard-to-reach research participants to ensure high study retention</li>
              <li>Reviewed and translated study documents and materials from English to Hmong, ensuring materials are accurate and culturally appropriate</li>
            </ul>
          </Typography>
        </Box> 

      </Box>
    </Box>
  );
};

export default Resume;
