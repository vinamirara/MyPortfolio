import gradPic from '../Pictures/Grad Pic.jpeg'
import pinkCam from '../Pictures/Pink Cam w my face.png'
import officeSiren from '../Pictures/office siren sa tabing dagat.jpg'
import spotifyImg from '../Pictures/spotify ss.png'
import letterboxdImg from '../Pictures/letterboxd ss.png'
export default function About({ onClose }) {
  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="window" style={{ width: '90%', maxWidth: '1300px', margin: '40px auto' }}>
        <div className="title-bar">
          <div className="title-bar-text">About Me</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={onClose} onMouseEnter={(e) => e.target.style.backgroundColor = '#ff0000'} onMouseLeave={(e) => e.target.style.backgroundColor = ''}></button>
          </div>
        </div>

        <div className="window-body" style={{ display: 'flex', flexDirection: 'column', padding: '12px', gap: '12px', fontSize: '20px', lineHeight: '1.4', overflow: 'auto', maxHeight: '72vh', color: 'black' }}>
            
            {/* Section 1: Personal Statement */}
            <div style={{ padding: '8px', backgroundColor: '#dfdfdf', border: '2px solid #808080' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '12px', alignItems: 'start' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '0px', fontSize: '20px' }}>
                  "An artist at heart with a background in theater direction and editorial writing, now venturing into the digital world of IT. I see code as a new language for storytelling and social media as a global stage. Currently bridging my creative roots with a BS in Information Technology, I am exploring how modern web tools can breathe new life into arts and ensure our expression remain accessible in the digital age."
                </p>
                <img src={pinkCam} alt="Marian with camera" style={{ width: '280px', height: 'auto', marginTop: '-90px', marginBottom: '-30px' }} />
              </div>
            </div>

            {/* Section 2: Education */}
            <div style={{ padding: '8px', backgroundColor: '#dfdfdf', border: '2px solid #808080', display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    background: '#dfdfdf', 
                    border: '2px solid #808080', 
                    padding: '10px',
                    marginBottom: '10px'
                  }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Bachelor of Science in Information Technology | 2023 – Present</p>
                    <p style={{ margin: '3px 0', fontSize: '20px' }}>Quezon City University, San Bartolome, QC (Expected June 2027)</p>
                    <ul style={{ margin: '5px 0 0 20px', fontSize: '20px' }}>
                      <li>Key Focus: Web Design (HTML, CSS, PHP, JavaScript), Technical Writing, and Project Coordination.</li>
                    </ul>
                  </div>

                  <div style={{ 
                    background: '#dfdfdf', 
                    border: '2px solid #808080', 
                    padding: '10px'
                  }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Senior High School: Arts and Design Track (Theater Arts) | 2020 – 2022</p>
                    <p style={{ margin: '3px 0', fontSize: '20px' }}>Baybay City Senior High School, Baybay City</p>
                    <ul style={{ margin: '5px 0 0 20px', fontSize: '20px' }}>
                      <li>Work Immersion: Specialized in mounting cultural performances and incorporating Philippine heritage elements into creative outputs.</li>
                    </ul>
                  </div>
                </div>

                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={gradPic} alt="Grad photo" style={{ maxWidth: '280px', height: 'auto', border: '2px solid #808080' }} />
                </div>
            </div>

            {/* Section 3: Career Goals */}
            <div style={{ padding: '8px', backgroundColor: '#dfdfdf', border: '2px solid #808080' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '20px', textAlign: 'center' }}>Career goals</p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    background: '#dfdfdf', 
                    border: '2px solid #808080', 
                    padding: '12px',
                    fontSize: '20px',
                  }}>
                    <p style={{ marginBottom: '8px', textAlign: 'center', fontWeight: 'bold' }}>Future Plans:</p>
                    <p style={{ margin: 0, textAlign: 'center' }}>I aim to be an IT Professional in the future, one that combines my technical skills with my creative background. I want to have a work that makes me happy.</p>
                  </div>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'stretch' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={officeSiren} alt="Office siren aesthetic" style={{ maxWidth: '70%', height: 'auto', border: '2px solid #808080' }} />
                  </div>
                  <div style={{ 
                    background: '#dfdfdf', 
                    border: '2px solid #808080', 
                    padding: '12px',
                    fontSize: '20px',
                    lineHeight: '1.5'
                  }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>Actual Career Goal:</p>
                    <p style={{ margin: 0, textAlign: 'center' }}>Maging cool tech-worker na nakiki-bandwagon ride sa niche trends, employee na nagdadress up according sa demographics ng job, performative pero dapat may bitaw sa work.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Hobbies & Interests */}
            <div style={{ padding: '8px', backgroundColor: '#dfdfdf', border: '2px solid #808080' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Hobbies</p>
                  <div style={{ 
                    background: '#dfdfdf', 
                    border: '2px solid #808080', 
                    padding: '10px',
                    fontSize: '20px'
                  }}>
                    <p>I don't even know bat nag-add pa ako ng extra parts sa about me huy. Ang hobbies ko ay manood ng movies or listen to music or doomscroll--- anything just to silence the voices because i didn't plan this life.</p>
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Interests</p>
                  <div style={{ 
                    background: '#dfdfdf', 
                    border: '2px solid #808080', 
                    padding: '10px',
                    fontSize: '20px'
                  }}>
                    <p>Panoorin si Sim na mag work out and hintayin until he's whimpering then pretend nothing happened. Or sewing, fashion, cars, art, bands, gigs, photography, tattoo enthusiast, bang hakot lahat walang itinira akin ang Q.C.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Music & Movies */}
            <div style={{ padding: '8px', backgroundColor: '#dfdfdf', border: '2px solid #808080' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Music</p>
                    <div style={{ 
                      background: '#dfdfdf', 
                      border: '2px solid #808080', 
                      padding: '10px',
                      fontSize: '20px'
                    }}>
                      <p>Ayan profile ko sa Spotify (I boycott them so this is for aesthetics nalang since last year. Also, FREE PALESTINE. Alin ang West Philippine Sea. Wag kayong maging fanatic or misogynist lalo na kasi sa babae kayo nanggaling.</p>
                    </div>
                  </div>

                  <div>
                    <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Movies</p>
                    <div style={{ 
                      background: '#dfdfdf', 
                      border: '2px solid #808080', 
                      padding: '10px',
                      fontSize: '20px'
                    }}>
                      <p>And gumawa din me ng LetterBoxd kasi nakakapagod naman if dito pa ako gagawa ng lists diba hay. HAHAHAHAHA kulang pa yung lists but i hope ykwim in these lists. Horror, alternative girlie since childhood.</p>
                    </div>
                  </div>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {spotifyImg && (
                    <a href="https://open.spotify.com/user/31wq4o2hybt3ppjmanr4gks4iff4?si=a282690d248d4861" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                      <img src={spotifyImg} alt="Spotify profile" style={{ width: '100%', height: 'auto', border: '2px solid #808080', transition: 'opacity 0.2s', opacity: 1 }} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'} />
                    </a>
                  )}
                  {letterboxdImg && (
                    <a href="https://boxd.it/k0PC7" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                      <img src={letterboxdImg} alt="Letterboxd profile" style={{ width: '100%', height: 'auto', border: '2px solid #808080', transition: 'opacity 0.2s', opacity: 1 }} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'} />
                    </a>
                  )}
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}
