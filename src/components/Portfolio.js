import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material"

import { Icon } from '@iconify/react';
import CloseIcon from '@mui/icons-material/Close';
import githubIcon from '@iconify/icons-logos/github-icon';


import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";


const CardPopUp = ({ project, openStatus, handleDialogClose }) => {
  return (
    <Dialog onClose={handleDialogClose} open={openStatus} fullWidth={true}>
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}><Typography variant="h4">{project.name}</Typography></Box>
          <Box>
            <IconButton onClick={handleDialogClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        {project.name}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleDialogClose()}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#dedede",
    minHeight: "100vh",
    padding: "2em",
    margin: "auto"
  },
  cardContainer: {
    margin: "3rem auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  githubLinkContainer: {
    backgroundColor: "transparent",
    border: "solid black 1px",
  },
  githubLink: {
    padding: "1em"
  }
}));

const gitHubProfile = "https://github.com/chaochingvang";

const projects = [
  {
    name: "Fishing For One",
    description: `The application functions as an informational guide on local fish types and common fishing lures and provides recommendations to enhance the user's fishing experience. FishingForOne also serves as a journal where users can record their own personal entries that will populate the application's database and increase its recommendation accuracy.`,
    image: project1,
    repoLink: "https://github.com/chaochingvang/Fishing-For-One",
    siteLink: "https://fishingforone.herokuapp.com/",
  },
  {
    name: "LYSTR",
    description: `This project was a client pro bono project that was completed in a group of 4 developers. The platform is designed to connect owners of recreational vehicles to interested renters. Owners can list out their recreational vehicles and renters can search by location and date availability for vehicles they may be interested in renting.`,
    image: project4,
    repoLink: "https://github.com/chaochingvang/lystr",
    siteLink: "https://lystrprime.herokuapp.com/#/home",
  },
  {
    name: "Pet Hotel",
    description: `This group project started with the objective of learning a whole new language and implementing it into a CRUD application. Project duration was a one week sprint starting with learning about C# classes and objects to implementing the C# restful APIs. This project is a combination of both Javascript w/ React for the front-end and C# for the back-end. `,
    image: project2,
    repoLink: "https://github.com/chaochingvang/Pet-Hotel",
    siteLink: "",
  },
  {
    name: "To Do List",
    description: `This project was created using javascript with the jQuery library. This app serves as a to-do-list where user can enter in their task and set a due date for each respective task. Upon completing the task, the user can mark the task completed and thestatus of the task will be updated on the DOM. All tasks and completion status are saved locally in a postgreSQL database.`,
    image: project3,
    repoLink: "https://github.com/chaochingvang/To-Do-List-Application",
    siteLink: "",
  },
];

function Portfolio() {
  const classes = useStyles();

  const [openStatus, setOpenStatus] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState({});

  const handleDialogOpen = (project) => {
    setSelectedProject(project);
    setOpenStatus(true);
  }

  const handleDialogClose = () => {
    setOpenStatus(false);
  }

  return (<>
    <Box component="div" className={classes.mainContainer}>
      <Grid container justifyContent="center">
        <Grid item textAlign="center">
          <Card className={classes.githubLinkContainer}>
            <CardActionArea className={classes.githubLink} onClick={() => window.open(gitHubProfile)}>
              <Icon icon={githubIcon} height='8vh' />
            <Typography variant="h6">
              View GitHub Porfolio
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      {/* grid default column size is 12 */}
      <Grid container spacing={4} justifyContent="center" alignItems={"stretch"}>
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i} sx={{display: 'flex'}}>
            <Card className={classes.cardContainer}>
              <CardActionArea onClick={() => handleDialogOpen(project)}>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="200"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Box flexGrow={1} textAlign="left">
                  <Button size="small" color="primary" onClick={() => window.open(project.repoLink)}>
                    View code on GitHub
                  </Button>
                </Box>
                {/* Only show Live Demo button if there is a site link for project */}
                {project.siteLink !== ""
                  ? <Button size="small" color="primary" onClick={() => window.open(project.siteLink)}>
                    Live Demo
                  </Button>
                  : ""}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    <CardPopUp project={selectedProject} openStatus={openStatus} handleDialogClose={handleDialogClose} />
  </>);
};

export default Portfolio;
