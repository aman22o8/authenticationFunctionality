// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="container">
    <ul className="unorderlist">
      <li>
        <Link className="mylink" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="mylink" to="/about">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
