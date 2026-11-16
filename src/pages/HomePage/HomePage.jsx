import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const heroSlides = [
  {
    eyebrow: 'Technology for everyone',
    title: 'Curiosity today. Innovation tomorrow.',
    description:
      'A place for students to learn new skills, build bold ideas, and discover what technology can make possible.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=85',
    imageAlt: '',
  },
  {
    eyebrow: 'AI · Robotics · Research',
    title: 'Ideas deserve the chance to become real.',
    description:
      'From the first question to a working prototype, we help young innovators turn imagination into meaningful work.',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2000&q=85',
    imageAlt: '',
  },
  {
    eyebrow: 'A community of makers',
    title: 'Learn together. Build what matters.',
    description:
      'Meet mentors, take on real challenges, and grow alongside a community that believes in the next generation.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85',
    imageAlt: '',
  },
]

const featuredPrograms = [
  {
    year: '2026 · Research',
    title: 'AIRSC',
    subtitle: 'Artificial Intelligence & Robotics Student Conference',
    description:
      'A five-month research journey where student teams design, build, document, and present original AI and robotics projects.',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1800&q=85',
    alt: 'A close-up of a robotics project',
    path: '/r-and-d',
    action: 'Explore AIRSC',
  },
  {
    year: 'Student robotics',
    title: 'RoboFest',
    subtitle: 'Think it. Build it. Put it to the test.',
    description:
      'A celebration of student engineering, creative problem-solving, and the exciting world of robotics.',
    image:
      'https://images.unsplash.com/photo-1561144257-e32e8efc6f29?auto=format&fit=crop&w=1800&q=85',
    alt: 'A small robot built for a student robotics project',
    path: '/robofest',
    action: 'Discover RoboFest',
  },
  {
    year: 'Learning · Ongoing',
    title: 'EduVision',
    subtitle: 'Learning paths for the next generation',
    description:
      'Explore courses and resources designed to make technology approachable, practical, and fun to learn.',
    image:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1800&q=85',
    alt: 'Students learning together in a classroom',
    path: '/courses',
    action: 'Explore EduVision',
  },
  {
    year: 'Community · Ongoing',
    title: 'TechTics Club',
    subtitle: 'A community of curious makers',
    description:
      'Meet like-minded students, learn from mentors, and find a welcoming place to start building.',
    image:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1800&q=85',
    alt: 'Students sharing ideas in a group',
    path: '/about-us',
    action: 'Meet the community',
  },
  {
    year: 'Hands-on learning',
    title: 'Tech Workshops',
    subtitle: 'Skills you can put to work',
    description:
      'Explore programming, creative technology, and practical tools through guided, hands-on sessions.',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3e3a8b6b?auto=format&fit=crop&w=1800&q=85',
    alt: 'A student learning with hands-on technology tools',
    path: '/courses',
    action: 'View learning programs',
  },
]

const offers = [
  {
    icon: '</>',
    title: 'Technical Workshops',
    description:
      'Hands-on workshops on the latest technologies, programming languages, and tools.',
    tone: 'blue',
  },
  {
    icon: '✳',
    title: 'Competitions',
    description:
      'Participate in hackathons, coding challenges, and robotics competitions.',
    tone: 'cyan',
  },
  {
    icon: '◎',
    title: 'Community',
    description:
      'Join a vibrant community of tech enthusiasts, mentors, and industry professionals.',
    tone: 'violet',
  },
]

const events = [
  {
    date: 'Date to be announced',
    type: 'Research conference',
    title: 'AIRSC 2026',
    description:
      'A national showcase for student AI and robotics projects, research papers, and fresh ideas.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    alt: 'Students collaborating around a laptop',
  },
  {
    date: 'Date to be announced',
    type: 'Robotics',
    title: 'RoboFest',
    description:
      'Bring your curiosity, meet fellow makers, and celebrate creative engineering and robotics.',
    image:
      'https://images.unsplash.com/photo-1561144257-e32e8efc6f29?auto=format&fit=crop&w=1000&q=80',
    alt: 'A robotics project on a workbench',
  },
  {
    date: 'Date to be announced',
    type: 'Workshop',
    title: 'AI & Robotics Open Lab',
    description:
      'Get hands-on with emerging technologies and see how a big idea can become a first prototype.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    alt: 'A student working on a hands-on technology project',
  },
]

