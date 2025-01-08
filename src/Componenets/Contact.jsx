import '../Styles/Contact.css';

export default function ContactUs() {
  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-us-wrapper">
        <h1>Contact Us</h1>
      <div className="contact-us-container">
        <p>We’d love to hear from you! Connect with us through the following platforms:</p>
        <div className="contact-cards">
          <div className="card" onClick={() => openExternalLink("https://www.instagram.com/codexpertofficial/")}>
            <img src="Instagram.png" alt="Instagram Logo" />
            <h3>Instagram</h3>
            <p>@codexpertofficial</p>
          </div>
          <div className="card" onClick={() => openExternalLink("https://mail.google.com/mail/?view=cm&fs=1&to=scodexpert@gmail.com")}>
            <img src="Gmail.png" alt="Email Logo" />
            <h3>Email</h3>
            <p>scodexpert@gmail.com</p>
          </div>
          <div className="card" onClick={() => openExternalLink("https://www.linkedin.com/company/codexpertprogramming/")}>
            <img src="Linkedin.png" alt="LinkedIn Logo" />
            <h3>Linked In</h3>
            <p>CodeXpert Programming</p>
          </div>
        </div>
      </div>
    </div>
  );
}
