import '../Styles/Courses.css'
import React, { useState } from 'react';
const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      title: 'Java',
      imgSrc: '/java.svg',
      description: 'Learn Java, a popular programming language for building robust applications.',
      prerequisites: [],
      longDescription: 'Java is a widely-used programming language that allows you to create powerful applications across various platforms. It is particularly known for its portability, security features, and scalability. Java is widely used in web applications, mobile applications (Android), and enterprise-level systems. With Java, you can build everything from basic desktop apps to complex cloud-based systems, providing the flexibility to work in many different fields of development.',
    },
    {
      title: 'Python',
      imgSrc: '/python.svg',
      description: 'Master Python, a versatile programming language for data analysis, machine learning, and more.',
      prerequisites: [],
      longDescription: 'Python is known for its simplicity and readability, making it an excellent choice for beginners and advanced developers alike. It is used for web development, data analysis, machine learning, and automation. Python’s rich ecosystem of libraries such as NumPy, Pandas, and TensorFlow makes it a go-to language for data science and AI projects. Whether you’re developing simple scripts or complex applications, Python’s versatility ensures that it is suited for a wide variety of tasks.',
    },
    {
      title: 'C#',
      imgSrc: '/csharp.svg',
      description: 'Learn C# for building applications on Microsoft’s .NET platform.',
      prerequisites: [],
      longDescription: 'C# is a modern, object-oriented programming language developed by Microsoft. It is primarily used for building applications on the .NET platform and is widely used in game development with Unity. C# allows for the development of desktop, mobile, and web applications. It provides strong type checking, garbage collection, and simplified development tools, making it suitable for building scalable and high-performance applications.',
    },
    {
      title: 'HTML',
      imgSrc: '/html.svg',
      description: 'Learn HTML, the structure of the web and the foundation for building websites.',
      prerequisites: [],
      longDescription: 'HTML (HyperText Markup Language) is the fundamental building block for web development. It defines the structure of web pages, enabling developers to create headings, paragraphs, lists, tables, forms, and other content for display in browsers. HTML also integrates multimedia elements such as images, audio, and video. This course covers the basic structure of HTML documents and the essential elements needed to create functional, well-structured web pages.',
    },
    {
      title: 'CSS',
      imgSrc: '/css.svg',
      description: 'Learn CSS to style web pages and create visually appealing websites.',
      prerequisites: ['HTML'],
      longDescription: 'CSS (Cascading Style Sheets) is used to style the visual presentation of web pages. CSS enables web developers to control the layout, fonts, colors, and spacing of content. In this course, you will learn how to use CSS to create responsive, aesthetically pleasing designs that look great on any device. From Flexbox to CSS Grid, you will be introduced to modern layout techniques and other powerful features such as animations, transitions, and media queries.',
    },
    {
      title: 'Oracle SQL',
      imgSrc: '/oracle.svg',
      description: 'Learn Oracle SQL for working with relational databases.',
      prerequisites: [],
      longDescription: 'Oracle SQL is used to interact with Oracle Database, one of the most powerful relational database management systems in the industry. This course will teach you how to create databases, manipulate and query data, manage users, and perform complex SQL operations such as joins, subqueries, and transactions. With Oracle SQL, you will be able to efficiently manage large amounts of structured data and gain deep insights into complex datasets.',
    },
    {
      title: 'MySQL',
      imgSrc: '/mysql.svg',
      description: 'Learn MySQL, a popular relational database management system.',
      prerequisites: [],
      longDescription: 'MySQL is one of the most widely used relational database management systems in the world. As an open-source database, MySQL is highly efficient, scalable, and suitable for various applications ranging from small projects to large-scale enterprise systems. This course will help you understand how to design databases, create tables, insert data, and write complex SQL queries for retrieving and manipulating information. MySQL’s robust features like indexing, transactions, and triggers make it ideal for managing relational data.',
    },
    {
      title: 'Bootstrap',
      imgSrc: '/bootstrap.svg',
      description: 'Learn Bootstrap, a framework for developing responsive, mobile-first websites.',
      prerequisites: ['HTML', 'CSS'],
      longDescription: 'Bootstrap is a front-end framework that provides a collection of pre-built, responsive components such as navigation bars, buttons, and forms, making web development faster and easier. This course will cover the basics of using Bootstrap’s grid system, customizing the appearance of elements, and creating responsive layouts that work across devices. You will learn how to use Bootstrap’s powerful features to build sleek, modern websites with minimal custom CSS.',
    },
    {
      title: 'Tailwind CSS',
      imgSrc: '/tailwind.svg',
      description: 'Learn Tailwind CSS, a utility-first CSS framework for rapidly building custom designs.',
      prerequisites: ['HTML', 'CSS'],
      longDescription: 'Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom designs using utility classes. Unlike traditional CSS frameworks, Tailwind provides low-level utility classes for individual CSS properties, giving you more control over the design process. In this course, you will learn how to use Tailwind’s classes to create highly customized layouts, improve development speed, and design responsive web pages without writing custom CSS from scratch.',
    },
    {
      title: 'React',
      imgSrc: '/react.svg',
      description: 'Learn React, a JavaScript library for building user interfaces.',
      prerequisites: ['JavaScript'],
      longDescription: 'React is a powerful JavaScript library for building fast, interactive, and dynamic user interfaces. It allows developers to build single-page applications (SPAs) with reusable components that can be efficiently rendered on both the client and server sides. In this course, you will learn about key React concepts such as JSX, props, state, and hooks. You will also dive into more advanced topics like React Router for navigation, Context API for state management, and performance optimization techniques.',
    },
    {
      title: 'Spring Framework',
      imgSrc: '/spring.svg',
      description: 'Learn Spring Framework for building enterprise applications in Java.',
      prerequisites: ['Java'],
      longDescription: 'Spring is a comprehensive framework for building Java-based enterprise applications. It provides a vast set of features, including dependency injection, aspect-oriented programming, and transaction management, to help developers build scalable and maintainable applications. This course will cover Spring’s core principles and dive deep into advanced topics like Spring Boot for microservices, Spring MVC for web applications, and Spring Security for authentication and authorization.',
    },
    {
      title: 'Hibernate',
      imgSrc: '/hibernate.svg',
      description: 'Learn Hibernate for mapping Java objects to database tables.',
      prerequisites: ['Java'],
      longDescription: 'Hibernate is a powerful Java framework that simplifies object-relational mapping (ORM). It allows developers to work with database tables as if they were Java objects, reducing the need for complex SQL queries. In this course, you will learn how to map Java objects to database tables, perform CRUD operations, and manage transactions using Hibernate. You will also explore advanced features like query optimization, caching, and integrating Hibernate with Spring.',
    },
    {
      title: '.NET',
      imgSrc: '/dotnet.svg',
      description: 'Learn .NET for building cross-platform applications.',
      prerequisites: ['C#'],
      longDescription: '.NET is a free, open-source developer platform for building cross-platform applications. It supports multiple languages and libraries, enabling developers to create web, mobile, and desktop applications. This course will cover the .NET core fundamentals, including ASP.NET for web development, Entity Framework for data access, and how to use .NET for building RESTful APIs and microservices that can run on Windows, macOS, and Linux.',
    },
    {
      title: 'Flask',
      imgSrc: '/flask.png',
      description: 'Learn Flask, a micro web framework written in Python.',
      prerequisites: ['Python'],
      longDescription: 'Flask is a lightweight and easy-to-use web framework for Python. Designed to be simple and flexible, Flask allows developers to quickly build web applications without a lot of boilerplate code. This course will teach you how to create routes, handle requests, work with databases, and build a fully functional web application using Flask. You will also explore advanced topics such as user authentication, testing, and deploying Flask applications to production.',
    },
  ];
  

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <section className="courses-container">
      <h2>Our Courses</h2>
      <div className="courses-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card" onClick={() => openModal(course)}>
            <img src={course.imgSrc} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            {course.prerequisites.length > 0 && (
              <p className="prerequisites">
                Prerequisites: {course.prerequisites.join(', ')}
              </p>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && selectedCourse && (
  <div className="modal">
    <div className="modal-content">
      {/* Close button */}
      <button className="close-btn" onClick={closeModal}>&times;</button>
      <img src={selectedCourse.imgSrc} alt={selectedCourse.title} className="modal-image" />
      <h3 className="modal-title">{selectedCourse.title}</h3>
      <p className="modal-prerequisites">
        <strong>Prerequisites: </strong>{selectedCourse.prerequisites.join(', ') || 'None'}
      </p>
      <p className="modal-description">{selectedCourse.longDescription}</p>
    </div>
  </div>
)}
    </section>
  );
};

export default Courses;
