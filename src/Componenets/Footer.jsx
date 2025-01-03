import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <footer>
      <div className="footerContent">
      <ul>
        <li onClick={() => navigateTo("/")}>Home</li> 
        <li onClick={() => navigateTo("/")}>About Us</li> 
        <li onClick={() => navigateTo("/")}>Courses</li> 
        <li onClick={() => navigateTo("/")}>Enroll</li>
      </ul>
      </div>
      <hr />
      <div className="img-social">
        <div className="footer-img">
          <img src="/CodeXpertFooter.jpg" alt="CodeXpert Logo" />
        </div>
      <div className="social-copyright">
        <div className="socials">
          <i className="fa-brands fa-instagram" onClick={() => openExternalLink("https://www.instagram.com/")} />
          <i className="fa-regular fa-envelope" onClick={() => openExternalLink("https://mail.google.com/mail/?view=cm&fs=1&to=")} />
          <i className="fa-brands fa-linkedin" onClick={() => openExternalLink("https://linkedin.com/company/")} />
          <i className="fa-brands fa-youtube" onClick={() => openExternalLink("https://www.youtube.com/channel/")} />
        </div>
        <p>&copy; All rights reserved CodeXpert@2025</p>
      </div>
      </div>
    </footer>
  );
}
