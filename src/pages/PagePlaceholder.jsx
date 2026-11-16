import { Link } from 'react-router-dom'
import './PagePlaceholder.css'

function PagePlaceholder({ title, description, linkTo, linkText }) {
  return (
    <main className="page-placeholder">
      <h1>{title}</h1>
      <p>{description}</p>
      {linkTo && <Link to={linkTo}>{linkText}</Link>}
    </main>
  )
}

export default PagePlaceholder
