"use client"

import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.href && target.href.includes('#')) {
        e.preventDefault()
        const element = document.querySelector(target.getAttribute('href') || '')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          color: #333;
          background-color: #9CADBA;
        }
        header {
          background-color: #166579;
          color: white;
          text-align: center;
          padding: 1rem;
          position: relative;
        }
        .logo {
          width: 1.5in;
        }
        .kaushan-script-regular {
          font-family: "Kaushan Script", cursive;
          font-weight: 400;
          font-style: normal;
        }
        h1 {
          font-family: 'Kaushan Script', regular;
          font-size: 4.0em;
          margin-bottom: 0.3em;
        }
        nav {
          background-color: #4E788B;
          color: white;
          padding: 0.5rem;
        }
        nav ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
        }
        nav ul li {
          margin: 0 1rem;
        }
        nav ul li a {
          color: white;
          text-decoration: none;
        }
        main {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
          background-color: white;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        section {
          margin-bottom: 2rem;
        }
        section#mailing-list {
          margin-bottom: 0;
        }
        h2 {
          color: #426271;
        }
        .cta-button {
          display: inline-block;
          background-color: #f6b26b;
          color: white;
          padding: 0.5rem 1rem;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        .cta-button:hover {
          background-color: #e69138;
        }
        footer {
          background-color: #166579;
          color: white;
          text-align: center;
          padding: 1rem;
          position: relative;
          bottom: 0;
          width: 100%;
        }
        button.zeffy-btn {
          background-color: #166579;
          border: none;
          border-radius: 5px;
          box-sizing: border-box;
          color: white;
          cursor: pointer;
          left: calc(50% - 75px);
          margin-top: 20px;
          margin-bottom: 20px;
          min-height: 50px;
          min-width: 150px;
          padding: 5px 10px;
          text-transform: uppercase;
          top: calc(50% - 25px);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 600px) {
          nav ul {
            flex-direction: column;
            align-items: center;
          }
          nav ul li {
            margin: 0.5rem 0;
          }
          .logo {
            width: 1.5in;
            height: 1.5in;
          }
          h1 {
            font-size: 2em;
          }
        }
      `}</style>
      
      <header>
        <img className="logo" src="/cmev-logo-web-1.png" alt="Con música en vivo logo" />
        <h1 className="kaushan-script-regular">¡Con música en vivo!</h1>
        <p style={{fontSize: '2em'}}>Life is better with live music!</p>
      </header>
      
      <nav>
        <ul>
          <li><a href="#events">Events</a></li>
          <li><a href="#ensembles">Our Ensembles</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#mailing-list">Mailing List</a></li>
        </ul>
      </nav>
      
      <main>
        <section id="events">
          <h2>Events</h2>
          <p>The inaugural concert of the Orquesta Típica Tarareando is at Gradus ad Parnassum Academy recital hall on May 4th, 2025, at 4pm! <a href="https://www.zeffy.com/ticketing/may-the-4th-tango-with-you">CLICK HERE FOR TICKETS!</a></p>
          <p style={{textAlign: 'center'}}>
            <a href="https://www.zeffy.com/ticketing/may-the-4th-tango-with-you">
              <img src="/may4thtango.png" alt="May 4th Tango Poster" width="70%" style={{padding: '15px'}} />
            </a>
          </p>
        </section>
        
        <section id="ensembles">
          <h2>Our Ensembles</h2>
          <p>Orquesta Típica <i>Tarareando</i>&nbsp;&mdash;&nbsp;Argentine-style Tango orchestra specializing in music for dancing and listening.</p>
          <p>Cuarteto <i>¡Ahora, sí!</i>&nbsp;&mdash;&nbsp;tango quartet for milongas and concerts.</p>
          <p>Duo <i>Luz de neón</i>&nbsp;&mdash;&nbsp;piano/bandoneón/voice duet.</p>
          <p>Book a milonga, a house concert, a special event, a coaching, or a tango musicality workshop with us!</p>
        </section>
        
        <section id="about">
          <h2>About Us</h2>
          <p>Our mission is to support live performances and training in Argentine Tango and Modern Chamber Music throughout the San Francisco Bay Area and beyond.</p>
        </section>
        
        <section id="support">
          <h2>Support</h2>
          <p>Please support live music by coming to our performances!</p>
          <p>As is often the case with performing arts groups, ticket sales only cover a fraction of expenses. 
          If you are in a position to contribute to our cause, please use the donation form below or contact us directly.
          We are a registered 501(3)(c) nonprofit and your donations are tax-deductible.</p>
          
          <button 
            className="zeffy-btn" 
            onClick={() => {
              // @ts-ignore
              if (window.zeffyEmbedForm) {
                // @ts-ignore
                window.zeffyEmbedForm.open('https://www.zeffy.com/embed/donation-form/support-live-music?modal=true')
              } else {
                window.open('https://www.zeffy.com/embed/donation-form/support-live-music', '_blank')
              }
            }}
          >
            Donate
          </button>
          
          <p>
            <img src="/qr-code-zeffy-donations.png" alt="QR code for donations" />
          </p>
        </section>
        
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email: info@conmusicaenvivo.org</p>
        </section>
        
        <section id="mailing-list">
          <h2>Join Our Mailing List</h2>
          <div style={{position: 'relative', overflow: 'hidden', height: '500px', width: '100%'}}>
            <iframe 
              title="Signup form powered by Zeffy" 
              style={{position: 'absolute', border: 0, top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '100%'}} 
              src="https://www.zeffy.com/en-US/embed/newsletter-form/join-our-mailing-list-4" 
              allowTransparency={true}
            />
          </div>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2025 ¡Con música en vivo! All rights reserved.</p>
      </footer>
    </>
  )
}