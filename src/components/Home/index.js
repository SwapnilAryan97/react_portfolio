import { Link } from 'react-router-dom'
// import Logotitle from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <div className="coding-text">Hi, my name is</div>
        <h1 className="less-font fade-in-1">Swapnil Aryan Sinha</h1>
        <h1 className="fade-color fade-in-2">
          I build things for the Web <br />
        </h1>
        <h2>H2 line here</h2>
        <Link to="/connect" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
