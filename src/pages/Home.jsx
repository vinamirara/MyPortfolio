import windows7Pic from '../Pictures/windows 7.png'

export default function Home({ onClose }) {
  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="window" style={{ width: '90%', maxWidth: '1300px', margin: '40px auto 80px auto' }}>
        <div className="title-bar">
          <div className="title-bar-text">Home</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={onClose} onMouseEnter={(e) => e.target.style.backgroundColor = '#ff0000'} onMouseLeave={(e) => e.target.style.backgroundColor = ''}></button>
          </div>
        </div>

        <div className="window-body">
          <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#003da5', fontSize: '28px' }}>GET TO KNOW ME!</h1>
          
          <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', margin: '20px' }}>
            {/* Left Side - Image */}
            <div style={{ flex: '0 0 250px' }}>
              <img src={windows7Pic} alt="Marian" style={{ width: '100%', border: '2px solid #999', objectFit: 'contain' }} />
            </div>

            {/* Right Side - Info */}
            <div style={{ flex: '1' }}>
              <div style={{ backgroundColor: '#f0f0f0', border: '1px solid #999', padding: '15px', marginBottom: '20px', color: 'black' }}>
                <p style={{ margin: '8px 0' }}><strong>NAME:</strong> Marian Victoria</p>
                <p style={{ margin: '8px 0' }}><strong>NICKNAME:</strong> Yanyan/Yana/Vicki</p>
                <p style={{ margin: '8px 0' }}><strong>STUDENT NUMBER:</strong> 23-267?</p>
                <p style={{ margin: '8px 0' }}><strong>ADDRESS:</strong> Kahit Saan sa Cubao</p>
                <p style={{ margin: '8px 0' }}><strong>AGE:</strong> 21</p>
                <p style={{ margin: '8px 0' }}><strong>BIRTH MONTH:</strong> April</p>
                <p style={{ margin: '8px 0' }}><strong>MBTI TYPE:</strong> INTP</p>
                <p style={{ margin: '8px 0' }}><strong>GENRE:</strong> Kahit ano lang</p>
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button onClick={onClose} style={{ backgroundColor: '#c0c0c0', border: '2px outset #dfdfdf', padding: '8px 16px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', flex: 1 }}>AAAAAAAAA Jumpscare!</button>
                <button onClick={onClose} style={{ backgroundColor: '#c0c0c0', border: '2px outset #dfdfdf', padding: '8px 16px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', flex: 1 }}>What the hale?</button>
                <button onClick={onClose} style={{ backgroundColor: '#c0c0c0', border: '2px outset #dfdfdf', padding: '8px 16px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', flex: 1 }}>No</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
