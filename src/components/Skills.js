import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Icon } from '@iconify/react';
import html5 from '@iconify/icons-logos/html-5';
import css3 from '@iconify/icons-logos/css-3';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import jqueryFill from '@iconify/icons-akar-icons/jquery-fill';
import gitIcon from '@iconify/icons-logos/git-icon';
import reduxIcon from '@iconify/icons-logos/redux';
import reduxSaga from '@iconify/icons-logos/redux-saga';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import githubIcon from '@iconify/icons-logos/github-icon';
import herokuIcon from '@iconify/icons-logos/heroku-icon';
import materialUi from '@iconify/icons-logos/material-ui';
import visualStudioCode from '@iconify/icons-logos/visual-studio-code';



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#233",
        minHeight: "100vh",
        padding: "1em"
    },
    heading: {
        color: "tomato",
        padding: "1em",
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
        width: '70%'
    },
}));

const imageHeight = '8vh'

const skills = [
    {
        name: 'HTML5',
        icon: <Icon icon={html5} height={imageHeight} />
    },
    {
        name: 'CSS3',
        icon: <Icon icon={css3} height={imageHeight} />
    },
    {
        name: 'Javascript',
        icon: <Icon icon={javascriptIcon} height={imageHeight} />
    },
    {
        name: 'React',
        icon: <Icon icon={reactIcon} height={imageHeight} />
    },
    {
        name: 'Node.js',
        icon: <Icon icon={nodejsIcon} height={imageHeight} />
    },
    {
        name: 'jQuery',
        icon: <Icon icon={jqueryFill} height={imageHeight} color="#0769ad" />
    },
    {
        name: 'Git',
        icon: <Icon icon={gitIcon} height={imageHeight} />
    },
    {
        name: 'Redux',
        icon: <Icon icon={reduxIcon} height={imageHeight} />
    },
    {
        name: 'Redux Saga',
        icon: <Icon icon={reduxSaga} height={imageHeight} />
    },
    {
        name: 'postgreSQL',
        icon: <Icon icon={postgresqlIcon} height={imageHeight} />
    },
    {
        name: 'Github',
        icon: <Icon icon={githubIcon} height={imageHeight} />
    },
    {
        name: 'Heroku',
        icon: <Icon icon={herokuIcon} height={imageHeight} />
    },
    {
        name: 'Material UI',
        icon: <Icon icon={materialUi} height={imageHeight} />
    },
    {
        name: 'Visual Studio Code',
        icon: <Icon icon={visualStudioCode} height={imageHeight} />
    },
]

const Skills = () => {
    const classes = useStyles();
    return (<>
        <Box component="div" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                SKILLS
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{justifyContent: "center"}}>
                    {skills.map((skill, index) => (
                        <Grid item xs={2} sm={2} md={2} key={index} sx={{ textAlign: "center", padding: "1em"}}>
                            <Box sx={{backgroundColor: "transparent"}}>
                                    {skill.icon}<br />
                                    <Typography variant="h6">{skill.name}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    </>);
};

export default Skills;
