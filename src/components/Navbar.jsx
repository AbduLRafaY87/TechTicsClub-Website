import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar({ sections, sectionPaths }) {
  const { pathname } = useLocation()
  const activeSection = Object.keys(sections).find(
    (section) =>
      sectionPaths[section] === pathname ||
      sections[section].some((link) => link.path === pathname),
  )
  const links = activeSection ? sections[activeSection] : []

  return (
    <>
      <header className="navbar">
        <nav className="navbar__primary" aria-label="Main navigation">
          <div className="navbar__primary-inner">
            <div className="navbar__sections">
              {Object.keys(sections).map((section) => (
                <NavLink
                  className={`navbar__section-link${activeSection === section ? ' is-active' : ''}`}
                  key={section}
                  to={sectionPaths[section]}
                >
                  {section}
                </NavLink>
              ))}
            </div>
            <NavLink
              className={`navbar__sign-in${pathname === '/sign-in' ? ' is-active' : ''}`}
              to="/sign-in"
            >
              Sign In
            </NavLink>
          </div>
        </nav>
      </header>

      {links.length > 0 && (
        <nav
          className="navbar__secondary"
          aria-label={`${activeSection} navigation`}
        >
          <div className="navbar__secondary-inner">
            {links.map(({ label, path }) => (
              <NavLink
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' is-active' : ''}`
                }
                key={path}
                to={path}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </>
  )
}

export default Navbar
