// src/components/ImageItem.js

import React, { forwardRef } from 'react';
import './ImageGallery.css';

const ImageItem = forwardRef(({ image }, ref) => {
  return (
    <div className="image-item" ref={ref}>
      <img src={image.urls.small} alt={image.description} loading="lazy" />
    </div>
  );
});

export default ImageItem;