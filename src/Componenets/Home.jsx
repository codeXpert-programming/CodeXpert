import '../Styles/Home.css';

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Unlock Your Coding Potential with codeXpert</h1>
          <p>
          At codeXpert, we offer a wide range of programming courses aimed at helping you develop key skills for the tech industry. With options in languages like Java, Python, React, and more, you can start learning at your own pace. Whether you're just beginning or looking to deepen your knowledge, our courses are designed to fit your learning style and schedule, allowing you to progress as you go.          </p>
          <div className="hero-buttons">
            <button className="hero-btn explore-btn">Explore</button>
            <button className="hero-btn learn-more-btn-1">Learn More</button>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="learn-section">
        <div className="learn-container">
          <div className="learn-image">
            {/* Placeholder for Image */}
            <div className="image-placeholder">
              <p>Image Placeholder</p>
            </div>
          </div>
          <div className="learn-text">
            <h2>Learn Programming at Your Own Pace</h2>
            <p>
            Take control of your learning with our flexible pay-as-you-go approach. Choose from a variety of programming courses, including Java, Python, React, and more, all available in convenient one-hour sessions. Learn as much as you can in a short time for the same amount of effort, with each class priced at just ₹49/-.            </p>
            <div className="learn-buttons">
              <button className="learn-btn learn-more-btn-2">Learn More</button>
              <button className="learn-btn enroll-btn">Enroll</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
