import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <div>
        <img src="/CodeXpert.jpg" alt="CodeXpert Logo" />
      </div>
      <ul>
        <li onClick={() => navigateTo("/")}>Home</li> 
        <li onClick={() => navigateTo("/about-us")}>About Us</li> 
        <li onClick={() => navigateTo("/courses")}>Courses</li> 
        <li onClick={() => navigateTo("/enroll")}>Enroll</li>
      </ul>
    </nav>
  );
}
