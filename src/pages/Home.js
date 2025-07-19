import Footer from "../inc/Footer";
import Sidebar from "../inc/Sidebar";
// import Top from "../inc/Top";
import JungleMahalCarousel from "../inc/JungleMahalCarousel";
//import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <div style={{ backgroundColor: '#f8f9fa' }}>
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
              {/* <Top /> */}
              {/* End of Topbar */}

              {/* Begin Page Content */}
              <div className="container-fluid" style={{ backgroundColor: '#f8f9fa' }}>
                {/* Page Heading */}
                <h1 className="h3 mb-4 text-gray-800"></h1>
              </div>
              {/* /.container-fluid */}

              {/* Jungle Mahal Content */}
              <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
                <meta charSet="UTF-8" />
                <title>Jungle Mahal Tourism Development</title>

                {/* Header */}
                <header style={{ 
                  background: 'linear-gradient(135deg,#1e7b24ff 0%, #2E7D32 100%)', 
                  color: 'white', 
                  padding: '40px 20px', 
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}>
                  <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '10px' }}>
                    Jungle Mahal Tourism Development
                  </h1>
                  <p style={{ fontSize: '1.2rem', fontWeight: '300', opacity: '0.9' }}>
                    Explore Nature, Embrace Culture, Empower Communities
                  </p>
                </header>

                {/* Navigation Bar */}
                  <Navbar/>
                {/* Hero Section */}
                <section style={{ 
                  padding: '50px 30px', 
                  textAlign: 'center',
                  backgroundColor: '#ffffff'
                }}>
                  <h2 style={{ 
                    fontSize: '2.2rem', 
                    color: '#2c3e50', 
                    marginBottom: '20px',
                    fontWeight: '600'
                  }}>
                    🌿 Welcome to Junglemahal
                  </h2>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    color: '#5a6c7d', 
                    maxWidth: '800px', 
                    margin: '0 auto 40px',
                    lineHeight: '1.6'
                  }}>
                    Discover the untouched beauty of Jungle Mahal — a land of forests, hills, and vibrant tribal heritage.
                    Join us in promoting sustainable tourism that supports the environment and local communities.
                  </p>
                  <div id="wrapper">
                    <JungleMahalCarousel></JungleMahalCarousel>
                  </div>
                </section>

                {/* Best Time to Visit */}
                <section style={{ 
                  padding: '40px 30px', 
                  backgroundColor: '#f8f9fa',
                  borderTop: '1px solid #e9ecef'
                }}>
                  <h3 style={{ 
                    color: '#2c3e50', 
                    fontSize: '1.8rem', 
                    marginBottom: '20px',
                    fontWeight: '600'
                  }}>
                    🗓️ Best Time to Visit
                  </h3>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    color: '#5a6c7d', 
                    marginBottom: '25px',
                    lineHeight: '1.6'
                  }}>
                    The ideal time to explore Junglemahal is <strong>October to March</strong>, when the weather is pleasant and local festivals like <strong>Bandna Parab</strong> and <strong>Tusu Parab</strong> bring the region to life.
                  </p>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0,
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}>
                    <li style={{ 
                      backgroundColor: '#ffffff', 
                      padding: '15px 20px', 
                      marginBottom: '10px',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      borderLeft: '4px solid #3498db'
                    }}>
                      <strong>Winter (Nov–Feb):</strong> Best for trekking, safaris, and sightseeing
                    </li>
                    <li style={{ 
                      backgroundColor: '#ffffff', 
                      padding: '15px 20px', 
                      marginBottom: '10px',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      borderLeft: '4px solid #27ae60'
                    }}>
                      <strong>Monsoon (Jul–Sep):</strong> Forests turn lush green, but trekking trails may be slippery
                    </li>
                    <li style={{ 
                      backgroundColor: '#ffffff', 
                      padding: '15px 20px', 
                      marginBottom: '10px',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      borderLeft: '4px solid #e74c3c'
                    }}>
                      <strong>Summer (Apr–Jun):</strong> Hot but good for temple visits and exploring local crafts
                    </li>
                  </ul>
                </section>

                {/* Cultural Highlights */}
                <section style={{ 
                  padding: '40px 30px',
                  backgroundColor: '#ffffff'
                }}>
                  <h3 style={{ 
                    color: '#2c3e50', 
                    fontSize: '1.8rem', 
                    marginBottom: '20px',
                    fontWeight: '600'
                  }}>
                    🎨 Cultural Highlights
                  </h3>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0,
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}>
                    <li style={{ 
                      backgroundColor: '#f8f9fa', 
                      padding: '20px', 
                      marginBottom: '15px',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                      <strong>👣 Tribal Life:</strong> Home to Santhal, Munda, Bhumij, and Lodha communities who maintain traditions deeply connected to nature.
                    </li>
                    <li style={{ 
                      backgroundColor: '#f8f9fa', 
                      padding: '20px', 
                      marginBottom: '15px',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                      <strong>🪘 Folk Music & Dance:</strong> Chhau, Jhumur, and tribal drumbeats fill the air during every festival.
                    </li>
                    <li style={{ 
                      backgroundColor: '#f8f9fa', 
                      padding: '20px', 
                      marginBottom: '15px',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                      <strong>🎨 Handicrafts:</strong> Shop for Dokra art, terracotta items, tribal jewelry, and leaf paintings made by local artisans.
                    </li>
                  </ul>
                </section>

                {/* Travel Tips */}
                <section style={{ 
                  padding: '40px 30px', 
                  backgroundColor: '#f8f9fa',
                  borderTop: '1px solid #e9ecef'
                }}>
                  <h3 style={{ 
                    color: '#2c3e50', 
                    fontSize: '1.8rem', 
                    marginBottom: '20px',
                    fontWeight: '600'
                  }}>
                    🧳 Travel Tips for Visitors
                  </h3>
                  <div style={{ 
                    maxWidth: '900px', 
                    margin: '0 auto'
                  }}>
                    <div style={{ 
                      backgroundColor: '#ffffff', 
                      padding: '25px', 
                      marginBottom: '20px',
                      borderRadius: '12px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.08)'
                    }}>
                      <h4 style={{ 
                        color: '#2c3e50', 
                        marginBottom: '15px',
                        fontWeight: '600'
                      }}>
                        How to Reach:
                      </h4>
                      <ul style={{ 
                        listStyle: 'none', 
                        padding: 0 
                      }}>
                        <li style={{ marginBottom: '8px' }}>
                          <strong>By Train:</strong> Jhargram, Purulia, Bankura stations are nearby.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                          <strong>By Road:</strong> Easily reachable from Kolkata (4–5 hours) via NH16.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                          <strong>By Air:</strong> Nearest airport is Netaji Subhas Chandra Bose International Airport, Kolkata.
                        </li>
                      </ul>
                    </div>

                    <div style={{ 
                      backgroundColor: '#ffffff', 
                      padding: '25px', 
                      marginBottom: '20px',
                      borderRadius: '12px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.08)'
                    }}>
                      <h4 style={{ 
                        color: '#2c3e50', 
                        marginBottom: '15px',
                        fontWeight: '600'
                      }}>
                        Essential Information:
                      </h4>
                      <ul style={{ 
                        listStyle: 'none', 
                        padding: 0 
                      }}>
                        <li style={{ marginBottom: '12px' }}>
                          <strong>Where to Stay:</strong> Eco-resorts, forest rest houses, and budget hotels are available in Jhargram, Belpahari, and Purulia.
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                          <strong>Local Cuisine to Try:</strong> Pakhala Bhata (fermented rice), Saag, Mahua flower dishes, bamboo shoots, tribal-style chicken and mutton.
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                          <strong>Respect Local Culture:</strong> Always ask before taking photos in villages and support local craftspeople.
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                          <strong>What to Carry:</strong> Comfortable walking shoes, insect repellent, light woolens (for winter), torch, and water bottles.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
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