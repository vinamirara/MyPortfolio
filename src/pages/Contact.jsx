import { useState } from 'react'
import linkedinSS from '../Pictures/linkedin ss.png'
import gmailSS from '../Pictures/gmail ss.png'
import githubSS from '../Pictures/github ss.png'
import instagramSS from '../Pictures/instagram ss.png'
import linkedinLogo from '../Icons/linkedin logo.png'
import githubLogo from '../Icons/github logo.png'
import gmailLogo from '../Icons/gmail old logo.png'
import instaLogo from '../Icons/insta logo.png'

export default function Contact({ onClose }) {
  const [selectedPlatform, setSelectedPlatform] = useState('linkedin')
  const [copied, setCopied] = useState(false)
  const [hovering, setHovering] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('marianvictoriabasmayor@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const platforms = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      logo: linkedinLogo,
      screenshot: linkedinSS,
      link: 'https://www.linkedin.com/in/basmayor-marian-victoria-m-b680a5310/'
    },
    {
      id: 'gmail',
      name: 'Gmail',
      logo: gmailLogo,
      screenshot: gmailSS,
      link: 'mailto:your-email@gmail.com'
    },
    {
      id: 'github',
      name: 'GitHub',
      logo: githubLogo,
      screenshot: githubSS,
      link: 'https://github.com/vinamirara'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      logo: instaLogo,
      screenshot: instagramSS,
      link: 'https://www.instagram.com/v.for_victoria__?igsh=MWdsY2YwdW5hcWFieA=='
    }
  ]

  const currentPlatform = platforms.find(p => p.id === selectedPlatform)

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="window" style={{ width: '1100px', height: '550px', margin: '40px auto' }}>
        <div className="title-bar">
          <div className="title-bar-text">Contact</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={onClose} onMouseEnter={(e) => e.target.style.backgroundColor = '#ff0000'} onMouseLeave={(e) => e.target.style.backgroundColor = ''}></button>
          </div>
        </div>

        <div className="window-body" style={{ display: 'grid', gridTemplateColumns: '140px 1fr', height: 'calc(100% - 20px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px', borderRight: '1px solid #ccc', flexShrink: 0, overflow: 'auto' }}>
            {platforms.map((platform) => (
              <button key={platform.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: '16px 12px', transition: 'all 0.2s', backgroundColor: selectedPlatform === platform.id ? '#e0e0e0' : '#f5f5f5', border: '1px solid #ccc', textAlign: 'center', fontSize: '12px', fontWeight: '600', width: '100%', color: 'black' }} onClick={() => setSelectedPlatform(platform.id)}>
                <img src={platform.logo} alt={platform.name} style={{ width: '40px', height: '40px' }} />
                <span>{platform.name}</span>
              </button>
            ))}
          </div>

          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', backgroundColor: '#c0c0c0', overflow: 'auto', border: '2px inset #dfdfdf' }}>
            {currentPlatform && (
              <>
                {selectedPlatform === 'gmail' ? (
                  <img 
                    src={currentPlatform.screenshot} 
                    alt={currentPlatform.name} 
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    style={{ 
                      maxWidth: '95%', 
                      maxHeight: '70%', 
                      width: 'auto', 
                      height: 'auto', 
                      objectFit: 'contain', 
                      border: '1px solid #999', 
                      cursor: 'pointer',
                      transform: hovering ? 'scale(1.05)' : 'scale(1)',
                      opacity: hovering ? 0.9 : 1,
                      transition: 'transform 0.3s ease, opacity 0.3s ease'
                    }} 
                  />
                ) : (
                  <a href={currentPlatform.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <img 
                      src={currentPlatform.screenshot} 
                      alt={currentPlatform.name}
                      onMouseEnter={() => setHovering(true)}
                      onMouseLeave={() => setHovering(false)}
                      style={{ 
                        maxWidth: '95%', 
                        maxHeight: '70%', 
                        width: 'auto', 
                        height: 'auto', 
                        objectFit: 'contain', 
                        border: '1px solid #999', 
                        cursor: 'pointer',
                        transform: hovering ? 'scale(1.05)' : 'scale(1)',
                        opacity: hovering ? 0.9 : 1,
                        transition: 'transform 0.3s ease, opacity 0.3s ease'
                      }} 
                    />
                  </a>
                )}
                {selectedPlatform === 'gmail' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#dfdfdf', padding: '12px 16px', border: '1px solid #999', borderRadius: '2px' }}>
                    <span style={{ fontSize: '13px', fontWeight: '500', color: '#000' }}>Email me at marianvictoriabasmayor@gmail.com</span>
                    <button onClick={handleCopyEmail} style={{ backgroundColor: '#c0c0c0', border: '2px outset #dfdfdf', padding: '6px 12px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', color: '#000', minWidth: '40px' }} title="Copy email">📋</button>
                    {copied && <span style={{ fontSize: '11px', color: '#008000', fontWeight: 'bold' }}>Copied!</span>}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
