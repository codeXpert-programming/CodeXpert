import '../Styles/Enroll.css'
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Enroll() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showError, setShowError] = useState(false); 
  const [showSuccess, setShowSuccess] = useState(false); 
  const [showErrorMail, setShowErrorMail] = useState(false); 

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
    { name: 'Flask', imgSrc: '/flask.png' },
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

    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    const email = e.target.email.value.trim();

    if (!name || !phone || !email || selectedCourses.length === 0) {
      if (selectedCourses.length === 0) {
        setShowError(true); 
      }
      return;
    }

    setShowConfirmation(true);
  };

  const handleConfirmation = () => {
    setShowConfirmation(false);

    const form = document.querySelector('form');

    
    const templateParams = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      selected_courses: selectedCourses.join(', '), 
    };

    
    emailjs
      .send(
        'enrollforcourse', 
        'template_qap6qrw', 
        templateParams, 
        'T8zuwxeVEEbe1YzK5' 
      )
      .then(
        (response) => {
          setShowSuccess(true); 
          form.reset();
          setSelectedCourses([]);
        },
        (error) => {
          setShowErrorMail(true);
        }
      );
  };

  const closeErrorPopup = () => {
    setShowError(false); 
  };

  const closeSuccessPopup = () => {
    setShowSuccess(false); 
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
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="\d{10}"
                  maxLength="10"
                  title="Please enter a valid 10-digit phone number"
                  placeholder="Your phone number"
                  required
                />
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
            <input type="submit" value="Enroll Now" />
          </div>
        </form>
      </div>

      {showError && (
        <div className="error-popup">
          <div className="error-content">
            <span className="error-close-btn" onClick={closeErrorPopup}>×</span>
            <p>Please select at least one course.</p>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className="confirmation-popup">
          <div className="confirmation-content">
            <h3>Confirm Your Enrollment</h3>
            <p>Are you sure you want to enroll in these courses?</p>
            <div className="confirmation-actions">
              <button className="confirm-btn" onClick={handleConfirmation}>Confirm</button>
              <button className="cancel-btn" onClick={() => setShowConfirmation(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="success-popup">
          <div className="success-content">
            <span className="success-close-btn" onClick={closeSuccessPopup}>×</span>
            <p>Thank you for enrolling! We will process your registration soon.&#10003;</p>
          </div>
        </div>
      )}

{showErrorMail && (
  <div className="error-popup-mail">
    <div className="error-content-mail">
      <span className="error-close-btn-mail" onClick={() => setShowErrorMail(false)}>×</span>
      <p>Failed to submit. Contact us at scodexpert@gmail.com.</p>
    </div>
  </div>
)}

    </section>
  );
}
