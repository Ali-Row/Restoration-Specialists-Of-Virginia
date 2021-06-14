import React, { useState, useEffect } from 'react';

const LazyLoadImage = React.memo(({ className, src, placeholder, alt = "" }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      setLoading(false);
      updateSrc(src);
    }
  }, [src])

  return (
    <img
      className={className}
      src={currentSrc}
      style={{
        opacity: loading ? 0.2 : 1,
        transition: "opacity .15s linear"
      }}
      alt={alt}
    />
  )
});

export default LazyLoadImage;