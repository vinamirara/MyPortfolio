import fujiwaraImg from '../Pictures/fujiwara tofu shop.png'
import resume from '../Documents/MARIAN VICTORIA M. BASMAYOR Quezon City, Philippines  +639207083761  marianvictoriabasmayor@gmail.com PROFESSIONAL PROFILE A multidisciplinary professional bridging t.pdf'

export default function Skills({ onClose }) {
  const handleViewResume = () => {
    window.open(resume, '_blank')
  }

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="window" style={{ width: '70%', maxHeight: '72vh', margin: '40px auto', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div className="title-bar">
          <div className="title-bar-text">Skills</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={onClose} onMouseEnter={(e) => e.target.style.backgroundColor = '#ff0000'} onMouseLeave={(e) => e.target.style.backgroundColor = ''}></button>
          </div>
        </div>

        <div className="window-body" style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '0px', padding: '12px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '17px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '4px', textDecoration: 'underline' }}>• Digital Content:</div>
              <div style={{ marginLeft: '16px', lineHeight: '1.4' }}>Canva, MS Word, Google Docs/Workplace.</div>
            </div>

            <div style={{ fontSize: '17px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '4px', textDecoration: 'underline' }}>• Web Development:</div>
              <div style={{ marginLeft: '16px', lineHeight: '1.4' }}>HTML, CSS, basic PHP, and JavaScript.</div>
            </div>

            <div style={{ fontSize: '17px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '4px', textDecoration: 'underline' }}>• Social Media Management:</div>
              <div style={{ marginLeft: '16px', lineHeight: '1.4' }}>Storyboarding, Narrative Writing, Creative Direction, and Community Engagement.</div>
            </div>

            <div style={{ fontSize: '17px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '4px', textDecoration: 'underline' }}>• Soft Skills:</div>
              <div style={{ marginLeft: '16px', lineHeight: '1.4' }}>Crisis Intervention (PFA Certified), Peer Communication, and Research.</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <img src={fujiwaraImg} alt="Skills showcase" style={{ width: '400px', height: '400px',  objectFit: 'contain' }} />
            <button onClick={handleViewResume} style={{ padding: '8px 16px', backgroundColor: '#c0c0c0', border: '2px solid', borderColor: '#dfdfdf #808080 #808080 #dfdfdf', cursor: 'pointer', fontSize: '12px', fontFamily: 'MS Sans Serif, Arial, sans-serif', textAlign: 'center', fontWeight: 'bold', width: '220px' }}>View Resume</button>
          </div>
        </div>
      </div>
    </div>
  )
}
