import { StyledContact } from "./Contact.styled";
import portrait from "../../resources/img/portrait.png";
const Contact = () => {
    return (
        <StyledContact data-testid="contactComponent" className="has-shadow">
            <div className="grid-container">
                <div className="grid-item">
                    <img src={portrait} alt="portrait"></img>
                </div>
                <div className="grid-item">
                    <h3>Contact information</h3>
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
                    </p>
                    <h6>
                        <em>You can best get a hold of me through my email.</em>
                    </h6>
                </div>
            </div>
        </StyledContact>
    );
};
export default Contact;
