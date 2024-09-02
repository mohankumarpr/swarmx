import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AboutUs from "../AboutUs/aboutus";
import GetInTouch from "../GetInTouch/getInTouch";
import Footer from "../Footer/footer";

import "./home.css";

export const Home = () => {
  const navigate = useNavigate(); // For navigation
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const fullText = "Unlock Your Potential With Our Lead Generation Platform";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 50); // Adjust the speed by changing the interval time

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            animateValue("interviews", 100, 450, 2000, "+");
            animateValue("partners", 10, 24, 2000);
            animateValue("assessments", 100, 345, 2000);
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateValue = (id, start, end, duration, suffix = "") => {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);

    let timer = setInterval(function () {
      current += increment;
      obj.textContent = current + suffix;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  return (
    <>
      <div className="landing-page">
        <div className="darken-landing-page">
          <div className="overlay">
            <div className="container">
              <div className="content">
                <h1 className="title">Streamline Your Hiring Process</h1>
                <p className="subtitleContainer subtitle">
                  Stop wasting time with manual processes. Our automated
                  solution helps you find the perfect candidates quickly and
                  efficiently.
                </p>
                <a href="#" className="btn btn-primary get-started-btn">
                  Get Started
                </a>
                {/* <p className="footer">&copy; Swarmx solutions</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`stats-section ${isVisible ? "visible" : "hidden"}`}
        ref={statsRef}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="stat-item">
                <h2 className="stat-number" id="interviews">
                  100
                </h2>
                <p>Successful interviews</p>
              </div>
            </div>
            <div className="col">
              <div className="stat-item">
                <h2 className="stat-number" id="partners">
                  10
                </h2>
                <p>Number of partners</p>
              </div>
            </div>
            <div className="col">
              <div className="stat-item">
                <h2 className="stat-number" id="assessments">
                  100
                </h2>
                <p>Assessments conducted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <GetInTouch />
      <Footer />
    </>
  );
};
