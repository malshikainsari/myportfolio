import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profileImage from '../assets/myphoto.png';

const Typewriter = ({ phrases }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        // Deleting text
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(75);
      } else {
        // Typing text
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      // Check if we've finished typing or deleting
      if (!isDeleting && currentText === currentPhrase) {
        // Pause at end of typing
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        // Move to next phrase after deleting
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed]);

  return (
    <span>
      {currentText}
      <span style={{ opacity: currentText.length === phrases[currentPhraseIndex].length ? 0 : 0.7 }}>|</span>
    </span>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section 
      id="home" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 2rem 2rem',
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
        color: '#f8fafc'
      }}
    >
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
        padding: '0 2rem 0 3rem',
      }}>
        {/* Left Content */}
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1rem',
            marginLeft: '1rem',
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span style={{
              fontSize: '1.75rem',
              fontWeight: '500',
              color: '#e879f9',
            }}>
              HI,
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #e879f9, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: '0.5rem 0',
            }}
          >
            I'M MALSHIKA!
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#94a3b8',
              margin: '0.5rem 0',
              minHeight: '2.5rem',
              display: 'flex',
              gap: '0.5rem',
            }}
          >
            <span style={{
              background: 'linear-gradient(to right, #e879f9, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              <Typewriter phrases={["SOFTWARE ENGINEER", "FULLSTACK DEVELOPER"]} />
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.125rem',
              color: '#94a3b8',
              lineHeight: '1.6',
              margin: '0.5rem 0 1rem',
            }}
          >
            I specialize in building modern, responsive, and user-friendly web applications. 
            With a strong focus on both frontend design and backend architecture, I love 
            bringing ideas to life through clean, efficient code.
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginTop: '0.5rem',
            }}
          >
            <motion.a
              href="/path-to-cv.pdf"
              download
              style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(to right, #e879f9, #f472b6)',
                color: '#fff',
                fontWeight: '500',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontSize: '1rem',
              }}
              whileHover={{ 
                scale: 1.05,
                background: 'linear-gradient(to right, #d946ef, #f472b6)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>

            <motion.a
              href="#contact"
              style={{
                padding: '0.75rem 1.5rem',
                border: '2px solid #e879f9',
                color: '#e879f9',
                fontWeight: '500',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontSize: '1rem',
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#e879f9',
                color: 'white',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '8rem',
          }}
        >
          <div style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid #e879f9',
            boxShadow: '0 10px 30px rgba(232, 121, 249, 0.3)',
          }}>
            <img 
              src={profileImage}
              alt="Malshika"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;