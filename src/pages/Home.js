import Footer from "../inc/Footer";
import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
function Home(){
    return(
        <>
     <div>
  {/* Page Wrapper */}
  <div id="wrapper">
    {/* Sidebar */}
        <Sidebar/>
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Topbar */}
            <Top/>
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <h1 className="h3 mb-4 text-gray-800"></h1>
        </div>
        {/* /.container-fluid */}
      </div>
      <div>
  <meta charSet="UTF-8" />
  <title>Jungle Mahal Tourism Development</title>
  {/* Header */}
  <header style={{backgroundColor: '#2e7d32', color: 'white', padding: 20, textAlign: 'center'}}>
    <h1>Jungle Mahal Tourism Development</h1>
    <p>Explore Nature, Embrace Culture, Empower Communities</p>
  </header>
  {/* Navigation Bar */}
  <nav style={{backgroundColor: '#388e3c', padding: 10, textAlign: 'center'}}>
    <a href="#" style={{color: 'white', textDecoration: 'none', margin: '0 15px'}}>Home</a>
    <a href="#" style={{color: 'white', textDecoration: 'none', margin: '0 15px'}}>About Jungle Mahal</a>
    <a href="#" style={{color: 'white', textDecoration: 'none', margin: '0 15px'}}>Attractions</a>
    <a href="#" style={{color: 'white', textDecoration: 'none', margin: '0 15px'}}>Culture &amp; Festivals</a>
    <a href="#" style={{color: 'white', textDecoration: 'none', margin: '0 15px'}}>Contact</a>
  </nav>
  {/* Hero Section */}
  <section style={{padding: 30, textAlign: 'center', backgroundColor: '#e8f5e9'}}>
    <h2>Welcome to Jungle Mahal</h2>
    <p>
      Discover the untouched beauty of Jungle Mahal — a land of forests, hills, and vibrant tribal heritage.
      Join us in promoting sustainable tourism that supports the environment and local communities.
    </p>
    <img src="jungle-mahal-hero.jpg" alt="Jungle Mahal Scenery" style={{width: '90%', maxWidth: 600, borderRadius: 10, marginTop: 15}} />
  </section>
  {/* Highlights */}
  <section style={{padding: 20}}>
    <h3 style={{color: '#2e7d32'}}>What We Offer</h3>
    <ul>
      <li>Eco-friendly tourism experiences</li>
      <li>Adventure activities like trekking and nature walks</li>
      <li>Cultural festivals and tribal art showcases</li>
      <li>Homestays and local handicraft shopping</li>
    </ul>
  </section>
  {/* Footer */}
  <footer style={{backgroundColor: '#2e7d32', color: 'white', textAlign: 'center', padding: 15, marginTop: 20}}>
    <p>© 2025 Jungle Mahal Tourism Development Project | All rights reserved.</p>
  </footer>
</div>

      {/* End of Main Content */}
      {/* Footer */}
        <Footer/>
      {/* End of Footer */}
    </div>
    {/* End of Content Wrapper */}
  </div>
  {/* End of Page Wrapper */}
  {/* Scroll to Top Button*/}
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
  {/* Logout Modal*/}
  
</div>

        </>
    )
}

export default Home;