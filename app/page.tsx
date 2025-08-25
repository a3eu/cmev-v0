'use client'

import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    // Set body styles
    document.body.style.fontFamily = 'Arial, sans-serif'
    document.body.style.lineHeight = '1.6'
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.body.style.color = '#333'
    document.body.style.backgroundColor = '#9CADBA'
  }, [])

  return (
    <>
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
      
      <header style={{
        backgroundColor: '#166579',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        position: 'relative'
      }}>
        <img src="/cmev-logo-web-1.png" alt="Con Música En Vivo Logo" style={{ width: '1.5in' }} />
        <h1 className="kaushan-script-regular" style={{
          fontFamily: 'Kaushan Script, cursive',
          fontSize: '4.0em',
          marginBottom: '0.3em'
        }}>
          ¡Con música en vivo!
        </h1>
        <p>Life is better with live music!</p>
      </header>
      
      <nav style={{
        backgroundColor: '#4E788B',
        color: 'white',
        padding: '0.5rem'
      }}>
        <ul style={{
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <li style={{ margin: '0 1rem' }}><a href="#events" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Events</a></li>
          <li style={{ margin: '0 1rem' }}><a href="#ensembles" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Our Ensembles</a></li>
          <li style={{ margin: '0 1rem' }}><a href="#about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</a></li>
          <li style={{ margin: '0 1rem' }}><a href="#support" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Support</a></li>
          <li style={{ margin: '0 1rem' }}><a href="#contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a></li>
          <li style={{ margin: '0 1rem' }}><a href="#mailing-list" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Mailing List</a></li>
        </ul>
      </nav>
      
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#C5D2DA'
      }}>
        <section id="events" style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            color: '#166579',
            borderBottom: '2px solid #4E788B',
            paddingBottom: '0.5rem'
          }}>Events</h2>
          <p>
            The inaugural concert of the Orquesta Típica Tarareando is at Gradus ad Parnassum Academy 
            recital hall on May 4th, 2025, at 4pm!{' '}
            <a href="https://www.zeffy.com/en-US/ticketing/tango-y-mas">CLICK HERE FOR TICKETS!</a>
          </p>
          
          <div style={{ textAlign: 'center', margin: '1rem 0' }}>
            <img 
              src="/may4thtango.png" 
              alt="May the 4th Tango with You! - Orquesta Típica Tarareando with guest bandoneonista Yukie" 
              style={{ maxWidth: '600px', width: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </div>
        </section>
        
        <section id="ensembles" style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            color: '#166579',
            borderBottom: '2px solid #4E788B',
            paddingBottom: '0.5rem'
          }}>Our Ensembles</h2>
          <h3>Orquesta Típica Tarareando</h3>
          <p>
            A traditional Argentine tango orchestra dedicated to bringing authentic tango music 
            to live dance events and concert performances in the San Francisco Bay Area and beyond.
          </p>
        </section>
        
        <section id="about" style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            color: '#166579',
            borderBottom: '2px solid #4E788B',
            paddingBottom: '0.5rem'
          }}>About Us</h2>
          <p>
            ¡Con música en vivo! is dedicated to supporting live performances and education in 
            Argentine Tango and Modern Chamber Music throughout the San Francisco Bay Area and beyond. 
            Our mission is to create authentic musical experiences that connect performers and audiences 
            through the power of live music.
          </p>
        </section>
        
        <section id="support" style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          backgroundColor: '#f9f9f9',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h2 style={{
            color: '#166579',
            borderBottom: '2px solid #4E788B',
            paddingBottom: '0.5rem'
          }}>Support Our Mission</h2>
          <p>
            Help us continue bringing the beauty of Argentine Tango and Chamber Music to the community. 
            Your support makes live music possible!
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            margin: '1rem 0',
            flexWrap: 'wrap'
          }}>
            <a 
              href="https://donate.stripe.com/eVqbJ3gCIdSj3RL3e3dfG00" 
              style={{
                backgroundColor: '#166579',
                color: 'white',
                padding: '0.5rem 1rem',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: 'bold'
              }}
            >
              Donate via Stripe
            </a>
            <a 
              href="https://www.zeffy.com/en-US/donation-form/support-live-music" 
              style={{
                backgroundColor: '#166579',
                color: 'white',
                padding: '0.5rem 1rem',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: 'bold'
              }}
            >
              Donate via Zeffy
            </a>
          </div>
          
          <p>Or scan this QR code to donate:</p>
          <img src="/qr-code-zeffy-donations.png" alt="QR Code for Donations" style={{ maxWidth: '200px' }} />
        </section>
        
        <section id="contact" style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            color: '#166579',
            borderBottom: '2px solid #4E788B',
            paddingBottom: '0.5rem'
          }}>Contact</h2>
          <p>
            For bookings, questions, or more information, please email us at:{' '}
            <a href="mailto:info@conmusicaenvivo.org">info@conmusicaenvivo.org</a>
          </p>
        </section>
        
        <section id="mailing-list" style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            color: '#166579',
            borderBottom: '2px solid #4E788B',
            paddingBottom: '0.5rem'
          }}>Join Our Mailing List</h2>
          <p>Stay updated on upcoming events and performances!</p>
          
          <div 
            className="zeffy-embed" 
            data-type="newsletter-form" 
            data-url="join-our-mailing-list-4"
          ></div>
        </section>
      </main>
      
      <footer style={{
        backgroundColor: '#166579',
        color: 'white',
        textAlign: 'center',
        padding: '1rem'
      }}>
        <p>&copy; 2025 ¡Con música en vivo! All rights reserved.</p>
      </footer>
      
      <script 
        src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-script.min.js"
        async
      ></script>
    </>
  )
}
