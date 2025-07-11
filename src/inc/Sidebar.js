function Sidebar(){
    return(
        <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Home</span></a>
           {/* Nav Item - About Jungle Mahal */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area" />
          <span>About Jungle Mahal</span></a>
      </li>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">
       </div>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">
        Addons
      </div>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item active">
        <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i className="fas fa-fw fa-folder" />
          <span>Pages</span>
        </a>
        <div id="collapsePages" className="collapse show" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item" href="login.html">Login</a>
            <a className="collapse-item" href="register.html">Register</a>
            <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
            <div className="collapse-divider" />
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item" href="404.html">404 Page</a>
            <a className="collapse-item active" href="blank.html">Blank Page</a>
          </div>
        </div>
      </li>
      {/* Nav Item - Charts */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area" />
          <span>Charts</span></a>
      </li>
      {/* Nav Item - Tables */}
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table" />
          <span>Tables</span></a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
        </>
    )
}
export default Sidebar;