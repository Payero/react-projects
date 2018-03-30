import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    <p>Checkout the things I have done</p>
    <Link name="Item One" to="/portfolio/1">Item One</Link>
    <Link name="Item Two" to="/portfolio/2">Item Two</Link>  
  </div>
);
export default PortfolioPage;