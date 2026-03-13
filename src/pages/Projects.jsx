import folderWithImageIcon from '../Icons/folder with image.png'
import documentIcon from '../Icons/Document Icon for Projects.png'
import furEverCarePreview from '../Pictures/Fur-ever care pic preview.png'
import cinevaultPreview from '../Pictures/cinevault preview.png'
import homescapesPreview from '../Pictures/Homescapes.png'
import procvizPreview from '../Pictures/ProcViz.jpg'
import qclidPreview from '../Pictures/qclid aralan.jpg'
import { useState } from 'react'

export default function Projects({ onClose }) {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectClick = (project) => {
    if (project.url) {
      window.open(project.url, '_blank')
    } else {
      setSelectedProject(project)
    }
  }

  const projects = [
    {
      id: 1,
      title: 'Fur-Ever Care Veterinary System',
      icon: folderWithImageIcon,
      preview: furEverCarePreview,
      description: 'This study proposes the development of an integrated Veterinary Management System (VMS) comprising subsystems for appointment scheduling, human resources, inventory management, sales and finance, and marketing.',
      details: 'The system aims to centralize data, automate key processes, and enhance communication within the clinic. Through the integration of these subsystems, the VMS is expected to reduce manual workloads, improve information accuracy, and support effective decision-making. Ultimately, the system seeks to enhance operational efficiency, improve staff productivity, and strengthen client satisfaction, demonstrating the importance of digital integration in modern veterinary practice.'
    },
    {
      id: 2,
      title: 'CineVault',
      icon: folderWithImageIcon,
      preview: cinevaultPreview,
      description: 'CineVault was developed as a dedicated platform designed to provide a comprehensive, user-review-free database of cinematic information that is void of subjective opinions from user ratings.',
      details: 'This platform will serve as a reliable resource for researchers, film professionals, and enthusiasts by offering accurate information such as movie rating from MPA (Motion Picture Association), release dates, genres, and plot synopses, thereby addressing the need for a focused and unbiased source of movie data.'
    },
    {
      id: 3,
      title: 'Homescapes: Reservation System',
      icon: folderWithImageIcon,
      preview: homescapesPreview,
      description: 'Homescapes is an innovative reservation management system designed to simplify the process of listing, booking, and managing short-term accommodations.',
      details: 'Unlike traditional booking methods, it prioritizes ease of use, reliability, and accessibility, offering a smooth and paper-free experience. The system enables hosts to list accommodations, manage reservations, and communicate with guests, reducing manual tasks and optimizing the booking process. Through these features, Homescapes improves organization and customer satisfaction.'
    },
    {
      id: 4,
      title: 'ProViz: CPU Scheduling Visualizer',
      icon: folderWithImageIcon,
      preview: procvizPreview,
      description: 'ProcViz was developed to address learning difficulties by providing a visual and interactive way to explore CPU scheduling.',
      details: 'According to Sibia et al. (2025), visual representations help learners better understand abstract concepts by enhancing comprehension and engagement. Instead of manually computing values or imagining how processes run, users can input arrival times, burst times, and priorities, choose an algorithm, and observe process execution through dynamic visual displays. The system supports commonly taught algorithms including First Come First Serve, Shortest Job First, Preemptive Non-Priority, and Round Robin, enabling practical comparison of their distinct behaviors.'
    },
    {
      id: 5,
      title: 'QCLid Aralan Hub',
      icon: folderWithImageIcon,
      preview: qclidPreview,
      description: 'QCLid-Aralan is an innovative Learning Management System (LMS) designed to enhance the learning experience of Quezon City University students.',
      details: 'It serves as a centralized hub for accessing course materials, submitting assignments, participating in discussions, and receiving timely feedback. By leveraging technology, the LMS aims to provide students with a flexible and engaging learning environment.'
    },
    {
      id: 6,
      title: 'Cybersecurity Vulnerabilities in Ph Govt.',
      icon: documentIcon,
      url: 'https://docs.google.com/document/d/1s1t-JmD_wMZNppzIlUOxvVwApNclqX0uIvqZLST-1lY/edit?usp=drivesdk'
    },
    {
      id: 7,
      title: 'Pop Culture Trends and Phone Preferences',
      icon: documentIcon,
      url: 'https://docs.google.com/document/d/1IkHhhLSAVK3G1QNuA4DW0dLMWFxKxJbzaI43-kgNs2U/edit?usp=drivesdk'
    },
    {
      id: 8,
      title: 'Ban on Single-Use Plastic Ordinance',
      icon: documentIcon,
      url: 'https://docs.google.com/document/d/1deEjsY1e2MThBqFAEYpmgW2fgwJYt0xaKlz8Ie8eU5I/edit?usp=drivesdk'
    }
  ]

  const handleNextProject = () => {
    const idx = projects.findIndex(p => p.id === selectedProject.id)
    if (idx < 4) {
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
  const canGoNext = currentIndex >= 0 && currentIndex < 4
  const canGoPrev = currentIndex > 0

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="window" style={{ width: '90%', maxWidth: '1300px', margin: '40px auto' }}>
        <div className="title-bar">
          <div className="title-bar-text">Projects</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={onClose} onMouseEnter={(e) => e.target.style.backgroundColor = '#ff0000'} onMouseLeave={(e) => e.target.style.backgroundColor = ''}></button>
          </div>
        </div>

        <div className="window-body">
          <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#003da5', fontSize: '32px', letterSpacing: '2px' }}>Projects</h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', padding: '20px' }}>
            {projects.map((project, index) => (
              <div 
                key={index} 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', cursor: 'pointer', transition: 'transform 0.3s ease, opacity 0.3s ease', padding: '15px' }}
                onClick={() => handleProjectClick(project)}
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
              ←
            </button>

            <div 
              className="window" 
              style={{ width: '500px', maxHeight: '80vh', overflow: 'auto' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="title-bar">
                <div className="title-bar-text">Project Details</div>
                <div className="title-bar-controls">
                  <button aria-label="Close" onClick={() => setSelectedProject(null)} onMouseEnter={(e) => e.target.style.backgroundColor = '#ff0000'} onMouseLeave={(e) => e.target.style.backgroundColor = ''}></button>
                </div>
              </div>

              <div className="window-body">
                <div style={{ textAlign: 'center', color: '#003da5', fontSize: '18px', marginBottom: '15px', fontWeight: 'bold' }}>
                  {selectedProject.title}
                </div>

                <img src={selectedProject.preview || selectedProject.icon} alt={selectedProject.title} style={{ width: '100%', height: 'auto', margin: '0 auto 15px', objectFit: 'contain', maxHeight: '300px' }} />

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
              →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
