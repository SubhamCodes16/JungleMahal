import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './Navbar';
import Footer from '../inc/Footer';
const AboutJungleMahal = () => {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  return (
    <div style={{ fontFamily: 'Century Schoolbook, sans-serif', backgroundColor: '#bbe8bb', padding: '30px' }}>
     {/* Navigation Bar */}
               <Navbar/>


      {/* About Section */}
      <section style={styles.card}>
        <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>📘 About Jungle Mahal</h2>
        <p>
          Junglemahal is a picturesque and culturally rich region located in the western part of West Bengal, India. Known for its dense forests, tribal heritage, and vibrant traditions, the area includes parts of <strong>Purulia</strong>, <strong>Bankura</strong>, and <strong>Jhargram</strong> districts. The name "Junglemahal" literally means "land of forests."
        </p>
        <p>
          This region is home to various tribal communities such as the Santhals, Mundas, and Bhumijs, who contribute to its unique cultural identity through folk music, dance (like Chhau), and festivals. Junglemahal also boasts scenic beauty with lush greenery, waterfalls, hills, and historical sites like ancient temples and forts.
        </p>
        <p>
          This project aims to promote sustainable tourism that benefits local communities while preserving the natural environment.
        </p>
      </section>
      {/* Collapsible Sections with Image Carousels */}
      {renderCarouselSection('wildlife', '🌲 Dense Forests & Wildlife', [
      '/img/Denseforestandwildlife1.jpeg',
      '/img/Denseforestandwildlife2.jpeg'
      ], openSection, toggleSection)}

      {renderCarouselSection('hills', '⛰️ Ajodhya Hills & Waterfalls', [
        '/img/Ajodhahills1.jpg',
        '/img/Ajodhahills2.jpeg'
      ], openSection, toggleSection)}

      {renderCarouselSection('culture', '🎭 Tribal Culture & Festivals', [
        '/img/Tribal1.jpg',
        '/img/Tribal2.jpg'
      ], openSection, toggleSection)}

      {renderCarouselSection('activities', '🥾 Trekking & Nature Walks', [
        '/img/trekkinginpurulia1.jpg',
        '/img/trekkinginpurulia2.jpg'
      ], openSection, toggleSection)}

      {renderCarouselSection('art', '🎨 Handicrafts & Tribal Art', [
        '/img/Tribalart2.jpg',
        '/img/Tribalart1.jpg'
      ], openSection, toggleSection)}
    <Footer />
    </div>
  );
};

const renderCarouselSection = (key, title, imageUrls, openSection, toggleSection) => (
  <div style={styles.card} key={key}>
    <h3 onClick={() => toggleSection(key)} style={styles.toggleTitle}>{title}</h3>
    {openSection === key && (
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={1000}>
        {imageUrls.map((src, index) => (
          <div key={index}>
            <img 
              src={src} 
              alt={`${key}-${index}`} 
              style={{ 
                maxHeight: '300px', 
                width: 'auto', 
                margin: '0 auto',
                objectFit: 'cover',
                borderRadius: '8px'
              }} 
            />
          </div>
        ))}
      </Carousel>
    )}
  </div>
);

const navStyle = { color: 'white', textDecoration: 'none', margin: '0 15px' };
const styles = {
  card: {
    backgroundColor: '#fff',
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(83, 24, 210, 0.1)',
  },
  toggleTitle: {
    cursor: 'pointer',
    color: '#2e7d32',
    margin: '0 0 10px 0',
    fontSize: '18px',
  },
  heading: {
    textAlign: 'center',
    color: '#2e7d32',
  }
};

export default AboutJungleMahal;
