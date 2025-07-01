// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import { businessInfo, menuData } from './menuConfig';
import ItemDetail from './ItemDetail';

function Home() {
  const location = useLocation();
  const defaultTab = location.state?.tab || Object.keys(menuData)[0];
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  return (
    <>
      <nav className="menu-tabs">
        {Object.keys(menuData).map(tab => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`menu-tab ${selectedTab === tab ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main className="menu-content">
        <h2 className="section-title">{selectedTab}</h2>
        <div className="menu-items">
          {menuData[selectedTab].map((item, idx) => (
            <Link
              key={idx}
              to={`/item/${selectedTab}/${idx}`}
              state={{ fromTab: selectedTab }}
              className="menu-card"
            >
              <div className="menu-card-header">
                <h3 className="item-name">{item.name}</h3>
                <span className="item-price">{item.price}</span>
              </div>
              <p className="item-description">{item.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <img className="logo" src={businessInfo.logo} alt={`${businessInfo.name} Logo`} />
          <h1 className="business-name">{businessInfo.name}</h1>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:category/:index" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
