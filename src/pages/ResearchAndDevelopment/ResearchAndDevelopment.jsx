import './ResearchAndDevelopment.css'

const pillars = [
  {
    number: '01',
    name: 'Think',
    title: 'Start with a real question',
    description:
      'Identify a real-world problem, explore an AI or robotics approach, and shape it into a focused, measurable research question.',
  },
  {
    number: '02',
    name: 'Build',
    title: 'Make it work',
    description:
      'Develop and test a functional hardware or software prototype. Teams iterate, troubleshoot, and demonstrate their work live.',
  },
  {
    number: '03',
    name: 'Write',
    title: 'Document the research',
    description:
      'Turn the process and results into a mini research paper using an internationally recognized format.',
  },
  {
    number: '04',
    name: 'Show',
    title: 'Share it with the world',
    description:
      'Present at a national student conference and preserve the finished work in a public, permanent digital library.',
  },
]

const roadmap = [
  {
    number: '01',
    period: 'Month 1',
    title: 'Register & approve',
    description:
      'Schools confirm participation, submit team rosters, and scope project themes. TechTics Club provides onboarding and assigns mentors.',
  },
  {
    number: '02',
    period: 'Months 2–4',
    title: 'Build & iterate',
    description:
      'Teams receive weekly live mentoring, technical feedback, and peer review as they move from an idea to a working prototype.',
  },
  {
    number: '03',
    period: 'Month 5',
    title: 'Submit the work',
    description:
      'Teams submit their research paper, prototype documentation, source code, and supporting media for official review.',
  },
  {
    number: '04',
    period: 'Two weeks',
    title: 'Independent review',
    description:
      'TechTics researchers and external industry judges conduct a structured, confidential blind review against clear rubrics.',
  },
  {
    number: '05',
    period: 'One day',
    title: 'Conference & awards',
    description:
      'Teams present to judges, sponsors, and a live audience. Best Paper Awards, scholarships, and certificates are presented.',
  },
]

const schoolBenefits = [
  'National conference access for all team members',
  'Expert technical review of papers and prototypes',
  'Official participation certificates for every student',
  'A permanent AIRSC Library entry for the school',
  'Eligibility for scholarships, internships, and apprenticeships',
  'Five months of live mentoring from AI and robotics practitioners',
]

const sponsorBenefits = [
  ['Brand visibility', '  Logo placement across physical and digital program materials.'],
  ['Lasting recognition', 'Permanent sponsor credit in the AIRSC Digital Library.'],
  ['Named awards', 'Sponsor-named awards and recognition at the conference.'],
  ['Talent access', 'Early access to high-performing student innovators for internships and hiring.'],
  ['Media reach', 'Recognition in program press releases and social media campaigns.'],
]

const deliverables = [
  {
    number: '01',
    title: 'A working prototype',
    detail:
      'A tested AI or robotics project, developed through iteration and demonstrated live.',
  },
  {
    number: '02',
    title: 'A research paper',
    detail:
      'A student-authored paper that records the research question, process, and results.',
  },
  {
    number: '03',
    title: 'A lasting digital portfolio',
    detail:
      'A public library entry with code, diagrams, data, prototype photos, and a comprehensive README.',
  },
  {
    number: '04',
    title: 'Recognition & opportunity',
    detail:
      'Certificates for every participant, with awards, scholarships, and internship pathways for top work.',
  },
]

