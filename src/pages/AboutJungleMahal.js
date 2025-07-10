// import React from 'react';
// import Footer from "../inc/Footer";
// import Sidebar from "../inc/Sidebar";
// import Top from "../inc/Top";

// AboutJungleMahal.js

import React, { useState } from 'react';

const AboutJungleMahal = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  return (
    <div style={{ fontFamily: 'Century Schoolbook, sans-serif', backgroundColor: '#bbe8bb', padding: '30px' }}>
      
      {/* About Jungle Mahal - Always Visible */}
      <section style={styles.card}>
        <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>📘 About Jungle Mahal</h2>
        
        <p>
          Junglemahal is a picturesque and culturally rich region located in the western part of West Bengal, India. Known for its dense forests, tribal heritage, and vibrant traditions, the area includes parts of <strong> Purulia</strong>, <strong> Bankura</strong>, and <strong> Jhargram</strong> districts. The name "Junglemahal" literally means "land of forests."
          This region is home to various tribal communities such as the Santhals, Mundas, and Bhumijs, who contribute to its unique cultural identity through folk music, dance (like Chhau), and festivals. Junglemahal also boasts scenic beauty with lush greenery, waterfalls, hills, and historical sites like ancient temples and forts.
          Ideal for eco-tourism and cultural exploration, Junglemahal offers a serene escape from city life and a glimpse into the rich natural and traditional heritage of Bengal..
        </p>
        <p>
          This project aims to promote sustainable tourism that benefits local communities while preserving the natural environment.
        </p>
        <ul>
          <li>Dense forests and wildlife</li>
          <li>Ajodhya Hills and natural waterfalls</li>
          <li>Rich tribal culture and festivals</li>
          <li>Trekking, camping, and nature walks</li>
          <li>Local handicrafts and art forms</li>
        </ul>
      </section>

      {/* Things to Do - Collapsible */}
      <h2 style={{ textAlign: 'center', marginTop: '40px', color: '#2e7d32' }}>🌿 Things to Do in Jungle Mahal</h2>

      {renderCollapsible('purulia', '🏞️ Purulia Attractions', [
        'Ajodhya Hills: Trekking, camping, and breathtaking views.',
        'Bamni Falls: A scenic waterfall ideal for relaxation.',
        'Marble Lake: Stunning quarry lake surrounded by hills.',
        'Charida Village: Famous for Chhau mask craftsmanship.',
        'Pakhi Pahar: Rock hill with bird carvings and art.',
      ], openSection, toggleSection)}

      {renderCollapsible('bankura', '🏯 Bankura Attractions', [
        'Susunia Hills: Rock climbing and ancient spring.',
        'Bishnupur: Terracotta temples and silk sarees.',
        'Joyrambati & Kamarpukur: Religious heritage sites.',
        'Mukutmanipur Dam: India’s second-largest earthen dam.',
        'Garh Darwaja: Historic gateway of the Bishnupur kingdom.',
      ], openSection, toggleSection)}

      {renderCollapsible('jhargram', '🌳 Jhargram Attractions', [
        'Jhargram Palace: Heritage royal palace and museum.',
        'Kanak Durga Temple: Forest temple near Chilkigarh.',
        'Jhilli Lake: Calm lake with birdwatching trails.',
        'Kankrajhor Forest: Dense forest and tribal settlement.',
        'Sabang Clusters: Known for handwoven fabrics.',
      ], openSection, toggleSection)}

      {renderCollapsible('culture', '🎭 Tribal & Cultural Experiences', [
        'Chhau Dance: Tribal martial folk dance with masks.',
        'Dhokra Art: Traditional metal casting by artisans.',
        'Festivals: Tusu Parab, Baha Festival, and harvest celebrations.',
      ], openSection, toggleSection)}

      {/* Itinerary Section */}
      <section style={{ ...styles.card, marginTop: '50px', backgroundColor: '#f9fcf8' }}>
        <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>🗺️ Jungle Mahal Tourism Itinerary (3 Days / 2 Nights)</h2>
        <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#388e3c' }}>
          Explore the soul of Bengal, one unforgettable day at a time!
        </p>

        {renderCollapsible('day1', '🌄 Day 1: Arrival & Exploration of Purulia', [
          'Morning: Arrival at Purulia, tribal welcome, transfer to Ajodhya Hills eco-resort, check-in.',
          'Afternoon: Visit Bamni Falls & Marble Lake, guided forest walk.',
          'Evening: Chhau dance performance, bonfire, local stories.',
          'Overnight Stay: Hotels/Resorts as per your choice.',
        ], openSection, toggleSection)}

        {renderCollapsible('day2', '🏞️ Day 2: Adventure & Culture in Bankura', [
          'Morning: Travel to Susunia Hills, rock climbing/trekking.',
          'Afternoon: Tribal lunch, Bishnupur temples, artisan demos.',
          'Evening: Handicraft shopping, transfer to Jhargram, check-in.',
          'Overnight Stay: Hotels/Resorts as per your choice.',
        ], openSection, toggleSection)}

        {renderCollapsible('day3', '🌳 Day 3: Nature & Tribal Heritage in Jhargram', [
          'Morning: Breakfast, visit Jhargram Palace & Kanak Durga Temple, birdwatching at Jhilli Lake.',
          'Afternoon: Tribal village visit, cultural exchange, local lunch.',
          'Evening: Farewell, photo collage gift, departure.',
        ], openSection, toggleSection)}
      </section>
    </div>
  );
};

// Reusable collapsible block
const renderCollapsible = (key, title, items, openSection, toggleSection) => (
  <div style={styles.card}>
    <h3 onClick={() => toggleSection(key)} style={styles.toggleTitle}>{title}</h3>
    {openSection === key && (
      <ul style={styles.list}>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    )}
  </div>
);

// CSS-in-JS styles
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
  list: {
    lineHeight: '1.7',
    paddingLeft: '20px',
  },
};

export default AboutJungleMahal;
