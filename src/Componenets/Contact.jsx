import '../Styles/Contact.css';

export default function ContactUs() {
  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const faqData = [
    {
      question: "What courses do you offer?",
      answer:
        "We offer a variety of programming courses, including Java, Python, C#, HTML, CSS, Oracle SQL, MySQL, Bootstrap, Tailwind CSS, React, Spring Framework, Hibernate, .NET, and Flask. Each course focuses on building skills for specific technologies and frameworks.",
    },
    {
      question: "What are the prerequisites for the courses?",
      answer:
        "Most courses have no prerequisites, making them beginner-friendly. However, some courses like CSS, Bootstrap, Tailwind CSS, React, Spring Framework, Hibernate, and .NET have specific prerequisites such as knowledge of HTML, CSS, JavaScript, or Java. Check individual course details for specifics.",
    },
    {
      question: "What is the cost of each course?",
      answer:
        "Our courses are offered at a very affordable rate of ₹49/- per session. Each session is designed to cover as much content as possible to maximize your learning.",
    },
    {
      question: "Are the courses beginner-friendly?",
      answer:
        "Yes, many of our courses are designed for beginners, especially those without prerequisites like Java, Python, HTML, CSS, Oracle SQL, and MySQL. Advanced courses may require prior knowledge of specific topics.",
    },
    {
      question: "What is the format of the courses?",
      answer:
        "Our courses are structured into one-hour sessions that focus on delivering concise and valuable content. The format includes live coding sessions, hands-on exercises, and real-world projects.",
    },
    {
      question: "What topics are covered in Java course?",
      answer:
        "The Java course covers the basics of Java programming, including building robust applications, object-oriented programming principles, and creating scalable systems for web, mobile, and enterprise platforms.",
    },
    {
      question: "How is Python taught in your program?",
      answer:
        "Python is taught with a focus on its versatility, covering web development, data analysis, machine learning, and automation. You'll explore libraries like NumPy, Pandas, and TensorFlow.",
    },
    {
      question: "Do you teach frameworks?",
      answer:
        "Yes, we offer courses on React, focusing on building interactive single-page applications (SPAs), and Spring Framework, where you'll learn to create scalable enterprise applications with Java.",
    },
    {
      question: "What database skills can I learn?",
      answer:
        "You can learn Oracle SQL for managing relational databases and MySQL for designing, querying, and managing structured data efficiently. Both courses focus on practical SQL operations.",
    },
    {
      question: "Do you provide web development training?",
      answer:
        "Yes, we offer courses on HTML, CSS, Bootstrap, and Tailwind CSS to build responsive and visually appealing websites. Advanced courses like React and Flask are available for dynamic web development.",
    },
    {
      question: "Can I learn object-relational mapping tools?",
      answer:"Yes, our Hibernate course teaches you how to map Java objects to database tables, perform CRUD operations, and manage transactions seamlessly. You will also explore advanced features such as query optimization, caching, and integrating Hibernate with other Java frameworks like Spring. This course is designed to help you master ORM concepts and effectively work with relational databases in Java-based applications."
    }
  ]

  return (
    <>
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
     <section className="faqs-container">
     <h1 className="faqs-title">Frequently Asked Questions</h1>
     <div className="faqs-wrapper">
       {faqData.map((faq, index) => (
         <details key={index} className="faq-item">
           <summary className="faq-summary">{faq.question}</summary>
           <p className="faq-details">{faq.answer}</p>
         </details>
       ))}
     </div>
   </section>
  </>
  );
}
