import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

import homeIcon from './Icons/Home-Computer Icon desktop.png'
import aboutIcon from './Icons/trash bin-About me icon.png'
import projectsIcon from './Icons/Projcts-Folder Icon desktop.png'
import skillsIcon from './Icons/Skills-notepad icon.png'
import contactIcon from './Icons/Message-contacts icon.png'
import weirdcoreBg from './Pictures/weirdcore-4k-wallpaper-3840x2160-21743.jpg'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const pages = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    skills: <Skills />,
    contact: <Contact />
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: homeIcon },
    { id: 'about', label: 'About Me', icon: aboutIcon },
    { id: 'projects', label: 'Projects', icon: projectsIcon },
    { id: 'skills', label: 'Skills', icon: skillsIcon },
    { id: 'contact', label: 'Contact', icon: contactIcon }
  ]

  return (
    <div className="desktop-container" style={{ backgroundImage: `url(${weirdcoreBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <aside className="sidebar">
        <div className="sidebar-content">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-icon ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => setCurrentPage(item.id)}
              title={item.label}
            >
              <img src={item.icon} alt={item.label} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </aside>

      <main className="main-content">
        <div className="content-window">
          {pages[currentPage]}
        </div>
      </main>

      <div className="taskbar-bottom">
        <div className="taskbar-left">
          <button className="windows-button">
            <span className="windows-logo">⊞</span> Start
          </button>
        </div>
        <div className="taskbar-center"></div>
        <div className="taskbar-right">
          <div className="system-tray">
            <span className="time-display">5:19 PM</span>
            <span className="date-display">1/16/2011</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
