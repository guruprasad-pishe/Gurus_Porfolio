import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={(value) => setExpanded(value)}
        className={`navbar-dark-custom ${scrolled ? 'scrolled' : ''}`}
        style={{
          background: scrolled 
            ? 'rgba(10, 10, 15, 0.95)' 
            : 'rgba(10, 10, 15, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: scrolled 
            ? '0 4px 30px rgba(0, 212, 255, 0.2), 0 0 60px rgba(124, 58, 237, 0.15)' 
            : 'none',
          borderBottom: scrolled 
            ? '1px solid rgba(0, 212, 255, 0.3)' 
            : '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.4s ease',
        }}
      >
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand
            href="#hero"
            onClick={handleLinkClick}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.6rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              textDecoration: 'none',
            }}
          >
            <motion.span
              animate={{ 
                textShadow: [
                  '0 0 10px rgba(0, 212, 255, 0.5)',
                  '0 0 20px rgba(0, 212, 255, 0.8)',
                  '0 0 10px rgba(0, 212, 255, 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #00d4ff 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {'<'}
            </motion.span>
            <motion.span
              style={{
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Dev
            </motion.span>
            <motion.span
              animate={{ 
                textShadow: [
                  '0 0 10px rgba(124, 58, 237, 0.5)',
                  '0 0 20px rgba(124, 58, 237, 0.8)',
                  '0 0 10px rgba(124, 58, 237, 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #00d4ff 50%, #7c3aed 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {'/>'}
            </motion.span>
          </Navbar.Brand>

          {/* Custom Hamburger Toggle */}
          <Navbar.Toggle aria-controls="navbar-nav">
            <motion.div
              style={{
                width: '26px',
                height: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <motion.span
                animate={expanded ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
                  borderRadius: '2px',
                  boxShadow: '0 0 8px rgba(0, 212, 255, 0.6)',
                }}
              />
              <motion.span
                animate={expanded ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: '70%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
                  borderRadius: '2px',
                  boxShadow: '0 0 8px rgba(0, 212, 255, 0.6)',
                }}
              />
              <motion.span
                animate={expanded ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #7c3aed, #00d4ff)',
                  borderRadius: '2px',
                  boxShadow: '0 0 8px rgba(124, 58, 237, 0.6)',
                }}
              />
            </motion.div>
          </Navbar.Toggle>

          {/* Nav Links */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                >
                  <Nav.Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={activeSection === link.href.substring(1) ? 'active' : ''}
                  >
                    {link.label}
                  </Nav.Link>
                </motion.div>
              ))}
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                style={{ marginLeft: '0.5rem' }}
              >
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  style={{
                    display: 'inline-block',
                    padding: '0.5rem 1.25rem',
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(124, 58, 237, 0.15))',
                    border: '1px solid rgba(0, 212, 255, 0.4)',
                    borderRadius: '50px',
                    color: 'var(--accent-cyan)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.15)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 212, 255, 0.25), rgba(124, 58, 237, 0.25))';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.3), 0 0 60px rgba(124, 58, 237, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(124, 58, 237, 0.15))';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Hire Me
                </a>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Navigation;
