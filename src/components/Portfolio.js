import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    minHeight: "100vh",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  sameHeight: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }
}));

const projects = [
  {
    name: "Fishing For One",
    description: `The application functions as an informational guide on local fish types and common fishing lures and provides recommendations to enhance the user's fishing experience. FishingForOne also serves as a journal where users can record their own personal entries that will populate the application's database and increase its recommendation accuracy`,
    image: project1,
  },
  {
    name: "Pet Hotel",
    description: `This group project started with the objective of learning a whole new language and implementing it into a CRUD application. Project duration was a one week sprint starting from learning about C# classes and objects to implementing the C# restful APIs. This project is a combination of both Javascript w/ React for the front-end and C# for the back-end. `,
    image: project2,
  },
  {
    name: "To Do List",
    description: `This project was created using javascript with the jQuery library. This app serves as a to-do-list where user can enter in their task and set a due date for each respective task. Upon completing the task, the user can mark the task completed and thestatus of the task will be updated on the DOM. All tasks and completion status are saved locally in a postgreSQL database.`,
    image: project3,
  },
  {
    name: "LYSTR",
    description: `Currently scoping and designing wireframes for a client pro bono project. The platform is designed to connect owners of recreational vehicles to interested renters. Owners can list out their recreational vehicles and renters can search by location and date availability for vehicles they may be interested in renting. `,
    image: project4,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justifyContent="center" alignItems={"stretch"}>
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
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
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
