import { StyledContact } from "./Contact.styled";
import portrait from "../../resources/img/portrait.png";
const Contact = () => {
    return (
        <StyledContact data-testid="contactComponent">
            <div className="grid-container">
                <div className="grid-item">
                    <img src={portrait} alt="portrait"></img>
                </div>
                <div className="grid-item" style={{ textAlign: "left" }}>
                    <h2>Contact information</h2>
                    <p>
                        <em>Elias Peteri</em>
                        <br />
                        <a href="mailto:elias.peteri@tuni.fi">
                            elias.peteri@tuni.fi
                        </a>
                        <br />
                        <a href="https://www.github.com/eliaspeteri">GitHub</a>
                        <br />
                        <a href="https://www.linkedin.com/in/eliaspeteri">
                            LinkedIn
                        </a>
                        <br />
                        Location: Tampere area, Finland <br />
                        <br />
                    </p>
                </div>
            </div>
        </StyledContact>
    );
};
export default Contact;
