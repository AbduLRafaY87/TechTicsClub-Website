import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import PagePlaceholder from './pages/PagePlaceholder.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import Courses from './pages/Courses/Courses.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'
import Partners from './pages/Partners/Partners.jsx'
import RecentTrendsNews from './pages/RecentTrendsNews/RecentTrendsNews.jsx'
import ResearchAndDevelopment from './pages/ResearchAndDevelopment/ResearchAndDevelopment.jsx'
import Resources from './pages/Resources/Resources.jsx'
import RoboFest from './pages/RoboFest/RoboFest.jsx'
import StudentWiki from './pages/StudentWiki/StudentWiki.jsx'
import './App.css'
import HomePage from './pages/HomePage/HomePage.jsx'

const sections = {
  'TechTics Club': [
    { label: 'Home', path: '/' },
    { label: 'Recent Trends/News', path: '/recent-trends-news' },
    { label: 'About Us', path: '/about-us' },
    { label: 'RoboFest', path: '/robofest' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact-us' },
  ],
  EduVision: [
    { label: 'Courses', path: '/courses' },
    { label: 'Resources', path: '/resources' },
    { label: 'Student Wiki', path: '/student-wiki' },
    { label: 'R&D', path: '/r-and-d' },
    { label: 'Partners', path: '/partners' },
  ],
  Shop: [],
}

const sectionPaths = {
  'TechTics Club': '/',
  EduVision: '/courses',
  Shop: '/shop',
}

function App() {
  return (
    <>
      <Navbar sections={sections} sectionPaths={sectionPaths} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recent-trends-news" element={<RecentTrendsNews />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/robofest" element={<RoboFest />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/student-wiki" element={<StudentWiki />} />
        <Route path="/r-and-d" element={<ResearchAndDevelopment />} />
        <Route path="/partners" element={<Partners />} />
        <Route
          path="/shop"
          element={
            <PagePlaceholder
              title="Shop"
              description="This page is coming soon."
            />
          }
        />
        <Route
          path="/sign-in"
          element={
            <PagePlaceholder
              title="Sign In"
              description="Sign-in will be available soon."
            />
          }
        />
        <Route
          path="*"
          element={
            <PagePlaceholder
              title="Page not found"
              description="The page you are looking for does not exist."
              linkTo="/"
              linkText="Back to home"
            />
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
