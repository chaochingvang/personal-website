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
import {Container} from '@mui/material'
import Typography from "@mui/material/Typography";
import { Icon } from '@iconify/react';
import html5 from '@iconify/icons-logos/html-5';
import css3 from '@iconify/icons-logos/css-3';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import jqueryIcon from '@iconify/icons-logos/jquery';
import gitIcon from '@iconify/icons-logos/git-icon';
import reduxIcon from '@iconify/icons-logos/redux';
import reduxSaga from '@iconify/icons-logos/redux-saga';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import githubIcon from '@iconify/icons-logos/github-icon';
import herokuIcon from '@iconify/icons-logos/heroku-icon';
import materialUi from '@iconify/icons-logos/material-ui';
import npmIcon from '@iconify/icons-logos/npm';
import visualStudioCode from '@iconify/icons-logos/visual-studio-code';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#233",
        height: "100vh",
        width: "100vw",
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
    },
    iconsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        textAlign: 'center', 
        margin: 'auto', 
        justifyContent: 'center', 
        border: '1px solid black',
        minWidth: 'sm',
        width: '80%'
    },
    cards: {
        margin: '2em',
        minWidth: '5%',
        maxWidth: '10%',
    },
}));

const skills = [
    {
        name: 'HTML5',
        icon: <Icon icon={html5} width="100%"/>
    },
    {
        name: 'CSS3',
        icon: <Icon icon={css3} width="100%" height="100%" />
    },
    {
        name: 'HTML5',
        icon: <Icon icon={javascriptIcon} width="100%" height="100%" />
    },
    {
        name: 'HTML5',
        icon: <Icon icon={html5} width="100%" height="100%" />
    },
    {
        name: 'HTML5',
        icon: <Icon icon={html5} width="100%" height="100%" />
    },
    {
        name: 'HTML5',
        icon: <Icon icon={html5} width="100%" height="100%" />
    },
    {
        name: 'HTML5',
        icon: <Icon icon={html5} width="100%" height="100%" />
    },
    {
        name: 'HTML5',
        icon: <Icon icon={html5} width="100%" height="100%" />
    },
]


const Skills = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                SKILLS
            </Typography>
            <Box className={classes.iconsContainer}>
                {skills.map(skill => (
                    <Card className={classes.cards}>
                        <CardContent>
                            {skill.icon}<br/>
                        </CardContent>
                        <CardContent sx={{margin: 0, padding: 0, border: '1px solid black'}}>
                            {skill.name}
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>

    );
};

export default Skills;
