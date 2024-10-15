import { NavLink } from 'react-router-dom';
import './styles/contact.css';


const Contact = () => {

    const sendMessage = (event) => {

        event.preventDefault();
        const form = document.getElementById("form-field");
        const name = form.name.value;
        const subject = form.subject.value;
        const message = form.message.value;

        // Create a mailto link
        const mailtoLink = `mailto:thamizharaasan51@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Message from ${name}:\n\n${message}`)}`;

        // Open the mail client
        window.open(mailtoLink, '_blank');

        form.reset();
    

    }
    return (
        <div className="contactPage">
                <h1 id='contact-h1'>KEEP IN <tmz>TOUCH</tmz></h1>

        <div id="parent-div">
            <div class="child-num-1">
                <div id="short-message">
                    <h3>DON'T BE SHY !</h3>
                    <p>Let's get to know each other better. I’m eager to build a 
                        strong network with fellow CS enthusiasts to share knowledge 
                        and participate in discussions about interesting projects and ideas.
                    </p>
                </div>
            
                <div id="address">
                    <i class='bx bx-current-location' style={{color: "#ffb404"}}></i>
                    <h3>I LIVE HERE</h3>
                    <p>Langkap, Perak</p>
                </div>
            
                <div id="my-email">
                    <i class='bx bxs-envelope' style={{color: "#ffb404"}}></i>
                    <h3>MAIL ME</h3>
                    <NavLink to="mailto:thamizharaasan51@gmail.com" target="_blank"><p>thamizharaasan51@gmail.com</p></NavLink>
            
                </div>
            
                <div id="my-phone">
                    <i class='bx bxs-phone' style={{color: "#ffb404"}}></i>
                    <h3>PING ME</h3>
                    <p>019-5521627</p>
                </div>
            
                <div id="contact-details">
                    <div class="social-media-icons">
                        <NavLink to="https://www.instagram.com/thamizharaasan_/" target="_blank"><i class='bx bxl-instagram'></i></NavLink>
                    </div>
                    <div class="social-media-icons">
                        <NavLink to="https://www.linkedin.com/in/thamizharaasan/" target="_blank"><i class='bx bxl-linkedin' style={{color: "#ffffff"}}  ></i></NavLink>
                    </div>
                    <div class="social-media-icons">
                        <NavLink to="https://github.com/ThamizharaasanMMU" target="_blank"><i class='bx bxl-github' style={{color: "#ffffff"}} ></i></NavLink>
                    </div>
                </div>

            </div>


            <div id="message-me" >
                <form id="form-field">
                    <div class="inputs">
                        <input type="text" id="name" name="name" class="text-field" placeholder="YOUR NAME" required maxlength="45" />
                    </div>
                    <div class="inputs">
                        <input type="text" id="email" name="email" class="text-field" placeholder="YOUR EMAIL" required maxlength="45" />
                    </div>
                    <div class="inputs">
                        <input type="text" id="subject" name="subject" class="text-field" placeholder="YOUR SUBJECT" required maxlength="45" />
                    </div>
                    <div class="inputs" >
                        <textarea id="message" name="message" class="text-field" placeholder="YOUR MESSAGE" required maxlength="200" style={{zIndex : "1"}} />
                    </div>
                    <button onClick={sendMessage} style={{background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center"}}>
                        <div id="message-btn"><a href='/contact'><h3>Send Message</h3><i class='bx bxs-paper-plane' style={{color:"#ffffff"}}  ></i></a></div>
                    </button>
                    
                    

                </form>

            </div>


        </div>
        </div>

    );
}
 
export default Contact;