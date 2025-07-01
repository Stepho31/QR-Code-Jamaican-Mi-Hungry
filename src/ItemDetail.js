// src/ItemDetail.js
import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { menuData } from './menuConfig';

function ItemDetail() {
  const { category, index } = useParams();
  const item = menuData[category][index];
  const location = useLocation();
  const { fromTab } = location.state || {};


  return (
    <div className="item-detail">
      <Link to="/" state={{ tab: fromTab }} className="back-button">← Back to Menu</Link>
      <img src={item.image} alt={item.name} className="detail-image" />
      <h2>{item.name}</h2>
      <p className="item-price">{item.price}</p>
      <p className="item-description">{item.description}</p>
    </div>
  );
}

export default ItemDetail;
