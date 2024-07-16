// src/components/ImageGallery.js

import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import ImageItem from './ImageItem';
import './ImageGallery.css';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const loadImages = async (page) => {
    setLoading(true);
    const response = await axios.get(`https://api.unsplash.com/photos?page=${page}&client_id=fkOyne-V12lxO5iFpIHN2UgTHkJ3Q3LJsUush8WxpMA`);
    setImages((prevImages) => [...prevImages, ...response.data]);
    setLoading(false);
  };

  useEffect(() => {
    loadImages(page);
  }, [page]);

  const lastImageElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  return (
    <div className="image-gallery">
      {images.map((image, index) => {
        if (images.length === index + 1) {
          return <ImageItem ref={lastImageElementRef} key={image.id} image={image} />;
        } else {
          return <ImageItem key={image.id} image={image} />;
        }
      })}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ImageGallery;