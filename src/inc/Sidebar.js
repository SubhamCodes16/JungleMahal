import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
function Sidebar(){
    return(
        <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3"><sup>2</sup></div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Home</span></a>
           {/* Nav Item - About Jungle Mahal */}
      <li className="nav-item">
        <a className="nav-link" href="/about">
          <i className="fas fa-fw fa-chart-area" />
          <span>About Jungle Mahal</span></a>
            {/* Nav Item - Booking page */}
      <li className="nav-item">
        <a className="nav-link" href="/booking">
          <i className="fas fa-fw fa-chart-area" />
          <span>Booking</span></a>


     </li>
      </li>
      </li>
     
      
      
    </ul>
        </>
    )
}
export default Sidebar;