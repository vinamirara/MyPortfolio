import gradPic from '../Pictures/Grad Pic.jpeg'
import pinkCam from '../Pictures/Pink Cam w my face.png'
import officeSiren from '../Pictures/office siren sa tabing dagat.jpg'
import spotifyImg from '../Pictures/spotify ss.png'
import letterboxdImg from '../Pictures/letterboxd ss.png'
export default function About() {
  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="window" style={{ width: '90%', maxWidth: '1300px', margin: '40px auto' }}>
        <div className="title-bar">
          <div className="title-bar-text">About Me</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>

        <div className="window-body" style={{ display: 'flex', flexDirection: 'column', padding: '12px', gap: '12px', fontSize: '12px', lineHeight: '1.4', overflow: 'auto', maxHeight: '72vh', color: 'black' }}>
            
            {/* Section 1: Personal Statement */}
            <div style={{ padding: '8px', backgroundColor: '#dfdfdf', border: '2px solid #808080' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '12px', alignItems: 'start' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '0px', fontSize: '17px' }}>
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
                    <p style={{ margin: '3px 0', fontSize: '12px' }}>Quezon City University, San Bartolome, QC (Expected June 2027)</p>
                    <ul style={{ margin: '5px 0 0 20px', fontSize: '12px' }}>
                      <li>Key Focus: Web Design (HTML, CSS, PHP, JavaScript), Technical Writing, and Project Coordination.</li>
                    </ul>
                  </div>

                  <div style={{ 
                    background: '#dfdfdf', 
                    border: '2px solid #808080', 
                    padding: '10px'
                  }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Senior High School: Arts and Design Track (Theater Arts) | 2020 – 2022</p>
                    <p style={{ margin: '3px 0', fontSize: '12px' }}>Baybay City Senior High School, Baybay City</p>
                    <ul style={{ margin: '5px 0 0 20px', fontSize: '12px' }}>
                      <li>Work Immersion: Specialized in mounting cultural performances and incorporating Philippine heritage elements into creative outputs.</li>
                    </ul>
                  </div>
                </div>

                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={gradPic} alt="Grad photo" style={{ maxWidth: '150px', height: 'auto', border: '2px solid #808080' }} />
                </div>
            </div>

            {/* Section 3: Career Goals */}
            <div style={{ padding: '8px', backgroundColor: '#dfdfdf', border: '2px solid #808080' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '14px', textAlign: 'center' }}>Career goals</p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    background: '#dfdfdf', 
                    border: '2px solid #808080', 
                    padding: '12px',
                    fontSize: '12px',
                    lineHeight: '1.5'
                  }}>
                    <p>"Theater is my roots, writing is my voice, and IT is my new favorite medium. I don't see a wall between 'Technical' and 'Creative.' For me, UI/UX design and QA are just ways to make sure a digital experience feels as intentional as a well-directed play. My dream is to bridge the gap between the screen and the soul—using Cloud tools and Web analytics to amplify Philippine heritage, while still making time to write novels, design clothes, and paint. I'm here to prove that code can be as beautiful as a canvas, as long as you have the heart to tell a story with it."</p>
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
                    fontSize: '12px',
                    lineHeight: '1.5'
                  }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>Actual Career Goal:</p>
                    <p style={{ margin: 0, textAlign: 'center' }}>Maging office siren, whimsy, femme-fatale, nakiki-bandwagon ride sa nice trends, employee na nagdadress up according sa demographics ng job, f*ck the government, girl-boss, mamaatay din naman tayong lahat worker sipping on matchiall and yosi.</p>
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
                    fontSize: '12px'
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
                    fontSize: '12px'
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
                      fontSize: '12px'
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
                      fontSize: '12px'
                    }}>
                      <p>And gumawa din me ng LetterBoxd kasi nakakatuwa naman if dito pa ako gagawa ng lists diba hay. HAHAHAHAHA kulang pa yung lists but i hope ykwim in these lists. Horror, alternative girlie since childhood.</p>
                    </div>
                  </div>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {spotifyImg && (
                    <img src={spotifyImg} alt="Spotify profile" style={{ width: '100%', height: 'auto', border: '2px solid #808080' }} />
                  )}
                  {letterboxdImg && (
                    <img src={letterboxdImg} alt="Letterboxd profile" style={{ width: '100%', height: 'auto', border: '2px solid #808080' }} />
                  )}
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}
