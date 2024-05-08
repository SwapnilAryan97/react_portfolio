import AnimatedLetters from '../AnimatedLetters'
import './contact.scss'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const contactMe = 'Contact Me'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={contactMe}
            idx={15}
            className="contact-info"
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
          euismod lacinia at quis risus sed vulputate.
        </p>
        <div className="contact-form">
          <form>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input type="email" name="subject" placeholder="Subject" required />
              </li>
              <li>
                <input type="text" name="message" placeholder="Message" required />
              </li>
              <li>
                <input type="submit" className='flat-button' value="Submit" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact
