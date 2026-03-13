import folderWithImageIcon from '../Icons/folder with image.png'
import documentIcon from '../Icons/Document Icon for Projects.png'
import { useState } from 'react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Fur-Ever Care Veterinary System',
      icon: folderWithImageIcon,
      description: 'Add your project description here...',
      details: 'Add detailed information about this project. Include technologies used, goals, and outcomes.'
    },
    {
      id: 2,
      title: 'CineVault',
      icon: folderWithImageIcon,
      description: 'Add your project description here...',
      details: 'Add detailed information about this project. Include technologies used, goals, and outcomes.'
    },
    {
      id: 3,
      title: 'Homescapes: Reservation System',
      icon: folderWithImageIcon,
      description: 'Add your project description here...',
      details: 'Add detailed information about this project. Include technologies used, goals, and outcomes.'
    },
    {
      id: 4,
      title: 'ProViz: CPU Scheduling Visualizer',
      icon: folderWithImageIcon,
      description: 'Add your project description here...',
      details: 'Add detailed information about this project. Include technologies used, goals, and outcomes.'
    },
    {
      id: 5,
      title: 'QCLid Arabian Hub',
      icon: folderWithImageIcon,
      description: 'Add your project description here...',
      details: 'Add detailed information about this project. Include technologies used, goals, and outcomes.'
    },
    {
      id: 6,
      title: 'Cybersecurity Vulnerabilities in Ph Govt.',
      icon: documentIcon,
      description: 'Add your project description here...',
      details: 'Add detailed information about this project. Include technologies used, goals, and outcomes.'
    },
    {
      id: 7,
      title: 'Pop Culture Trends and Phone Preferences',
      icon: documentIcon,
      description: 'Add your project description here...',
      details: 'Add detailed information about this project. Include technologies used, goals, and outcomes.'
    },
    {
      id: 8,
      title: 'Ban on Single-Use Plastic Ordinance',
      icon: documentIcon,
      description: 'Add your project description here...',
      details: 'Add detailed information about this project. Include technologies used, goals, and outcomes.'
    }
  ]

  const handleNextProject = () => {
    const idx = projects.findIndex(p => p.id === selectedProject.id)
    if (idx < projects.length - 1) {
      setSelectedProject(projects[idx + 1])
    }
  }

  const handlePreviousProject = () => {
    const idx = projects.findIndex(p => p.id === selectedProject.id)
    if (idx > 0) {
      setSelectedProject(projects[idx - 1])
    }
  }

  const currentIndex = selectedProject ? projects.findIndex(p => p.id === selectedProject.id) : 0
  const canGoNext = currentIndex < projects.length - 1
  const canGoPrev = currentIndex > 0

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="window" style={{ width: '90%', maxWidth: '1300px', margin: '40px auto' }}>
        <div className="title-bar">
          <div className="title-bar-text">Projects</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>

        <div className="window-body">
          <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#003da5', fontSize: '32px', letterSpacing: '2px' }}>Projects</h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', padding: '20px' }}>
            {projects.map((project, index) => (
              <div 
                key={index} 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', cursor: 'pointer', transition: 'transform 0.3s ease, opacity 0.3s ease', padding: '15px' }}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.opacity = '0.8'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.opacity = '1'
                }}
              >
                <img src={project.icon} alt={project.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', color: '#333' }}>
                  {project.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }} onClick={() => setSelectedProject(null)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button 
              style={{ backgroundColor: '#c0c0c0', border: '2px outset #dfdfdf', color: canGoPrev ? 'black' : '#999', fontSize: '24px', padding: '10px 15px', cursor: 'pointer', fontWeight: 'bold', height: 'fit-content', opacity: canGoPrev ? '1' : '0.5' }}
              onClick={(e) => { e.stopPropagation(); if (canGoPrev) handlePreviousProject(); }}
              disabled={!canGoPrev}
            >
              Left
            </button>

            <div 
              className="window" 
              style={{ width: '500px', maxHeight: '80vh', overflow: 'auto' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="title-bar">
                <div className="title-bar-text">Project Details</div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close" onClick={() => setSelectedProject(null)}></button>
                </div>
              </div>

              <div className="window-body">
                <div style={{ textAlign: 'center', color: '#003da5', fontSize: '18px', marginBottom: '15px', fontWeight: 'bold' }}>
                  {selectedProject.title}
                </div>

                <img src={selectedProject.icon} alt={selectedProject.title} style={{ width: '100px', height: '100px', margin: '0 auto 15px', objectFit: 'contain' }} />

                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#003da5', fontSize: '12px' }}>Description:</strong>
                  <div style={{ backgroundColor: '#f0f0f0', border: '1px solid #999', padding: '10px', minHeight: '80px', color: '#333', fontSize: '12px', lineHeight: '1.5' }}>
                    {selectedProject.description}
                  </div>
                </div>

                <div>
                  <strong style={{ color: '#003da5', fontSize: '12px' }}>Details:</strong>
                  <div style={{ backgroundColor: '#f0f0f0', border: '1px solid #999', padding: '10px', minHeight: '100px', color: '#333', fontSize: '12px', lineHeight: '1.5' }}>
                    {selectedProject.details}
                  </div>
                </div>
              </div>
            </div>

            <button 
              style={{ backgroundColor: '#c0c0c0', border: '2px outset #dfdfdf', color: canGoNext ? 'black' : '#999', fontSize: '24px', padding: '10px 15px', cursor: 'pointer', fontWeight: 'bold', height: 'fit-content', opacity: canGoNext ? '1' : '0.5' }}
              onClick={(e) => { e.stopPropagation(); if (canGoNext) handleNextProject(); }}
              disabled={!canGoNext}
            >
              Right
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
