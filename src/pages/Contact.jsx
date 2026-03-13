import { useState } from 'react'
import linkedinSS from '../Pictures/linkedin ss.png'
import githubSS from '../Pictures/github ss.png'
import instagramSS from '../Pictures/instagram ss.png'
import linkedinLogo from '../Icons/linkedin logo.png'
import githubLogo from '../Icons/github logo.png'
import gmailLogo from '../Icons/gmail old logo.png'
import instaLogo from '../Icons/insta logo.png'

export default function Contact() {
  const [selectedPlatform, setSelectedPlatform] = useState('linkedin')

  const platforms = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      logo: linkedinLogo,
      screenshot: linkedinSS,
      link: 'https://linkedin.com'
    },
    {
      id: 'gmail',
      name: 'Gmail',
      logo: gmailLogo,
      screenshot: linkedinSS,
      link: 'mailto:your-email@gmail.com'
    },
    {
      id: 'github',
      name: 'GitHub',
      logo: githubLogo,
      screenshot: githubSS,
      link: 'https://github.com'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      logo: instaLogo,
      screenshot: instagramSS,
      link: 'https://instagram.com'
    }
  ]

  const currentPlatform = platforms.find(p => p.id === selectedPlatform)

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="window" style={{ width: '1100px', height: '550px', margin: '40px auto' }}>
        <div className="title-bar">
          <div className="title-bar-text">Contact</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
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

          <div style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#c0c0c0', overflow: 'hidden', border: '2px inset #dfdfdf' }}>
            {currentPlatform && (
              <img src={currentPlatform.screenshot} alt={currentPlatform.name} style={{ maxWidth: '95%', maxHeight: '95%', width: 'auto', height: 'auto', objectFit: 'contain', border: '1px solid #999' }} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
