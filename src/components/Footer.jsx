import './Footer.css'

const quickLinks = [
  ['Recent Trends/News', 'https://techticsclub.com/recent-trends-news.php'],
  ['About Us', 'https://techticsclub.com/about-us.php'],
  ['RoboFest', 'https://techticsclub.com/robofest.php'],
  ['Gallery', 'https://techticsclub.com/gallery.php'],
  ['Contact Us', 'https://techticsclub.com/contact-us.php'],
]

function SocialIcon({ name }) {
  const paths = {
    Facebook: (
      <path d="M13.5 8H11V6.4c0-.8.5-1 1-1h1.4V2.1L11 2c-2.7 0-3.3 2-3.3 3.3V8H6v3h1.7v9H11v-9h2.2l.3-3Z" />
    ),
    Instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.25" />
      </>
    ),
    LinkedIn: (
      <path d="M5.2 7.4a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.6 9h3.2v10H3.6V9Zm5.2 0h3.1v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5V19h-3.2v-4.7c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V19H8.8V9Z" />
    ),
    GitHub: (
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.9.1-.6.4-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.5 5 .4.3.7.9.7 1.8V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    ),
  }

  return (
    <svg aria-hidden="true" className="footer__social-icon" viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  )
}

function ContactIcon({ name }) {
  const paths = {
    location: (
      <>
        <path d="M12 22s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13Z" />
        <circle cx="12" cy="9" r="2.5" className="footer__icon-cutout" />
      </>
    ),
    email: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m3 6 9 7 9-7" className="footer__icon-line" />
      </>
    ),
    phone: (
      <path d="M6.6 2.8 9.3 2c.7-.2 1.4.2 1.6.9l1.2 3.6c.2.6 0 1.2-.5 1.6l-1.8 1.4a14.6 14.6 0 0 0 4.7 4.7l1.4-1.8c.4-.5 1-.7 1.6-.5l3.6 1.2c.7.2 1.1.9.9 1.6l-.8 2.7c-.2.7-.9 1.2-1.7 1.2C10.8 18.6 5.4 13.2 5.4 6c0-.8.5-1.5 1.2-1.7Z" />
    ),
  }

  return (
    <svg aria-hidden="true" className="footer__contact-icon" viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__columns">
          <section className="footer__about" aria-labelledby="footer-brand">
            <h2 className="footer__heading" id="footer-brand">
              TechTicsClub
            </h2>
            <p className="footer__description">
              Empowering the next generation of tech innovators through
              learning, collaboration, and competition.
            </p>
            <div className="footer__socials" aria-label="Social media">
              {[
                ['Facebook', 'https://www.facebook.com/share/1FwMtvXVXR/'],
                [
                  'Instagram',
                  'https://www.instagram.com/techticsclub?igsh=MTEwN2N5NTA1azFnYw==',
                ],
                ['LinkedIn', 'https://pk.linkedin.com/company/techticsclub'],
                ['GitHub', 'https://github.com/TechTicsClub'],
              ].map(([name, url]) => (
                <a
                  aria-label={name}
                  className="footer__social-link"
                  href={url}
                  key={name}
                  rel="noreferrer"
                  target="_blank"
                >
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
          </section>

          <nav className="footer__quick-links" aria-labelledby="footer-quick-links">
            <h2 className="footer__heading" id="footer-quick-links">
              Quick Links
            </h2>
            <ul className="footer__link-list">
              {quickLinks.map(([label, url]) => (
                <li key={label}>
                  <a href={url}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="footer__contact" aria-labelledby="footer-contact">
            <h2 className="footer__heading" id="footer-contact">
              Contact Info
            </h2>
            <ul className="footer__contact-list">
              <li>
                <ContactIcon name="location" />
                <span>
                  Sindh Enterprise Incubation Centre, Block 15,
                  Gulistan-e-Johar, Karachi
                </span>
              </li>
              <li>
                <ContactIcon name="email" />
                <a href="mailto:info@techticsclub.com">info@techticsclub.com</a>
              </li>
              <li>
                <ContactIcon name="phone" />
                <a href="tel:+923258988646">0325-8988646</a>
              </li>
            </ul>
          </section>
        </div>

        <div className="footer__bottom">
          <p>© 2026 TechTics Club. All rights reserved.</p>
          <nav className="footer__legal" aria-label="Legal">
            <a href="https://techticsclub.com/index.php#">Privacy Policy</a>
            <a href="https://techticsclub.com/index.php#">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
