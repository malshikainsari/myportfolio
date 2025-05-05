import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  if (!project) {
    navigate('/');
    return null;
  }

  return (
    <section 
      style={{
        padding: '5rem 0',
        backgroundColor: '#f1f5f9'
      }}
      className="dark:bg-gray-900"
    >
      <div className="container">
        <button
          onClick={() => navigate(-1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#0ea5e9',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '2rem'
          }}
          className="dark:text-blue-400"
        >
          <svg style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </button>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
          }}
          className="dark:bg-gray-800"
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '16rem',
              objectFit: 'cover'
            }}
          />
          
          <div style={{ padding: '2rem' }}>
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#1e293b'
            }} className="dark:text-white">
              {project.title}
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#0ea5e9',
                  marginBottom: '0.5rem'
                }} className="dark:text-blue-400">
                  Role
                </h3>
                <p style={{ color: '#64748b' }} className="dark:text-gray-300">
                  {project.role}
                </p>
              </div>
              
              <div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#0ea5e9',
                  marginBottom: '0.5rem'
                }} className="dark:text-blue-400">
                  Project Type
                </h3>
                <p style={{ color: '#64748b' }} className="dark:text-gray-300">
                  {project.details.type}
                </p>
              </div>
              
              <div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#0ea5e9',
                  marginBottom: '0.5rem'
                }} className="dark:text-blue-400">
                  Duration
                </h3>
                <p style={{ color: '#64748b' }} className="dark:text-gray-300">
                  {project.details.duration}
                </p>
              </div>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#0ea5e9',
                marginBottom: '0.5rem'
              }} className="dark:text-blue-400">
                Technologies Used
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {project.tech.split(", ").map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: '#e0f2fe',
                      color: '#0369a1',
                      borderRadius: '9999px',
                      fontSize: '0.875rem'
                    }}
                    className="dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#0ea5e9',
                marginBottom: '0.5rem'
              }} className="dark:text-blue-400">
                Description
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.75'
              }} className="dark:text-gray-300">
                {project.description}
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#0ea5e9',
                marginBottom: '0.5rem'
              }} className="dark:text-blue-400">
                Key Features
              </h3>
              <ul style={{
                listStyleType: 'disc',
                paddingLeft: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }} className="dark:text-gray-300">
                {project.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#0ea5e9',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'background-color 0.2s'
              }}
              className="hover:bg-blue-700 dark:hover:bg-blue-600"
            >
              <svg style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;