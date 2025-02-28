import "./container_hom_style.css";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLink,
  FaPhone,
} from "react-icons/fa";

const Fortter_home = () => {
  return (
    <footer className="container_foter">
      <div className="logo">
        <img src="src/assets/logo_colors.jpg" alt="Logo" />
      </div>
      <div className="ul_link">
        <ul>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaWhatsapp />
          </li>
        </ul>
      </div>
      <div className="contact_info">
        <p>
          <FaLink /> support@yourmoviewebsite.com
        </p>
        <p>
          {" "}
          <FaPhone />
          +123 456 789
        </p>
      </div>

      <p>
        © 2025 MOVIE FREE <br />
        جميع الحقوق محفوظة
      </p>
    </footer>
  );
};

export default Fortter_home;
