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
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(75);
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
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
      <span className="opacity-0 group-hover:opacity-70">|</span>
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
      className="w-full min-h-[100vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
        color: '#f8fafc',
      }}
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Content - appears first on mobile */}
        <motion.div
          className="flex flex-col justify-center gap-3 text-center  marginLeft-1rem lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="text-xl md:text-2xl font-medium text-purple-400">
              HI,
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent my-1"
          >
            I'M MALSHIKA!
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-xl font-semibold text-slate-400 my-1 min-h-[2rem] flex flex-wrap justify-center lg:justify-start gap-1"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              <Typewriter phrases={["SOFTWARE ENGINEER", "FULLSTACK DEVELOPER"]} />
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-400 leading-relaxed my-3"
          >
            I specialize in building modern, responsive, and user-friendly web applications.
            With a strong focus on both frontend design and backend architecture, I love
            bringing ideas to life through clean, efficient code.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mt-1"
          >
            <motion.a
  href="/documents/Malshika_Insari_CV.pdf"
  download="Malshika_Insari_CV.pdf"
  style={{
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(to right, #e879f9, #f472b6)',
    color: '#fff',
    fontWeight: '500',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontSize: '1rem',
  }}
  aria-label="Download CV"
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
  aria-label="Contact Me"
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

        {/* Photo - appears second on mobile */}
        <motion.div
          className="flex justify-center order-first lg:order-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-full overflow-hidden border-3 border-purple-400 shadow-md shadow-purple-500/20">
            <img
              src={profileImage}
              alt="Malshika"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;