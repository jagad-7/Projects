import { Outlet, Link } from "react-router-dom";
import  './Layout.css'

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="header">
          <li>
            <Link to="/loadingbar">LoadingBar</Link>
          </li>
          <li>
            <Link to="/tabs_component">Tabs_Component</Link>
          </li>
          <li>
            <Link to="/formxample">FormExample</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;