import React, { useState } from 'react';
import Footer from '../inc/Footer';
import { NavLink } from "react-router-dom";

function ThingstoDo() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  // Reusable collapsible block
  const renderCollapsible = (key, title, items) => (
    <div style={styles.card}>
      <h3 onClick={() => toggleSection(key)} style={styles.toggleTitle}>{title}</h3>
      {openSection === key && (
        <ul style={styles.list}>
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      )}
    </div>
  );

  return (
    <div style={{ fontFamily: 'Century Schoolbook, sans-serif', backgroundColor: '#bbe8bb', padding: '20px' }}>
      {/* Navigation Bar */}
                <nav style={{ backgroundColor: '#388e3c', padding: 10, textAlign: 'center' }}>
                  <NavLink to="/" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Home</NavLink>
                  <NavLink to="/about" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>About Jungle Mahal</NavLink>
                  <NavLink to="/thingstodo" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>ThingstoDog</NavLink>
                  <NavLink to="/booking" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Booking</NavLink>
                  <NavLink to="/donation" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Donation</NavLink>
                  <NavLink to="/review" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Review</NavLink>
                </nav>
      {/* Things to Do - Collapsible */}
      <h2 style={{ textAlign: 'center', marginTop: '40px', color: '#2e7d32' }}>🌿 Things to Do in Jungle Mahal</h2>

      {renderCollapsible('purulia', '🏞️ Purulia Attractions', [
        'Ajodhya Hills: Trekking, camping, and breathtaking views.',
        'Bamni Falls: A scenic waterfall ideal for relaxation.',
        'Marble Lake: Stunning quarry lake surrounded by hills.',
        'Charida Village: Famous for Chhau mask craftsmanship.',
        'Pakhi Pahar: Rock hill with bird carvings and art.',
      ])}

      {renderCollapsible('bankura', '🏯 Bankura Attractions', [
        'Susunia Hills: Rock climbing and ancient spring.',
        'Bishnupur: Terracotta temples and silk sarees.',
        'Joyrambati & Kamarpukur: Religious heritage sites.',
        'Mukutmanipur Dam: India’s second-largest earthen dam.',
        'Garh Darwaja: Historic gateway of the Bishnupur kingdom.',
      ])}

      {renderCollapsible('jhargram', '🌳 Jhargram Attractions', [
        'Jhargram Palace: Heritage royal palace and museum.',
        'Kanak Durga Temple: Forest temple near Chilkigarh.',
        'Jhilli Lake: Calm lake with birdwatching trails.',
        'Kankrajhor Forest: Dense forest and tribal settlement.',
        'Sabang Clusters: Known for handwoven fabrics.',
      ])}

      {renderCollapsible('culture', '🎭 Tribal & Cultural Experiences', [
        'Chhau Dance: Tribal martial folk dance with masks.',
        'Dhokra Art: Traditional metal casting by artisans.',
        'Festivals: Tusu Parab, Baha Festival, and harvest celebrations.',
      ])}

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
        ])}

        {renderCollapsible('day2', '🏞️ Day 2: Adventure & Culture in Bankura', [
          'Morning: Travel to Susunia Hills, rock climbing/trekking.',
          'Afternoon: Tribal lunch, Bishnupur temples, artisan demos.',
          'Evening: Handicraft shopping, transfer to Jhargram, check-in.',
          'Overnight Stay: Hotels/Resorts as per your choice.',
        ])}

        {renderCollapsible('day3', '🌳 Day 3: Nature & Tribal Heritage in Jhargram', [
          'Morning: Breakfast, visit Jhargram Palace & Kanak Durga Temple, birdwatching at Jhilli Lake.',
          'Afternoon: Tribal village visit, cultural exchange, local lunch.',
          'Evening: Farewell, photo collage gift, departure.',
        ])}
      </section>
      <Footer />
    </div>
  );
}

// CSS-in-JS styles
const styles = {
  card: {
    backgroundColor: '#fff',
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
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

export default ThingstoDo;
