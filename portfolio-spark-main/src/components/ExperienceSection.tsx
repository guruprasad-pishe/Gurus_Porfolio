import { Container } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'experience' | 'project';
  skills: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: '2025 - 2026',
    title: 'AIDA – AI-Based Health Assistant',
    organization: 'Final Year Capstone Project',
    description:
      'Developed an AI-based health assistant that analyzes symptoms using user prompts and images, provides disease-related insights, suggests nearby hospitals based on user location, and supports multiple languages. Built as a full-stack application integrating AI models with a scalable web architecture.',
    type: 'project',
    skills: ['React', 'TypeScript', 'Node.js', 'AI Models', 'APIs', 'MongoDB'],
  },
  {
    year: '2025',
    title: 'Online Food Delivery Web Application',
    organization: 'Personal Project',
    description:
      'Built a responsive online food delivery web application using React, enabling users to browse restaurants, view menus, manage carts, and place orders. Focused on dynamic UI components, state management, and API-driven data handling to simulate real-world ordering workflows.',
    type: 'project',
    skills: ['React', 'JavaScript', 'REST APIs', 'CSS', 'Git & GitHub'],
  },
  {
    year: '2025',
    title: 'KISAN VISION INDIA – Smart Crop Analytics Dashboard',
    organization: 'Hackathon / Project',
    description:
      'Designed and developed an interactive dashboard visualizing crop yield trends across 28 Indian states using maps and charts. Integrated an AI chatbot supporting multiple Indian languages to assist farmers with agricultural insights and decision-making.',
    type: 'project',
    skills: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Gemini API'],
  },
  {
    year: '2025',
    title: 'StudyMate – AI-Powered PDF Analyzer',
    organization: 'Academic Project',
    description:
      'Developed an AI-powered PDF analysis platform that allows users to upload documents and ask context-aware questions. Integrated Hugging Face (IBM-Mistral) models with a Node.js backend to enable secure file processing and real-time query responses.',
    type: 'project',
    skills: ['React', 'Node.js', 'Python', 'Hugging Face', 'Tailwind CSS'],
  },
  {
    year: '2024',
    title: 'Trivia Quiz Application',
    organization: 'Personal Project',
    description:
      'Created a real-time trivia quiz application with Firebase authentication and leaderboard functionality. Enhanced user engagement through interactive 3D animations and smooth UI transitions.',
    type: 'project',
    skills: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Three.js'],
  },

];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'experience':
        return '#00d4ff';
      case 'project':
        return '#10b981';
      default:
        return '#00d4ff';
    }
  };

  return (
    <section
      id="experience"
      className="section"
      ref={ref}
      style={{ background: 'var(--bg-card)' }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="section-title">Experience & Projects</h2>
          <p className="section-subtitle">
            My professional journey and key projects
          </p>
        </motion.div>

        <div className="d-flex justify-content-center mb-4">
          <div className="d-flex gap-4 flex-wrap justify-content-center">
            {[
              { type: 'experience', label: 'Work Experience' },
              { type: 'project', label: 'Key Projects' },
            ].map((item) => (
              <div key={item.type} className="d-flex align-items-center gap-2">
                <span
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: getTypeColor(item.type),
                    boxShadow: `0 0 10px ${getTypeColor(item.type)}50`,
                  }}
                />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div
                  className="glass-card"
                  style={{
                    borderLeft: `3px solid ${getTypeColor(item.type)}`,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Glow effect */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100px',
                      height: '100%',
                      background: `linear-gradient(90deg, ${getTypeColor(item.type)}15, transparent)`,
                      pointerEvents: 'none',
                    }}
                  />
                  
                  <div className="d-flex justify-content-between align-items-start mb-2 flex-wrap gap-2">
                    <div>
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: getTypeColor(item.type),
                            boxShadow: `0 0 8px ${getTypeColor(item.type)}`,
                          }}
                        />
                        <span
                          style={{
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: getTypeColor(item.type),
                            fontWeight: 600,
                          }}
                        >
                          {item.type === 'experience' ? 'Work' : 'Project'}
                        </span>
                      </div>
                      <h5
                        style={{
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-heading)',
                          marginBottom: '0.25rem',
                          fontSize: '1.15rem',
                        }}
                      >
                        {item.title}
                      </h5>
                      <p
                        style={{
                          color: getTypeColor(item.type),
                          fontSize: '0.95rem',
                          marginBottom: 0,
                          fontWeight: 500,
                        }}
                      >
                        {item.organization}
                      </p>
                    </div>
                    <span
                      style={{
                        background: 'rgba(0, 212, 255, 0.1)',
                        color: 'var(--accent-cyan)',
                        padding: '0.35rem 0.9rem',
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      marginBottom: '1rem',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    {item.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: 'rgba(124, 58, 237, 0.1)',
                          color: 'var(--accent-purple)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '50px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          border: '1px solid rgba(124, 58, 237, 0.2)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
