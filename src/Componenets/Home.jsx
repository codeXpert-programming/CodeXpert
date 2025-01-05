
export default function Home() {
  return (
    <section className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Code your Path</h1>
          <p className="hero-description">
            Embark on a coding journey with top-notch courses, flexible schedules, and hands-on learning.
          </p>
          <button className="cta-button">Start Learning</button>
        </div>
      </div>

      <div className="features-section">
        <h2 className="features-title">What We Offer</h2>
        <div className="features-cards">
          <div className="feature-card">
            <img src="/coding.svg" alt="Learning" />
            <h3>Interactive Learning</h3>
            <p>Hands-on coding exercises that will make you a pro in no time!</p>
          </div>
          <div className="feature-card">
            <img src="/flexible.svg" alt="Flexibility" />
            <h3>Flexible Timings</h3>
            <p>Learn at your own pace with flexible class schedules.</p>
          </div>
          <div className="feature-card">
            <img src="/community.svg" alt="Community" />
            <h3>Strong Community</h3>
            <p>Join a community of passionate learners and mentors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
