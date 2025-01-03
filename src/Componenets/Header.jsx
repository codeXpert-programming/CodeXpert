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
        <li onClick={() => navigateTo("/")}>About Us</li> 
        <li onClick={() => navigateTo("/")}>Courses</li> 
        <li onClick={() => navigateTo("/")}>Enroll</li>
      </ul>
    </nav>
  );
}
