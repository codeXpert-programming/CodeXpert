import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Enroll() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courses = [
    { name: 'Java', imgSrc: '/java.svg' },
    { name: 'Python', imgSrc: '/python.svg' },
    { name: 'C#', imgSrc: '/csharp.svg' },
    { name: 'HTML', imgSrc: '/html.svg' },
    { name: 'CSS', imgSrc: '/css.svg' },
    { name: 'Oracle SQL', imgSrc: '/oracle.svg' },
    { name: 'MySQL', imgSrc: '/mysql.svg' },
    { name: 'Bootstrap', imgSrc: '/bootstrap.svg' },
    { name: 'Tailwind', imgSrc: '/tailwind.svg' },
    { name: 'React', imgSrc: '/react.svg' },
    { name: 'Spring', imgSrc: '/spring.svg' },
    { name: 'Hibernate', imgSrc: '/hibernate.svg' },
    { name: '.NET', imgSrc: '/dotnet.svg' },
    { name: 'Flask', imgSrc: '/flask.svg' },
  ];

  const handleCourseSelection = (course) => {
    setSelectedCourses((prevSelectedCourses) =>
      prevSelectedCourses.includes(course)
        ? prevSelectedCourses.filter((item) => item !== course)
        : [...prevSelectedCourses, course]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit only if at least one course is selected
    if (selectedCourses.length === 0) {
      alert('Please select at least one course.');
      return;
    }

    // EmailJS submit
    emailjs
      .sendForm(
        '', // Your service ID
        '', // Your template ID
        e.target, // Form data
        '' // Your user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setIsSubmitted(true);
        },
        (error) => {
          alert('Failed to submit. Please try again later.');
        }
      );
  };

  const handleConfirmation = () => {
    setShowConfirmation(true); // Show the confirmation pop-up
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false); // Close the confirmation pop-up
  };

  return (
    <section className="enroll-container">
      <h2>Enroll Course</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="details-course">
            <div className="details-container">
              <h3>Please fill out these details:</h3>
              <div className="form-field">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Mobile:</label>
                <input type="text" id="phone" name="phone" placeholder="Your phone number" required />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />
              </div>
            </div>

            <div className="course-selection">
              <h3>Select Your Preferred Courses:</h3>
              <div className="course-list">
                {courses.map((course) => (
                  <div
                    key={course.name}
                    className={`course-item ${selectedCourses.includes(course.name) ? 'selected' : ''}`}
                    onClick={() => handleCourseSelection(course.name)}
                  >
                    <img src={course.imgSrc} alt={course.name} />
                    <span className="course-title-enroll">{course.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="submit-container">
          <input type="submit" value="Enroll Now" onClick={handleConfirmation} />
          </div>
        </form>
      </div>

      {/* Confirmation Pop-up */}
      {showConfirmation && (
        <div className="confirmation-popup">
          <div className="confirmation-content">
            <h3>Confirm Your Enrollment</h3>
            <p>Are you sure you want to enroll in these courses?</p>
            <div className="confirmation-actions">
              <button
                className="confirm-btn"
                onClick={() => {
                  setShowConfirmation(false); // Close pop-up
                  handleSubmit({ preventDefault: () => {} }); // Submit form if confirmed
                }}
              >
                Confirm
              </button>
              <button className="cancel-btn" onClick={handleConfirmationClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

{isSubmitted && !showConfirmation && (
  <div className="thank-you-message">
    <p>Thank you for enrolling! We will process your registration soon.<span className="checkmark">&#10003;</span></p>
  </div>
)}

    </section>
  );
}
