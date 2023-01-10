import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/dxmoaodao/image/upload/v1673255816/Group_1_gk30d0.png"
      alt="page not found"
      className="not-found"
    />
    <h1 className="not-found-head">Page Not Found</h1>
    <p className="not-fond-para">
      we are sorry, the page you requested could not be found
    </p>
    <p className="not-fond-para">Please go back to the homepage</p>
    <Link to="/" className="link">
      <button className="button" type="button">
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
