import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
      <>Swapnil</>
    </Link>
    <nav>
      <NavLink exact="true" activeclassName="active" to="/home">
        <FontAwesomeIcon icon={faHome} color="#ffffff"></FontAwesomeIcon>
      </NavLink>
      <NavLink exact="true" activeclassName="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#ffffff"></FontAwesomeIcon>
      </NavLink>
      <NavLink exact="true" activeclassName="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#ffffff"></FontAwesomeIcon>
      </NavLink>
    </nav>
  </div>
)

export default Sidebar
