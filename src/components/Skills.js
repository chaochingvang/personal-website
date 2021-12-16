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

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#233",
        height: "100vh",
        width: "100vw",
        position: "fixed",
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
    },
}));

const skills = [
    {
        name: 'HTML5',
        icon: 'fdasfsad',
    },
    {
        name: 'HTML5',
        icon: 'fdasfsad',
    },
    {
        name: 'HTML5',
        icon: 'fdasfsad',
    },
    {
        name: 'HTML5',
        icon: 'fdasfsad',
    },
    {
        name: 'HTML5',
        icon: 'fdasfsad',
    },
    {
        name: 'HTML5',
        icon: 'fdasfsad',
    },
    {
        name: 'HTML5',
        icon: 'fdasfsad',
    },
    {
        name: 'HTML5',
        icon: 'fdasfsad',
    },
]


const Skills = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                SKILLS
            </Typography>
        </Box>
    );
};

export default Skills;
