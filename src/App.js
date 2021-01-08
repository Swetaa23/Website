import React from 'react';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import picture from './tempPic.jpeg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import './App.css';
import {MuiThemeProvider} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import Avenir from './fonts/AvenirLTStd-Medium.otf';


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#80cbc4',
            main: '#0097a7',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: blue[500],
            main: '#26c6da',
            dark: blue[500],
            contrastText: '#000',
        },
        info: {
            main: '#80cbc4',
        },
    },
    typography: {
        subtitle1: {
            fontSize: 12,
        },
        h1: {
            fontSize: '3rem',
            '@media (min-width:300px)': {
                fontSize: '3rem',
            },
            '@media (min-width:600px)': {
                fontSize: '5rem',
            },
            '@media (min-width:900px)': {
                fontSize: '4rem',
            },
            '@media (min-width:1200px)': {
                fontSize: '5rem',
            },
            fontWeight: 300,
            fontFamily: "Avenir",
        },
        h3: {
            fontSize: '1rem',
            '@media (min-width:300px)': {
                fontSize: '1rem',
            },
            '@media (min-width:600px)': {
                fontSize: '2rem',
            },
            '@media (min-width:900px)': {
                fontSize: '2rem',
            },
            '@media (min-width:1200px)': {
                fontSize: '3rem',
            },
            fontWeight: 100,
            fontFamily: "Avenir",
        },
        h4: {
            fontFamily: 'Avenir',
        },
        h5: {
            fontSize: 20,
            fontFamily: 'Avenir',
        },
        h6: {
            fontFamily: 'Avenir',
        },

        button: {
            fontStyle: 'italic',
        },
        spacing: 8,
    },
});


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${picture})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    }
}));

export default function App() {
    const classes = useStyles(theme);

    return (
        <MuiThemeProvider theme={theme}>

            <Grid container component="main" className={classes.root}>
                <Grid item xs={12} sm={12} md={6} className={classes.image}
                      container
                      direction="row"
                      justify="center"
                      alignItems="flex-end">
                    <Grid item>
                        <Typography
                            className="name"
                            variant="h1"
                            fontWeight="100"
                        >
                            Swetaa Suresh
                        </Typography>
                    </Grid>
                    <Grid item xs={12}/>
                    <Grid item>
                        <Typography
                            className="name"
                            variant="h3"
                            fontWeight="100"
                            color='primaryLight'
                        >
                            Manifesting my Dreams
                        </Typography>
                    </Grid>
                    <Grid item xs={12}/>
                    <Grid item xs={12}/>
                    <Grid item xs={12}/>
                    <Grid item xs={12}/>
                    <Grid item xs={12}/>
                    <Grid item xs={12}/>
                    <Grid item xs={12}/>
                    <Grid item xs={12}/>
                    <Grid item xs={12}/>
                    <Grid item xs={12}/>
                    <Grid item xs={12}/>
                    <Grid item xs={12}/>
                    <Grid item xs={12}/>
                    <Grid item xs={12}/>
                    <Grid item xs={12}/>
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly">
                        <Link href="https://github.com/Swetaa23" target="_blank">
                            <GitHubIcon fontSize={"large"} style={{color: "white"}}/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/swetaasuresh/">
                            <LinkedInIcon fontSize={"large"} style={{color: "white"}}/>
                        </Link>
                        <Link href="mailto:swetaa232002@gmail.com">
                            <EmailIcon fontSize={"large"} style={{color: "white"}}/>
                        </Link>
                    </Grid>
                    <Grid item xs={12}/>

                </Grid>
                <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Grid container direction="column">
                            <Grid item xs>
                                <Typography variant="h3" align='center' color="primary">
                                    About Me
                                </Typography>
                                <Typography align='center' >
                                    I am a Management Engineering Student at the University of Waterloo.
                                    I am an avid programmer who enjoys coding and solving problems.
                                    Outside of school, I love to play badminton, make robots, and go on adventures.
                                </Typography>

                                <Typography variant="h4" color="primary">
                                    Side Projects
                                </Typography>

                                <Typography variant="h5" color="secondary">
                                    {"LED Music Visualizer"}
                                </Typography>

                                <Typography variant="h6">
                                    Arduino
                                </Typography>
                                <Typography>
                                    <ul>
                                        <li>Programmed LED strip to change colours based on volume of music</li>
                                        <li>Utilized sound detector module in order to send volume as input into the
                                            Arduino
                                        </li>
                                    </ul>
                                </Typography>
                                <Grid item xs={12}/>
                                
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" color="secondary">
                                    Code Breaker
                                </Typography>
                                <Typography variant="h6">
                                    Java
                                </Typography>
                                <ul>
                                    <li>Command line puzzle game built using Java and object-oriented programming</li>
                                </ul>
                            </Grid>
                        </Grid>


                        <Box mt={5}>

                        </Box>
                    </div>
                </Grid>

            </Grid>
        </MuiThemeProvider>
    );
}