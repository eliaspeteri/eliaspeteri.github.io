import { StyledContact } from "./Contact.styled";
const Contact = () => {
    return (
        <StyledContact>
            <div class="grid-container">
                {/* <div class="grid-item">
                    <img src="./portrait.png" alt="portrait"></img>
                </div> */}
                <div class="grid-item">
                    <h2>Contact information</h2>
                    <p>
                        <a href="mailto:elias.peteri@tuni.fi">
                            email: elias.peteri@tuni.fi
                        </a>
                        <br />
                        <a href="https://www.github.com/eliaspeteri">
                            GitHub (click me!)
                        </a>
                        <br />
                        <a href="https://www.linkedin.com/in/eliaspeteri">
                            LinkedIn (click me too!)
                        </a>
                        <br />
                        Location: Tampere area, Finland
                        <p>
                            For employers: inquire for CV or further details
                            through my email.
                        </p>
                    </p>
                </div>
            </div>
        </StyledContact>
    );
};
export default Contact;
