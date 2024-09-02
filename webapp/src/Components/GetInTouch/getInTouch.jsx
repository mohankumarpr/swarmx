import React, { useEffect, useRef, useState } from 'react';
import './getInTouch.css';

const GetInTouch = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className={`get-in-touch-section ${isVisible ? 'visible' : ''}`}>
      <div className="get-in-touch-content">
        <div className="get-in-touch-text">
          <h2>Get in Touch</h2>
          <p>Our expert team is ready to help streamline your hiring process. Reach out for more information on our innovative solutions.</p>
          <p>Stay connected by following us on social media for the latest hiring trends and insights.</p>
          <p>Review our comprehensive privacy policy to understand how we protect your data and respect your privacy.</p>
        </div>
        <div className="get-in-touch-image">
          <img src="path_to_your_image.jpg" alt="Get in Touch" />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
