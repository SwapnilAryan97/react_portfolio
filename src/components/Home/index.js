import { Link } from 'react-router-dom'
import Logotitle from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
        <img className="single-logo" src={Logotitle} alt="developer" />
        wapnil
        </h1>
        <br />
        Software Engineer
        <h2>Backend Developer</h2>
        <Link to="/connect" className="flat-buttom">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
