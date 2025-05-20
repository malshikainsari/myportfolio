import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        width: '100%',
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        zIndex: 50
      }}
    >
      <div style={{
        maxWidth: '100%',
        margin: '0 auto',
        padding: '1rem 2rem',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("#home");
            }}
            style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #e879f9, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: "'Pacifico', cursive, sans-serif",
              letterSpacing: '1px',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
            whileHover={{ 
              scale: 1.05,
              textShadow: '0 4px 8px rgba(232, 121, 249, 0.3)'
            }}
          >
            Malshika
          </motion.a>

          {/* Desktop Navigation */}
          <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="md:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
                style={{
                  color: '#e2e8f0',
                  fontWeight: '500',
                  transition: 'color 0.3s'
                }}
                whileHover={{ 
                  scale: 1.1,
                  color: '#e879f9'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            style={{
              display: 'flex',
              outline: 'none',
              background: 'transparent',
              border: 'none',
              color: '#e2e8f0'
            }}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              style={{ width: '1.5rem', height: '1.5rem' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '1rem'
            }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
                style={{
                  display: 'block',
                  padding: '0.5rem 0',
                  color: '#e2e8f0',
                  fontWeight: '500'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;