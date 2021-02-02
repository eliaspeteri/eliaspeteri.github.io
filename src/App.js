import React, { useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu, Navbar, About, Portfolio, Contact } from "./components";
import Focuslock from "react-focus-lock";
function App() {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [portfolioOpen, setPortfolioOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [greetingOpen, setGreetingOpen] = useState(true);
    const node = useRef();
    const menuId = "main-menu";

    const handleHomeVisibility = () => {
        setAboutOpen(false);
        setPortfolioOpen(false);
        setContactOpen(false);
        setGreetingOpen(true);
    };
    const handleAboutVisibility = () => {
        if (aboutOpen) {
            setAboutOpen(false);
            setGreetingOpen(true);
        } else {
            setContactOpen(false);
            setPortfolioOpen(false);
            setAboutOpen(true);
            setGreetingOpen(false);
        }
    };
    const handleContactVisibility = () => {
        if (contactOpen) {
            setContactOpen(false);
            setGreetingOpen(true);
        } else {
            setAboutOpen(false);
            setPortfolioOpen(false);
            setContactOpen(true);
            setGreetingOpen(false);
        }
    };

    const handlePortfolioVisibility = () => {
        if (portfolioOpen) {
            setGreetingOpen(true);
            setPortfolioOpen(false);
        } else {
            setAboutOpen(false);
            setContactOpen(false);
            setGreetingOpen(false);
            setPortfolioOpen(true);
        }
    };

    useOnClickOutside(node, () => setBurgerOpen(false));
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Navbar
                    home={handleHomeVisibility}
                    about={handleAboutVisibility}
                    portfolio={handlePortfolioVisibility}
                    contact={handleContactVisibility}
                />
                {window.screen.availWidth <= theme.mobileInt ? (
                    <div ref={node}>
                        <Focuslock disabled={!burgerOpen}>
                            <Burger
                                open={burgerOpen}
                                setOpen={setBurgerOpen}
                                aria-controls={menuId}
                            />
                            <Menu
                                open={burgerOpen}
                                home={handleHomeVisibility}
                                about={handleAboutVisibility}
                                portfolio={handlePortfolioVisibility}
                                contact={handleContactVisibility}
                                setOpen={setBurgerOpen}
                                id={menuId}
                            />
                        </Focuslock>
                    </div>
                ) : null}

                {greetingOpen ? <h1>Hello.</h1> : null}
                {aboutOpen ? <About /> : null}
                {portfolioOpen ? <Portfolio /> : null}
                {contactOpen ? <Contact /> : null}
                <footer>&copy;Elias Peteri 2021</footer>
            </>
        </ThemeProvider>
    );
}

export default App;
