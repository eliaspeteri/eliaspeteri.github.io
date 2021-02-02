import { StyledContact } from "./Contact.styled";
const Contact = () => {
    return (
        <StyledContact>
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
                <a href="https://www.linkedin.com/in/eliaspeter">
                    LinkedIn (click me too!)
                </a>
                <br />
                Mobile: +358 050 435 7946 <br />
                Location: Tampere area, Finland
                <p>
                    For employers: inquire for CV or further details through my
                    email.
                </p>
            </p>
        </StyledContact>
    );
};
export default Contact;
