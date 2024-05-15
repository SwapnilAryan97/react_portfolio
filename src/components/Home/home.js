import { Link } from 'react-router-dom'
// import Logotitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './home.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const name = 'Swapnil Sinha'
  // const jobTitle = 'I build things for the Web'

  const nameArray = createArray(name)
  // const jobArray = createWordArray(jobTitle)

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        {/* <div className={letterClass}>Hi</div>
        <div className={`${letterClass} _12`}>,</div>
        <div className={`${letterClass} _12`}>my name is</div> */}
        <h1 className="coding-text first-h1">Hi, my name is</h1>
        <h1 className="second-h1">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>

        {/* <h1 className="fade-color fade-in-2">
          I build things for the Web <br />
        </h1> */}
        {/* <h2>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h2> */}

        <h1 className="fade-color fade-in-2 third-h1">
          I build things for the Web
        </h1>

        {/* <h1 className="less-font fade-in-1">Swapnil Aryan Sinha</h1> */}

        <p>
          Welcome to my corner of the web! I'm a Developer with a passion for
          building dynamic and responsive websites. My journey in Software
          Development spans over several years, during which I've had the
          pleasure of working on a diverse range of projects, from intricate
          e-commerce platforms to innovative AI applications.
        </p>

        <p>This webpage is still a WIP, till then feel free to explore and give feedback!</p>
        <br />
        <Link to="/about" className="flat-button">
          Learn More {'\u2192'}
        </Link>
      </div>
      <Logo />
    </div>
  )
}

function createArray(name) {
  return name.split('')
}

// function createWordArray(sentence) {
//   const wordArray = sentence.split(' ')
//   const wordWithSpaces = []

//   wordArray.forEach((word) => {
//     wordWithSpaces.push(word)
//     wordWithSpaces.push(' ')
//   })
//   return wordWithSpaces
// }

export default Home
