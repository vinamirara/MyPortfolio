import windows7Pic from '../Pictures/resume ss.jfif'

export default function Skills() {
  const handleButtonClick = (buttonName) => {
    if (buttonName === 'jumpscare') {
      alert('AAAAAAAAA Jumpscare!')
    } else if (buttonName === 'hale') {
      alert('What the hale?')
    } else if (buttonName === 'what') {
      alert('So what?')
    }
  }

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="window" style={{ width: '80%', maxHeight: '72vh', margin: '40px auto', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div className="title-bar">
          <div className="title-bar-text">Skills</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>

        <div className="window-body" style={{ display: 'flex', padding: '12px', gap: '16px' }}>
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
            <div style={{ fontSize: '12px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '4px', textDecoration: 'underline' }}>• Digital Content:</div>
              <div style={{ marginLeft: '16px', lineHeight: '1.4' }}>Canva, MS Word, Google Docs/Workplace.</div>
            </div>

            <div style={{ fontSize: '12px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '4px', textDecoration: 'underline' }}>• Web Development:</div>
              <div style={{ marginLeft: '16px', lineHeight: '1.4' }}>HTML, CSS, basic PHP, and JavaScript.</div>
            </div>

            <div style={{ fontSize: '12px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '4px', textDecoration: 'underline' }}>• Social Media Management:</div>
              <div style={{ marginLeft: '16px', lineHeight: '1.4' }}>Storyboarding, Narrative Writing, Creative Direction, and Community Engagement.</div>
            </div>

            <div style={{ fontSize: '12px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '4px', textDecoration: 'underline' }}>• Soft Skills:</div>
              <div style={{ marginLeft: '16px', lineHeight: '1.4' }}>Crisis Intervention (PFA Certified), Peer Communication, and Research.</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <img src={windows7Pic} alt="Skills showcase" style={{ width: '220px', height: '200px', border: '2px solid', borderColor: '#808080 #dfdfdf #dfdfdf #808080', objectFit: 'cover' }} />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', justifyContent: 'center', width: '220px' }}>
              <button style={{ padding: '4px 10px', backgroundColor: '#c0c0c0', border: '2px solid', borderColor: '#dfdfdf #808080 #808080 #dfdfdf', cursor: 'pointer', fontSize: '11px', fontFamily: 'MS Sans Serif, Arial, sans-serif', textAlign: 'center', transition: 'none', flex: '1', minWidth: '60px' }} onClick={() => handleButtonClick('jumpscare')}>AAAAAAAAA Jumpscare!</button>
              <button style={{ padding: '4px 10px', backgroundColor: '#c0c0c0', border: '2px solid', borderColor: '#dfdfdf #808080 #808080 #dfdfdf', cursor: 'pointer', fontSize: '11px', fontFamily: 'MS Sans Serif, Arial, sans-serif', textAlign: 'center', transition: 'none', flex: '1', minWidth: '60px' }} onClick={() => handleButtonClick('hale')}>What the hale?</button>
              <button style={{ padding: '4px 10px', backgroundColor: '#c0c0c0', border: '2px solid', borderColor: '#dfdfdf #808080 #808080 #dfdfdf', cursor: 'pointer', fontSize: '11px', fontFamily: 'MS Sans Serif, Arial, sans-serif', textAlign: 'center', transition: 'none', flex: '1', minWidth: '60px' }} onClick={() => handleButtonClick('what')}>So what?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
