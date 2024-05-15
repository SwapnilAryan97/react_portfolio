import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/sidebar'
// import Navbar from '../Navbar'
import './layout.scss'
// import Home from '../Home'

const Layout = () => {
  return (
    <div className="App">
       <Sidebar />
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
