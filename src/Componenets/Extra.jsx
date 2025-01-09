import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import "../Styles/Stack.css";
import '../Styles/TiltedScroll.css';

function CardRotate({ children, onSendToBack, sensitivity }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [60, -60]);
    const rotateY = useTransform(x, [-100, 100], [-60, 60]);
  
    function handleDragEnd(_, info) {
      if (
        Math.abs(info.offset.x) > sensitivity ||
        Math.abs(info.offset.y) > sensitivity
      ) {
        onSendToBack();
      } else {
        x.set(0);
        y.set(0);
      }
    }
  
    return (
      <motion.div
        className="stack-classnames-card-rotate"
        style={{ x, y, rotateX, rotateY }}
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragElastic={0.6}
        whileTap={{ cursor: "grabbing" }}
        onDragEnd={handleDragEnd}
      >
        {children}
      </motion.div>
    );
  }
  
  export function Stack() {
    const courses = [
      { title: "Java", imgSrc: "/java.svg" },
      { title: "Python", imgSrc: "/python.svg" },
      { title: "C#", imgSrc: "/csharp.svg" },
      { title: "HTML", imgSrc: "/html.svg" },
      { title: "CSS", imgSrc: "/css.svg" },
      { title: "Oracle SQL", imgSrc: "/oracle.svg" },
      { title: "MySQL", imgSrc: "/mysql.svg" },
      { title: "Bootstrap", imgSrc: "/bootstrap.svg" },
      { title: "Tailwind CSS", imgSrc: "/tailwind.svg" },
      { title: "React", imgSrc: "/react.svg" },
      { title: "Spring", imgSrc: "/spring.svg" },
      { title: "Hibernate", imgSrc: "/hibernate.svg" },
      { title: ".NET", imgSrc: "/dotnet.svg" },
      { title: "Flask", imgSrc: "/flask.png" },
    ];
  
    const [cards, setCards] = useState(courses);
  
    const sendToBack = (id) => {
      setCards((prev) => {
        const newCards = [...prev];
        const index = newCards.findIndex((card) => card.title === id);
        const [card] = newCards.splice(index, 1);
        newCards.unshift(card);
        return newCards;
      });
    };
  
    useEffect(() => {
      const timer = setInterval(() => {
        if (cards.length > 1) {
          sendToBack(cards[cards.length - 1].title);
        }
      }, 5000); 
  
      return () => clearInterval(timer); 
    }, [cards]);
  
    return (
      <div className="stack-classnames-container">
        {cards.map((course, index) => (
          <CardRotate
            key={course.title}
            onSendToBack={() => sendToBack(course.title)}
            sensitivity={150}
          >
            <motion.div
              className="stack-classnames-card"
              animate={{
                rotateZ: (cards.length - index - 1) * 4,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <div className="stack-classnames-card-content">
                <img src={course.imgSrc} alt={course.title} />
                <p className="stack-classnames-card-title">
                  {course.title} @ <strong>₹49/-</strong>
                </p>
              </div>
            </motion.div>
          </CardRotate>
        ))}
      </div>
    );
  }


  
export function TiltedScroll(){
    const items = [
      { id: '1', src: '/Netflix.png', alt: 'Page Screenshot' },
      { id: '2', src: '/Uber.png', alt: 'Page Screenshot' },
      { id: '3', src: '/VsCode.png', alt: 'Page Screenshot' },
      { id: '4', src: '/Youtube.png', alt: 'Page Screenshot' },
      { id: '5', src: '/Spotify.png', alt: 'Page Screenshot' },
      { id: '6', src: '/ChatGpt.png', alt: 'Page Screenshot' },
      { id: '7', src: '/Airpods.png', alt: 'Page Screenshot' },
      { id: '8', src: '/Bezier.png', alt: 'Page Screenshot' },
      { id: '9', src: '/Dark.png', alt: 'Page Screenshot' },
      { id: '10', src: '/Active.png', alt: 'Page Screenshot' },
      { id: '11', src: '/Netflix.png', alt: 'Page Screenshot' },
      { id: '12', src: '/Uber.png', alt: 'Page Screenshot' },
      { id: '13', src: '/VsCode.png', alt: 'Page Screenshot' },
      { id: '14', src: '/Youtube.png', alt: 'Page Screenshot' },
      { id: '15', src: '/Spotify.png', alt: 'Page Screenshot' },
      { id: '16', src: '/ChatGpt.png', alt: 'Page Screenshot' },
      { id: '17', src: '/Airpods.png', alt: 'Page Screenshot' },
      { id: '18', src: '/Bezier.png', alt: 'Page Screenshot' },
      { id: '19', src: '/Dark.png', alt: 'Page Screenshot' },
      { id: '20', src: '/Active.png', alt: 'Page Screenshot' }
    ];
    const items2 = [
      { id: '1', src: '/Astral.png', alt: 'Page Screenshot' },
      { id: '2', src: '/Alukaze.png', alt: 'Page Screenshot' },
      { id: '3', src: '/BEC.png', alt: 'Page Screenshot' },
      { id: '4', src: '/Reshape.png', alt: 'Page Screenshot' },
      { id: '5', src: '/StarWars.png', alt: 'Page Screenshot' },
      { id: '6', src: '/Forward.png', alt: 'Page Screenshot' },
      { id: '7', src: '/GitHub.png', alt: 'Page Screenshot' },
      { id: '8', src: '/DarkRoom.png', alt: 'Page Screenshot' },
      { id: '9', src: '/Uprock.png', alt: 'Page Screenshot' },
      { id: '10', src: '/Vinic.png', alt: 'Page Screenshot' },
      { id: '11', src: '/Astral.png', alt: 'Page Screenshot' },
      { id: '12', src: '/Alukaze.png', alt: 'Page Screenshot' },
      { id: '13', src: '/BEC.png', alt: 'Page Screenshot' },
      { id: '14', src: '/Reshape.png', alt: 'Page Screenshot' },
      { id: '15', src: '/StarWars.png', alt: 'Page Screenshot' },
      { id: '16', src: '/Forward.png', alt: 'Page Screenshot' },
      { id: '17', src: '/GitHub.png', alt: 'Page Screenshot' },
      { id: '18', src: '/DarkRoom.png', alt: 'Page Screenshot' },
      { id: '19', src: '/Uprock.png', alt: 'Page Screenshot' },
      { id: '20', src: '/Vinic.png', alt: 'Page Screenshot' }
    ];
  
    return (
      <div className="container">
        <div className="inner-container">
          <div className="scroll-grid">
            {items.map((item) => (
              <div key={item.id} className="grid-item">
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
          <div className="scroll-grid-2">
            {items2.map((item2) => (
              <div key={item2.id} className="grid-item">
                <img src={item2.src} alt={item2.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
