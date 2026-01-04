import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const highlights = [
  'MERN Stack Development',
  'AI-Integrated Applications',
  'Flutter Cross-Platform',
  'REST API Design',
  'Database Management',
  'Problem Solving',
];

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Small delay for spinner, then open the actual resume PDF
    setTimeout(() => {
      setIsDownloading(false);
      window.open('/Guruprasad-Resume.pdf', '_blank');
    }, 500);
  };

  return (
    <section id="resume" className="section" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">
            Download my ATS-optimized resume
          </p>
        </motion.div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card text-center"
              style={{
                padding: '3rem',
                background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(0, 212, 255, 0.05) 100%)',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--accent-gradient)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--bg-dark)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>

              <h4
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '1rem',
                }}
              >
                 Guruprasad Developer - Software Engineer
              </h4>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  maxWidth: '500px',
                  margin: '0 auto 2rem',
                }}
              >
                Computer Science & Engineering graduate with expertise in full-stack
                development, AI integration, and web applications.
              </p>

              <div className="mb-4">
                <h6 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>
                  Key Highlights
                </h6>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {highlights.map((highlight, index) => (
                    <motion.span
                      key={index}
                      className="tech-badge"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className="btn-accent"
                  size="lg"
                  onClick={handleDownload}
                  disabled={isDownloading}
                  style={{
                    minWidth: '200px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  {isDownloading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Preparing...
                    </>
                  ) : (
                    <>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download Resume
                    </>
                  )}
                </Button>
              </motion.div>

              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  marginTop: '1rem',
                }}
              >
                PDF format • ATS-optimized • Last updated 2026
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ResumeSection;
