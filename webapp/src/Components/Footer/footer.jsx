import React, { useEffect, useRef, useState } from "react";
import "./footer.css";

const Footer = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const rect = sectionRef.current.getBoundingClientRect();
//       if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

  return (
    <footer className="footer-section">
      <div className="container">
        <p>Interested to work with us? Drop us a line</p>
        <a href="mailto:hello@example.com">admin@swarmx.com</a>
        <div className="footer-details">
          <div>
            <h4>India Office</h4>
            <p>502, 27th Main Road, HSR Layout, Bangalore - 560078</p>
          </div>
          <div>
            <h4>Careers</h4>
            <p>jobs@swarmx.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
