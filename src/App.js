import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Navbar, Home, About, Portfolio, Contact } from "./components";
function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
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

                <footer>&copy;Elias Peteri 2021</footer>
            </>
        </ThemeProvider>
    );
}
export default App;