const partnerGroups = [
  'Schools',
  'Mentors',
  'Industry',
  'Community',
]

const testimonials = [
  {
    quote:
      'I discovered that technology is not just something to use. It is something I can understand, shape, and build with.',
    name: 'Student participant',
    role: 'AIRSC · sample testimonial',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=80',
    alt: 'Sample portrait for testimonial design',
  },
  {
    quote:
      'The best part is getting to try new ideas, learn from mistakes, and share the process with people who are just as curious.',
    name: 'Workshop attendee',
    role: 'Technical workshops · sample testimonial',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=80',
    alt: 'Sample portrait for testimonial design',
  },
  {
    quote:
      'Being part of a community that encourages questions makes it easier to take the first step and keep learning.',
    name: 'Community member',
    role: 'TechTics Club · sample testimonial',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=180&q=80',
    alt: 'Sample portrait for testimonial design',
  },
]

function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterMessage, setNewsletterMessage] = useState('')
  const programTrackRef = useRef(null)

  const activeHero = heroSlides[heroIndex]

  function moveHero(direction) {
    setHeroIndex(
      (current) => (current + direction + heroSlides.length) % heroSlides.length,
    )
  }

  function moveProgram(direction) {
    const track = programTrackRef.current
    const firstSlide = track?.querySelector('.home-program-slide')

    if (!track || !firstSlide) return

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0
    track.scrollBy({
      left: direction * (firstSlide.getBoundingClientRect().width + gap),
      behavior: 'smooth',
    })
  }

  function handleNewsletterSubmit(event) {
    event.preventDefault()

    const subject = encodeURIComponent('TechTics Club newsletter subscription')
    const body = encodeURIComponent(
      `Please add ${newsletterEmail} to the TechTics Club newsletter.`,
    )

    window.location.href = `mailto:info@techticsclub.com?subject=${subject}&body=${body}`
    setNewsletterMessage(
      'Your email app will open with a subscription request. Send the message to complete signup.',
    )
  }

  return (
    <main className="home-page">
      <section
        className="home-hero"
        aria-label="TechTics Club introduction"
        aria-roledescription="carousel"
      >
        {heroSlides.map((slide, index) => (
          <div
            aria-hidden="true"
            className={`home-hero__image${index === heroIndex ? ' is-active' : ''}`}
            key={slide.title}
          >
            <img src={slide.image} alt={slide.imageAlt} />
          </div>
        ))}
        <div className="home-hero__scrim" />

        <div className="home-container home-hero__inner">
          <div className="home-hero__copy" aria-live="polite" aria-atomic="true">
            <p className="home-eyebrow">
              <span className="home-eyebrow__dot" />
              {activeHero.eyebrow}
            </p>
            <h1>{activeHero.title}</h1>
            <p className="home-hero__description">
              {activeHero.description}
            </p>
            <div className="home-hero__actions">
              <a className="home-button home-button--primary" href="#featured">
                Explore our programs <span aria-hidden="true">↗</span>
              </a>
              <Link className="home-button home-button--quiet" to="/about-us">
                About TechTics Club
              </Link>
            </div>
          </div>

          <div className="home-hero__bottom">
            <span className="home-hero__counter">
              <strong>0{heroIndex + 1}</strong>
              <span className="home-hero__counter-divider" />
              0{heroSlides.length}
            </span>
            <div
              aria-label="Hero slider controls"
              className="home-slider-controls"
              role="group"
            >
              <button
                aria-label="Previous slide"
                className="home-slider-arrow"
                onClick={() => moveHero(-1)}
                type="button"
              >
                <span aria-hidden="true">←</span>
              </button>
              <div className="home-slider-dots">
                {heroSlides.map((slide, index) => (
                  <button
                    aria-current={index === heroIndex ? 'true' : undefined}
                    aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                    className={`home-slider-dot${index === heroIndex ? ' is-active' : ''}`}
                    key={slide.title}
                    onClick={() => setHeroIndex(index)}
                    type="button"
                  />
                ))}
              </div>
              <button
                aria-label="Next slide"
                className="home-slider-arrow"
                onClick={() => moveHero(1)}
                type="button"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
            <span className="home-hero__signature">
              Learn <i>·</i> Build <i>·</i> Belong
            </span>
          </div>
        </div>
      </section>

      <section
        className="home-section home-featured"
        id="featured"
        aria-labelledby="home-featured-title"
      >
        <div className="home-container">
          <div className="home-section-heading home-section-heading--row">
            <div>
              <p className="home-kicker">Make something meaningful</p>
              <h2 id="home-featured-title">
                Programs that turn <span>curiosity into action.</span>
              </h2>
            </div>
            <div
              className="home-featured__controls"
              role="group"
              aria-label="Featured program controls"
            >
              <button
                aria-label="Previous featured program"
                className="home-slider-arrow home-slider-arrow--light"
                onClick={() => moveProgram(-1)}
                type="button"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                aria-label="Next featured program"
                className="home-slider-arrow home-slider-arrow--light"
                onClick={() => moveProgram(1)}
                type="button"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div
            aria-label="Featured programs"
            aria-roledescription="carousel"
            className="home-program-carousel"
            role="region"
          >
            <div
              className="home-program-carousel__track"
              ref={programTrackRef}
            >
              {featuredPrograms.map((program, index) => (
                <article
                  aria-label={`${program.title}, slide ${index + 1} of ${featuredPrograms.length}`}
                  aria-roledescription="slide"
                  className="home-program-slide"
                  key={program.title}
                >
                  <img
                    alt={program.alt}
                    className="home-program-slide__image"
                    loading="lazy"
                    src={program.image}
                  />
                  <div className="home-program-slide__shade" />
                  <p className="home-program-slide__hint">
                    <span aria-hidden="true">✦</span> Hover to explore
                  </p>
                  <div className="home-program-slide__content">
                    <p className="home-program-slide__year">{program.year}</p>
                    <h3>{program.title}</h3>
                    <p className="home-program-slide__subtitle">
                      {program.subtitle}
                    </p>
                    <p className="home-program-slide__description">
                      {program.description}
                    </p>
                    <Link to={program.path}>
                      {program.action} <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="home-program-carousel__footer">
            <p>Scroll or swipe to explore our programs</p>
            <Link to="/courses">
              Explore all programs <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="home-section home-offers"
        id="offerings"
        aria-labelledby="home-offers-title"
      >
        <div className="home-container">
          <div className="home-section-heading">
            <p className="home-kicker">What we offer</p>
            <h2 id="home-offers-title">
              A space to <span>learn, compete, and connect.</span>
            </h2>
            <p>
              We bring together the skills, experiences, and people that help
              young innovators find their next big idea.
            </p>
          </div>
          <div className="home-offers__grid">
            {offers.map((offer, index) => (
              <article
                className={`home-offer-card home-offer-card--${offer.tone}`}
                key={offer.title}
              >
                <div className="home-offer-card__top">
                  <span className="home-offer-card__icon" aria-hidden="true">
                    {offer.icon}
                  </span>
                  <span className="home-offer-card__number">
                    0{index + 1}
                  </span>
                </div>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <span className="home-offer-card__line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="home-section home-events"
        id="upcoming-events"
        aria-labelledby="home-events-title"
      >
        <div className="home-container">
          <div className="home-section-heading home-section-heading--row">
            <div>
              <p className="home-kicker">Save your curiosity a seat</p>
              <h2 id="home-events-title">
                Upcoming <span>events.</span>
              </h2>
            </div>
            <p className="home-events__note">
              Dates and registration details will be announced soon.
            </p>
          </div>
          <div className="home-events__grid">
            {events.map((event) => (
              <article className="home-event-card" key={event.title}>
                <div className="home-event-card__image-wrap">
                  <img
                    alt={event.alt}
                    className="home-event-card__image"
                    loading="lazy"
                    src={event.image}
                  />
                  <span className="home-event-card__type">{event.type}</span>
                </div>
                <div className="home-event-card__content">
                  <p className="home-event-card__date">
                    <span aria-hidden="true">◷</span> {event.date}
                  </p>
                  <h3>{event.title}</h3>
                  <p className="home-event-card__description">
                    {event.description}
                  </p>
                  <Link className="home-event-card__register" to="/contact-us">
                    Register interest <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="home-section home-testimonials"
        aria-labelledby="home-testimonials-title"
      >
        <div className="home-container">
          <div className="home-section-heading home-section-heading--center">
            <p className="home-kicker">Stories from our community</p>
            <h2 id="home-testimonials-title">
              Growing together, <span>one idea at a time.</span>
            </h2>
            <p>
              Every builder starts somewhere. Here are sample testimonial
              cards ready to be replaced with approved community stories.
            </p>
          </div>
          <div className="home-testimonials__grid">
            {testimonials.map((testimonial) => (
              <article
                className="home-testimonial-card"
                key={testimonial.role}
              >
                <span
                  className="home-testimonial-card__quote-mark"
                  aria-hidden="true"
                >
                  “
                </span>
                <span className="home-testimonial-card__sample">
                  Sample quote
                </span>
                <blockquote>{testimonial.quote}</blockquote>
                <div className="home-testimonial-card__author">
                  <img
                    alt={testimonial.alt}
                    loading="lazy"
                    src={testimonial.image}
                  />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="home-section home-partners"
        aria-labelledby="home-partners-title"
      >
        <div className="home-container">
          <div className="home-section-heading home-section-heading--center">
            <p className="home-kicker">Better, together</p>
            <h2 id="home-partners-title">
              A community built <span>with partners.</span>
            </h2>
            <p>
              We work alongside the people who make hands-on learning possible.
              Partner directory coming soon.
            </p>
          </div>
          <div className="home-partners__grid">
            <img
              alt="Partner1"
              loading="lazy"
              src="/partners/partner1.png"
            />
            <img
              alt="Partner1"
              loading="lazy"
              src="/partners/partner2.png"
            />
            <img
              alt="Partner1"
              loading="lazy"
              src="/partners/partner3.png"
            />
          </div>
        </div>
      </section>

      <section
        className="home-newsletter"
        id="newsletter"
        aria-labelledby="home-newsletter-title"
      >
        <div className="home-container home-newsletter__inner">
          <div className="home-newsletter__copy">
            <p className="home-kicker">A little inspiration in your inbox</p>
            <h2 id="home-newsletter-title">
              Stay in the <span>loop.</span>
            </h2>
            <p>
              Get updates about programs, events, and opportunities from
              TechTics Club.
            </p>
          </div>
          <form
            className="home-newsletter__form"
            onSubmit={handleNewsletterSubmit}
          >
            <label className="home-sr-only" htmlFor="newsletter-email">
              Your email address
            </label>
            <div className="home-newsletter__input-row">
              <input
                autoComplete="email"
                id="newsletter-email"
                name="email"
                onChange={(event) => setNewsletterEmail(event.target.value)}
                placeholder="Enter your email address"
                required
                type="email"
                value={newsletterEmail}
              />
              <button type="submit">
                Subscribe <span aria-hidden="true">↗</span>
              </button>
            </div>
            <p aria-live="polite" className="home-newsletter__disclaimer">
              {newsletterMessage ||
                'Submitting opens your email app so you can send your subscription request.'}
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default HomePage