function ResearchAndDevelopment() {
  return (
    <main className="airsc-page">
      <section className="airsc-hero" id="overview">
        <div className="airsc-hero__glow" aria-hidden="true" />
        <div className="airsc-container airsc-hero__content">
          <p className="airsc-eyebrow">
            {/* <span className="airsc-eyebrow__mark" /> */}
            A TechTics Club initiative · 2026
          </p>
          <p className="airsc-hero__wordmark">AIRSC</p>
          <h1>Artificial Intelligence &amp; Robotics Student Conference</h1>
          <p className="airsc-hero__summary">
            A five-month research-to-prototype journey helping students turn
            bold questions into work that matters.
          </p>
          <div className="airsc-hero__actions">
            <a className="airsc-button airsc-button--gold" href="#journey">
              Explore the journey <span aria-hidden="true">↓</span>
            </a>
            <a
              className="airsc-button airsc-button--outline"
              href="mailto:techticsclub@gmail.com?subject=AIRSC%202026%20partnership"
            >
              Partner with us <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="airsc-hero__note">
            For schools, collaborators, and sponsors
          </p>
        </div>
        <div className="airsc-hero__orb airsc-hero__orb--one" aria-hidden="true" />
        <div className="airsc-hero__orb airsc-hero__orb--two" aria-hidden="true" />
      </section>

      <section className="airsc-facts" aria-label="AIRSC at a glance">
        <div className="airsc-container airsc-facts__grid">
          <div className="airsc-fact">
            <span className="airsc-fact__value">05</span>
            <span className="airsc-fact__label">months of mentorship</span>
          </div>
          <div className="airsc-fact">
            <span className="airsc-fact__value">1–2</span>
            <span className="airsc-fact__label">teams per school</span>
          </div>
          <div className="airsc-fact">
            <span className="airsc-fact__value">Rs 1,500</span>
            <span className="airsc-fact__label">one-time fee per team</span>
          </div>
          <div className="airsc-fact">
            <span className="airsc-fact__value">100%</span>
            <span className="airsc-fact__label">non-profit initiative</span>
          </div>
        </div>
      </section>

      <div className="airsc-container">
        <nav className="airsc-toc" aria-label="On this page">
          <span className="airsc-toc__label">Explore AIRSC</span>
          <a href="#mission">Mission</a>
          <a href="#ecosystem">Partners</a>
          <a href="#outcomes">Student outcomes</a>
          <a href="#journey">The journey</a>
          <a href="#investment">Investment</a>
          <a href="#ownership">Student ownership</a>
        </nav>

        <section
          className="airsc-section airsc-mission"
          id="mission"
          aria-labelledby="airsc-mission-title"
        >
          <div className="airsc-section-heading">
            <p className="airsc-kicker">01 / The mission</p>
            <h2 id="airsc-mission-title">
              Less theory. More <span>make, test, learn.</span>
            </h2>
            <p>
              AIRSC develops a supervised research culture among young
              students, encourages responsible innovation in AI and robotics,
              and preserves completed work as a resource for the next
              generation.
            </p>
          </div>

          <div className="airsc-mission__statement">
            <span className="airsc-mission__quote" aria-hidden="true">
              “
            </span>
            <p>
              From a question worth asking to a prototype worth sharing,
              students learn to take an idea all the way to evidence.
            </p>
            <span className="airsc-mission__caption">
              The AIRSC learning loop
            </span>
          </div>

          <div className="airsc-pillar-grid">
            {pillars.map((pillar) => (
              <article className="airsc-pillar" key={pillar.number}>
                <span className="airsc-card-number">{pillar.number}</span>
                <p className="airsc-pillar__name">{pillar.name}</p>
                <h3>{pillar.title}</h3>
                <p className="airsc-pillar__description">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="airsc-section airsc-ecosystem"
          id="ecosystem"
          aria-labelledby="airsc-ecosystem-title"
        >
          <div className="airsc-section-heading airsc-section-heading--split">
            <div>
              <p className="airsc-kicker">02 / The collaboration triangle</p>
              <h2 id="airsc-ecosystem-title">
                Three players. <span>One mission.</span>
              </h2>
            </div>
            <p>
              AIRSC brings together program expertise, school communities, and
              practical support so students can focus on ambitious work.
            </p>
          </div>

          <div className="airsc-ecosystem__grid">
            <article className="airsc-ecosystem-card">
              <span className="airsc-ecosystem-card__role">The leaders</span>
              <h3>TechTics Club</h3>
              <p>
                Program design and lifecycle, real-time evaluation, research
                paper reviews, and long-term hosting of the AIRSC Library.
              </p>
              <span className="airsc-ecosystem-card__index">01</span>
            </article>
            <article className="airsc-ecosystem-card airsc-ecosystem-card--gold">
              <span className="airsc-ecosystem-card__role">The talent</span>
              <h3>Schools</h3>
              <p>
                Enroll up to two student teams, provide lab space, coordinate
                schedules, and help fund student projects.
              </p>
              <span className="airsc-ecosystem-card__index">02</span>
            </article>
            <article className="airsc-ecosystem-card">
              <span className="airsc-ecosystem-card__role">The support</span>
              <h3>Sponsors &amp; collaborators</h3>
              <p>
                Support the program through venue, equipment, incentives, and
                prizes—then connect with the outcomes.
              </p>
              <span className="airsc-ecosystem-card__index">03</span>
            </article>
          </div>

          <div className="airsc-recognition">
            <div className="airsc-recognition__intro">
              <p className="airsc-kicker">For sponsors</p>
              <h3>Visible support. Lasting value.</h3>
            </div>
            <div className="airsc-recognition__items">
              <p><strong>Brand presence</strong> on event materials and student library entries</p>
              <p><strong>Named recognition</strong> in awards and conference communications</p>
              <p><strong>Talent pipeline</strong> to emerging innovators across Pakistan</p>
            </div>
          </div>
        </section>

        <section
          className="airsc-section airsc-outcomes"
          id="outcomes"
          aria-labelledby="airsc-outcomes-title"
        >
          <div className="airsc-section-heading">
            <p className="airsc-kicker">03 / Student deliverables</p>
            <h2 id="airsc-outcomes-title">
              Leave with more than <span>a certificate.</span>
            </h2>
            <p>
              Every selected project earns a permanent place in a public
              student portfolio, created and credited by the students behind
              it.
            </p>
          </div>
          <div className="airsc-deliverables">
            {deliverables.map((item) => (
              <article className="airsc-deliverable" key={item.number}>
                <span className="airsc-card-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
                <span className="airsc-deliverable__arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
          <p className="airsc-outcomes__note">
            The conference culminates in student presentations, Best Paper
            Awards, and monetary rewards or scholarships for top-performing
            teams.
          </p>
        </section>

        <section
          className="airsc-section airsc-roadmap"
          id="journey"
          aria-labelledby="airsc-roadmap-title"
        >
          <div className="airsc-section-heading airsc-section-heading--split">
            <div>
              <p className="airsc-kicker">04 / Operational roadmap</p>
              <h2 id="airsc-roadmap-title">
                Five months from <span>idea to impact.</span>
              </h2>
            </div>
            <p>
              A guided program with milestones, weekly mentoring, structured
              review, and a national showcase.
            </p>
          </div>
          <ol className="airsc-timeline">
            {roadmap.map((step) => (
              <li className="airsc-timeline__step" key={step.number}>
                <div className="airsc-timeline__top">
                  <span>{step.number}</span>
                  <span className="airsc-timeline__period">{step.period}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="airsc-section airsc-investment"
          id="investment"
          aria-labelledby="airsc-investment-title"
        >
          <div className="airsc-section-heading">
            <p className="airsc-kicker">05 / Financial structure</p>
            <h2 id="airsc-investment-title">
              Built to be <span>accessible.</span>
            </h2>
            <p>
              The school participation fee covers conference access and
              program benefits. Sponsors and collaborators help make the
              national showcase possible.
            </p>
          </div>
          <div className="airsc-investment__grid">
            <article className="airsc-fee-card">
              <div className="airsc-fee-card__header">
                <p className="airsc-kicker">For schools</p>
                <span className="airsc-fee-card__tag">One-time fee · per team</span>
              </div>
              <p className="airsc-fee-card__price">
                <span>Rs</span> 1,500
              </p>
              <p className="airsc-fee-card__summary">
                One-time participation fee for the AIRSC program.
              </p>
              <h3>What’s included</h3>
              <ul className="airsc-check-list">
                {schoolBenefits.map((benefit) => (
                  <li key={benefit}>
                    <span aria-hidden="true">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </article>

            <article className="airsc-sponsor-card">
              <p className="airsc-kicker">For sponsors &amp; collaborators</p>
              <h3>Back the people building what’s next.</h3>
              <p className="airsc-sponsor-card__intro">
                TechTics Club handles the technical program. Sponsor support
                helps provide venue, equipment, and prizes, with visibility
                across the program.
              </p>
              <ul className="airsc-sponsor-list">
                {sponsorBenefits.map(([title, detail]) => (
                  <li key={title}>
                    <span className="airsc-sponsor-list__dot" aria-hidden="true" />
                    <p>
                      <strong>{title}</strong>
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
              <a
                className="airsc-text-link"
                href="mailto:techticsclub@gmail.com?subject=AIRSC%202026%20sponsorship"
              >
                Discuss partnership <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </section>

        <section
          className="airsc-ownership"
          id="ownership"
          aria-labelledby="airsc-ownership-title"
        >
          <div className="airsc-ownership__copy">
            <p className="airsc-kicker">06 / Governance · non-negotiable</p>
            <h2 id="airsc-ownership-title">
              Student work. <span>Student-owned.</span>
            </h2>
            <p>
              Students retain 100% ownership of their intellectual property,
              code, research, prototypes, and creative work. TechTics Club is
              the program facilitator and library host only; it does not
              claim, license, or commercialize student work.
            </p>
          </div>
          <div className="airsc-ownership__points">
            <article>
              <span>01</span>
              <div>
                <h3>Full attribution</h3>
                <p>
                  Students and assigned mentors are credited in publications,
                  library entries, and exhibitions.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Freedom to publish</h3>
                <p>
                  Students may independently submit their research to external
                  journals or conferences without restriction.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          className="airsc-section airsc-values"
          aria-labelledby="airsc-values-title"
        >
          <div className="airsc-section-heading">
            <p className="airsc-kicker">07 / Why partner with AIRSC</p>
            <h2 id="airsc-values-title">
              A legacy that <span>keeps moving.</span>
            </h2>
          </div>
          <div className="airsc-values__grid">
            <article>
              <span className="airsc-values__symbol" aria-hidden="true">↗</span>
              <h3>Pakistan-first platform</h3>
              <p>
                Positioned as a Pakistan-first initiative bringing AI,
                robotics, and research together for school and high-school
                students.
              </p>
            </article>
            <article>
              <span className="airsc-values__symbol" aria-hidden="true">∞</span>
              <h3>Permanent impact</h3>
              <p>
                The AIRSC Library keeps student work publicly accessible and
                citable beyond the program itself.
              </p>
            </article>
            <article>
              <span className="airsc-values__symbol" aria-hidden="true">✓</span>
              <h3>Professional standards</h3>
              <p>
                Papers are reviewed against research standards, and prototypes
                are tested against real-world criteria.
              </p>
            </article>
          </div>
        </section>

        <section className="airsc-contact" aria-labelledby="airsc-contact-title">
          <div>
            <p className="airsc-kicker">Ready to build the next generation?</p>
            <h2 id="airsc-contact-title">
              Take the next step <span>with AIRSC.</span>
            </h2>
            <p>
              For school participation, sponsorship, or collaboration, get in
              touch with the TechTics Club team.
            </p>
          </div>
          <div className="airsc-contact__details">
            <p className="airsc-contact__label">Program contact</p>
            <p className="airsc-contact__name">Ms. Durraiyah Muneer</p>
            <a href="mailto:techticsclub@gmail.com">techticsclub@gmail.com</a>
            <a href="mailto:research@techticsclub.com">
              research@techticsclub.com
            </a>
          </div>
        </section>
        <p className="airsc-disclaimer">
          TechTics Club is a private organization. AIRSC 2026 is operated as a
          100% non-profit initiative.
        </p>
      </div>
    </main>
  )
}

export default ResearchAndDevelopment
