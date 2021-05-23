import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
// eslint-disable-next-line object-curly-newline
import {
  About,
  Blogs,
  Contact,
  Footer,
  Home,
  Navbar,
  Resume,
  Portfolio,
} from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </>
    </ThemeProvider>
  );
}
export default App;
