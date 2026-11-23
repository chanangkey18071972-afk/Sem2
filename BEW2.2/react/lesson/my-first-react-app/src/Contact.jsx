import PhoneNumber from "./PhoneNumber";
import "./Contact.css";

const Contact = () => {
    const contactElement = (
        <div className="contact-section">
            <h2>Contact Me</h2>
            <p>Email: nicholas.yeona@gmail.com</p>
            <PhoneNumber />
        </div>
    );
    return contactElement;
};

export default Contact;
