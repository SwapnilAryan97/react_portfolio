import { Outlet } from 'react-router-dom'
// import Sidebar from '../Sidebar'
// import Navbar from '../Navbar'
import './index.scss'
// import Home from '../Home'

const Layout = () => {
  return (
    <div className="App">
//       <Navbar />
      <div className="page">
        <span className="tags top-tags">{/* Body */}</span>
        <Outlet />
        {/* <Home/> */}
        <span className="tags bottom-tags">{/* &lt;/Body&gt; */}</span>
        <br />
        <span className="tags bottom-tag-html">{/* &lt;/HTML&gt; */}</span>
      </div>
    </div>
  )
}

export default Layout
