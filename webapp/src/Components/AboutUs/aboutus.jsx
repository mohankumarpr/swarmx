import React, { useEffect, useRef, useState } from 'react';
import './aboutus.css';

const AboutUs = () => {
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
    <div ref={sectionRef} className={`about-us-section ${isVisible ? 'visible' : ''}`}>
      <div className="about-us-content">
        <div className="about-us-image">
        <div className="about-us-img"></div>
        </div>
        <div className="about-us-text">
          <p>&copy; Swarmx. We are a leading provider of innovative hiring solutions that help organizations streamline their recruitment processes. Our automated tools and expert guidance empower HR teams to find the perfect candidates quickly and efficiently, reducing time-to-hire and improving the quality of hires.</p>
          <p>With over a decade of industry experience, Hiring Solutions Inc. has built a reputation for delivering exceptional results. We are committed to staying at the forefront of hiring technology and best practices, ensuring our clients always have the competitive edge they need to attract top talent.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
