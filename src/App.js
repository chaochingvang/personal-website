import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

import "./App.css";
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {

  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route exact path="/personal-website">
              <Redirect to="/" />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/skills">
              <Skills/>
            </Route>
            {/* <Route exact path="/contact">
              <Contact />
            </Route> */}
          </Switch>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Fragment>
  );
}

export default App;
