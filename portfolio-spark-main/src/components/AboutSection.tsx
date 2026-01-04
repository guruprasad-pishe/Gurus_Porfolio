import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const aboutContent = [
  "A passionate Computer Science & Engineering graduate with a strong foundation in full-stack web development and AI-driven applications.",
  "Skilled in the MERN stack (MongoDB, Express.js, React, Node.js) with hands-on experience building responsive, scalable web applications and RESTful APIs.",
  "Developed an AI-based Health Assistant project, integrating LLMs, image-based disease detection, multilingual support, and location-based hospital recommendations.",
  "Strong problem-solving mindset with experience in MySQL, Firebase, MongoDB, and version control using Git & GitHub, following clean code and best practices.",
  
];

const highlights = [
  { label: 'Projects Completed', value: '10+' },
  { label: 'Technologies', value: '20+' },
  { label: 'Years Learning', value: '4' },
  { label: 'Lines of Code', value: '50K+' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my background and expertise
          </p>
        </motion.div>

        <Row className="align-items-center">
          <Col lg={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {aboutContent.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.05rem',
                    marginBottom: '1.25rem',
                    paddingLeft: '1rem',
                    borderLeft: index === 0 ? '3px solid var(--accent-cyan)' : 'none',
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </Col>

          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Row className="g-3">
                {highlights.map((item, index) => (
                  <Col xs={6} key={index}>
                    <motion.div
                      className="glass-card text-center"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <h3
                        style={{
                          fontSize: '2.5rem',
                          fontWeight: 700,
                          background: 'var(--accent-gradient)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {item.value}
                      </h3>
                      <p
                        style={{
                          color: 'var(--text-muted)',
                          fontSize: '0.9rem',
                          marginBottom: 0,
                        }}
                      >
                        {item.label}
                      </p>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
