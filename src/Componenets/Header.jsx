import '../Styles/Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <main>
        <img src="/CodeXpert.jpg" alt="CodeXpert Logo" />
      <ul>
        <li onClick={() => navigateTo("/")}>Home</li>
        <li onClick={() => navigateTo("/about-us")}>About Us</li>
        <li onClick={() => navigateTo("/contact-us")}>Contact Us</li>
      </ul>
      </main>
      <div>
        <button onClick={() => navigateTo("/courses")} className="btn">Courses</button>
        <button onClick={() => navigateTo("/enroll")} className="btn">Enroll</button>
      </div>
    </nav>
  );
}
