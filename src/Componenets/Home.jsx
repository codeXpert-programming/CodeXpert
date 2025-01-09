import '../Styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { Stack, TiltedScroll } from './Extra.jsx';

export default function Home() {
  const navigate = useNavigate()

  const navigateTo = (path) => {
    navigate(path);
  }
  const handleExploreClick = () => {
    const learnSection = document.querySelector(".learn-section");
    learnSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Unlock Your Coding Potential with codeXpert</h1>
          <p>
            At codeXpert, we unlock more than just code—here, we help you bring ideas to life, we offer you the tools to build the future you envision. With options in languages like Java, Python, React, and more, you can chart your own learning path, step by step. Whether you're starting from scratch or advancing your skills, our courses are designed to help you craft the skills needed to develop powerful projects, just like the ones you see around you. Here, your coding journey is in your hands—every line of code you write brings you closer to your goals. Code your path with us.
          </p>
          <div className="hero-buttons">
            <button onClick={handleExploreClick} className="hero-btn explore-btn">Explore</button>
            <button onClick={() => navigateTo("/about-us")} className="hero-btn learn-more-btn-1">Learn More</button>
          </div>
        </div>
        <div className="tilded-container">
          <TiltedScroll />
        </div>
      </section>

      <section className="learn-section">
        <div className="learn-container">
          <div className="learn-image">
            <Stack />
          </div>
          <div className="learn-text">
            <h2>Learn Programming at Your Own Pace</h2>
            <p>
              Take control of your learning with our flexible pay-as-you-go approach. Choose from a variety of programming courses, including Java, Python, React, and more, all available in convenient one-hour sessions. Learn as much as you can in a short time for the same amount of effort, with each class priced at just <strong>₹49/-</strong>.
            </p>
            <div className="learn-buttons">
              <button className="learn-btn learn-more-btn-2">Learn More</button>
              <button onClick={() => navigateTo("/enroll")} className="learn-btn enroll-btn">Enroll</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
