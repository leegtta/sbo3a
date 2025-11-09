import "./ContactSection.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

function ContactSection(){
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">CONTACT</h2>
      <div className="contact-container">
        <form className="contact-form">
          <h3>Leave Us A Message</h3>
          <input type="text" placeholder="Nom" />
          <input type="email" placeholder="Adresse Email" />
          <textarea placeholder="Votre Message" rows="4"></textarea>
          <button type="submit">Envoyer</button>
        </form>

        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>Information technologies building,<br />chandlodiya, Ahmedabad.</p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>+234 081-1236-1234</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>hp@info.com</p>
          </div>

          <div className="social-icons">
            <FaYoutube />
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30102.1457408022!2d-5.810205997751074!3d35.75298447892231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1762688011679!5m2!1sfr!2sma"  
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  );
};

export default ContactSection;
