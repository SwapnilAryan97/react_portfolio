import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import {
  // useEffect,
  useRef
} from 'react'
import LogoPath from './logoPath'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)

  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })
  //     .from(outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 15,
  //     })

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     { opacity: 0 },
  //     { opacity: 1, delay: 4, duration: 4 }
  //   )
  // }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
      <LogoPath outlineLogoRef={outlineLogoRef} />
    </div>
  )
}

export default Logo
