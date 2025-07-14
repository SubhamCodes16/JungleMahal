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
        <div className="sidebar-brand-text mx-3"><sup></sup></div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Home</span></NavLink>
           {/* Nav Item - About Jungle Mahal */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">
          <i className="fas fa-fw fa-chart-area" />
          <span>About Jungle Mahal</span></NavLink>
            {/* Nav Item - ThingstoDo */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/thingstodo">
          <i className="fas fa-fw fa-chart-area" />
          <span>Things to Do</span></NavLink>
            {/* Nav Item - Review page */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/review">
          <i className="fas fa-fw fa-chart-area" />
          <span>Review</span></NavLink>
            {/* Nav Item - Booking page */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/booking">
          <i className="fas fa-fw fa-chart-area" />
          <span>Booking</span></NavLink>


     </li>
      </li>
      </li>
      </li>
      </li>
     
      
      
    </ul>
        </>
    )
}
export default Sidebar;