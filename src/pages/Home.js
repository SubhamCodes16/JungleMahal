import Footer from "../inc/Footer";
import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import JungleMahalCarousel from "../inc/JungleMahalCarousel";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <div>
        {/* Page Wrapper */}
        <div id="wrapper">
          {/* Sidebar */}
          <Sidebar />
          {/* End of Sidebar */}

          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <Top />
              {/* End of Topbar */}

              {/* Begin Page Content */}
              <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-4 text-gray-800"></h1>
              </div>
              {/* /.container-fluid */}

              {/* Jungle Mahal Content */}
              <div>
                <meta charSet="UTF-8" />
                <title>Jungle Mahal Tourism Development</title>

                {/* Header */}
                <header style={{ backgroundColor: '#2e7d32', color: 'white', padding: 20, textAlign: 'center' }}>
                  <h1>Jungle Mahal Tourism Development</h1>
                  <p>Explore Nature, Embrace Culture, Empower Communities</p>
                </header>

                {/* Navigation Bar */}
                <nav style={{ backgroundColor: '#388e3c', padding: 10, textAlign: 'center' }}>
                  <NavLink to="/" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Home</NavLink>
                   <NavLink to="/thingstodo" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>ThingstoDog</NavLink>
                  <NavLink to="/about" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>About Jungle Mahal</NavLink>
                  <NavLink to="/booking" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Booking</NavLink>
                  <NavLink to="/review" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Review</NavLink>
                  <NavLink to="/donation" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Donation</NavLink>
                  <NavLink to="#" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Contact</NavLink>
                </nav>

                {/* Hero Section */}
                <section style={{ padding: 30, textAlign: 'center' }}>
                  <h2>🌿 Welcome to Junglemahal</h2>
                  <p>
                    Discover the untouched beauty of Jungle Mahal — a land of forests, hills, and vibrant tribal heritage.
                    Join us in promoting sustainable tourism that supports the environment and local communities.
                  </p>
                  <div id="wrapper">
                    <JungleMahalCarousel></JungleMahalCarousel>
                  </div>
                </section>
                {/* Best Time to Visit */}
                <section style={{ padding: 20, backgroundColor: '#bbe8bb' }}>
                  <h3 style={{ color: '#2e7d32' }}>🗓️ Best Time to Visit</h3>
                  <p>The ideal time to explore Junglemahal is <strong>October to March</strong>, when the weather is pleasant and local festivals like <strong>Bandna Parab</strong> and <strong>Tusu Parab</strong> bring the region to life.</p>
                  <ul>
                    <li><strong>Winter (Nov–Feb):</strong> Best for trekking, safaris, and sightseeing</li>
                    <li><strong>Monsoon (Jul–Sep):</strong> Forests turn lush green, but trekking trails may be slippery</li>
                    <li><strong>Summer (Apr–Jun):</strong> Hot but good for temple visits and exploring local crafts</li>
                  </ul>
                </section>

                {/* Cultural Highlights */}
                <section style={{ padding: 20 }}>
                  <h3 style={{ color: '#2e7d32' }}>🎨 Cultural Highlights</h3>
                  <ul>
                    <li><strong>👣 Tribal Life:</strong> Home to Santhal, Munda, Bhumij, and Lodha communities who maintain traditions deeply connected to nature.</li>
                    <li><strong>🪘 Folk Music & Dance:</strong> Chhau, Jhumur, and tribal drumbeats fill the air during every festival.</li>
                    <li><strong>🎨 Handicrafts:</strong> Shop for Dokra art, terracotta items, tribal jewelry, and leaf paintings made by local artisans.</li>
                  </ul>
                </section>

                {/* Travel Tips */}
                <section style={{ padding: 20, backgroundColor: '#bbe8bb' }}>
                  <h3 style={{ color: '#2e7d32' }}>🧳 Travel Tips for Visitors</h3>
                  <ul>
                    <li><strong>How to Reach:</strong>
                      <ul>
                        <li><strong>By Train:</strong> Jhargram, Purulia, Bankura stations are nearby.</li>
                        <li><strong>By Road:</strong> Easily reachable from Kolkata (4–5 hours) via NH16.</li>
                        <li><strong>By Air:</strong> Nearest airport is Netaji Subhas Chandra Bose International Airport, Kolkata.</li>
                      </ul>
                    </li>
                    <li><strong>Where to Stay:</strong> Eco-resorts, forest rest houses, and budget hotels are available in Jhargram, Belpahari, and Purulia.</li>
                    <li><strong>Local Cuisine to Try:</strong> Pakhala Bhata (fermented rice), Saag, Mahua flower dishes, bamboo shoots, tribal-style chicken and mutton.</li>
                    <li><strong>Respect Local Culture:</strong> Always ask before taking photos in villages and support local craftspeople.</li>
                    <li><strong>What to Carry:</strong> Comfortable walking shoes, insect repellent, light woolens (for winter), torch, and water bottles.</li>
                  </ul>
                </section>

                {/* Footer */}
                <footer style={{ backgroundColor: '#2e7d32', color: 'white', textAlign: 'center', padding: 15, marginTop: 20 }}>
                  <p>© 2025 Jungle Mahal Tourism Development Project | All rights reserved.</p>
                </footer>
              </div>
              {/* End of Jungle Mahal Content */}
            </div>

            {/* Footer */}
            <Footer />
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
  );
}


export default Home;
