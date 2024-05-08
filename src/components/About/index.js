import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const aboutArray = 'About me'.split('')

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

    return (
      <>
        <div className="container about-page">
          <div className="'text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={aboutArray}
                idx={15}
              />
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
              euismod lacinia at quis risus sed vulputate. Commodo odio aenean
              sed adipiscing diam donec adipiscing tristique. Pellentesque
              habitant morbi tristique senectus. Enim blandit volutpat maecenas
              volutpat blandit aliquam etiam erat. Eget lorem dolor sed viverra
              ipsum nunc aliquet bibendum enim. Eu facilisis sed odio morbi quis
              commodo odio. Cursus vitae congue mauris rhoncus. Nam aliquam sem
              et tortor. Donec massa sapien faucibus et molestie ac feugiat sed
              lectus. Pellentesque habitant morbi tristique senectus et.
            </p>
            <p>
              Consectetur purus ut faucibus pulvinar elementum. Eget aliquet
              nibh praesent tristique magna sit amet purus gravida. Nec feugiat
              in fermentum posuere urna nec tincidunt praesent. Massa placerat
              duis ultricies lacus sed turpis. Rhoncus dolor purus non enim
              praesent elementum. Odio facilisis mauris sit amet massa. Sit amet
              consectetur adipiscing elit ut aliquam purus. Accumsan lacus vel
              facilisis volutpat est velit egestas dui. Feugiat sed lectus
              vestibulum mattis ullamcorper velit sed. Tortor dignissim
              convallis aenean et tortor. Odio aenean sed adipiscing diam donec
              adipiscing. In ornare quam viverra orci sagittis eu volutpat odio.
              Viverra suspendisse potenti nullam ac tortor vitae.{' '}
            </p>
            <p>
              In dictum non consectetur a erat nam. Ut morbi tincidunt augue
              interdum velit euismod. Risus pretium quam vulputate dignissim
              suspendisse in est ante in. Aenean vel elit scelerisque mauris
              pellentesque pulvinar pellentesque habitant. Pellentesque eu
              tincidunt tortor aliquam nulla. Tortor id aliquet lectus proin
              nibh nisl condimentum id venenatis.
            </p>
          </div>
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default About
