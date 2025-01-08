import '../Styles/Footer.css'
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const openExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  
  return (
    <footer>
      <div className="footerContent">
      <ul>
        <li onClick={() => navigateTo("/")}>Home</li> 
        <li onClick={() => navigateTo("/about-us")}>About Us</li> 
        <li onClick={() => navigateTo("/contact-us")}>Contact Us</li>
        <li onClick={() => navigateTo("/courses")}>Courses</li> 
        <li onClick={() => navigateTo("/enroll")}>Enroll</li>
      </ul>
      </div>
      <hr />
      <div className="img-social">
        <div className="footer-img">
          <img src="/CodeXpertFooter.jpg" alt="CodeXpert Logo" />
        </div>
      <div className="social-copyright">
        <div className="socials">
          <i className="fa-brands fa-instagram" onClick={() => openExternalLink("https://www.instagram.com/codexpertofficial/")} />
          <i className="fa-regular fa-envelope" onClick={() => openExternalLink("https://mail.google.com/mail/?view=cm&fs=1&to=scodexpert@gmail.com")} />
          <i className="fa-brands fa-linkedin" onClick={() => openExternalLink("https://www.linkedin.com/company/codexpertprogramming/")} />
          <i className="fa-brands fa-youtube" onClick={() => openExternalLink("https://www.youtube.com/channel/UCOOgw0LYe5oMImgRxxzdYUw")} />
        </div>
        <p>&copy; All rights reserved CodeXpert@2025</p>
      </div>
      </div>
    </footer>
  );
}
