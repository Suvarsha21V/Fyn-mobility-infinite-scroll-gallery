// src/App.js

import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="app">
      <h2>Infinite Scroll Gallery with Lazy Loading</h2>
      <ImageGallery />
    </div>
  );
}

export default App;