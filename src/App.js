import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Navbar, Home, Portfolio, Contact } from "./components";
function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Router>
                    <Navbar />
                    <Switch>
                        {/* <Route path="/about">
                            <About />
                        </Route> */}
                        <Route path="/portfolio">
                            <Portfolio />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>

                <footer>
                    <em>Built with</em> ❤ <em>using</em> ⚛{" "}
                    <em>by Elias Peteri in the year 2021</em>
                </footer>
            </>
        </ThemeProvider>
    );
}
export default App;
