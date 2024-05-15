import React from "react";
import "./styles.scss";
import logo from "./greenbkglogo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <ul>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <ul>
          <li>
            <a href="#privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms">Terms of Service</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <section id="home" className="home-section">
      <h1>Welcome to Just Kaptured Productions</h1>
      <h5>Professional Drone Services</h5>
      <p>Your go-to solution for aerial photography and videography.</p>
      <button>Learn More</button>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="features-section">
      <h2>Features</h2>
      <div className="feature">
        <h3>High-Quality Imaging</h3>
        <p>Our drones capture stunning photos and videos in high resolution.</p>
      </div>
      <div className="feature">
        <h3>Real-time Monitoring</h3>
        <p>Monitor live footage from your drone right on your device.</p>
      </div>
      {/* Add more features */}
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <h2>Pricing</h2>
      <div className="package">
        <h3>Basic Package</h3>
        <p>Get started with our basic package for small projects.</p>
        <p>$99</p>
        <button>Choose Plan</button>
      </div>
      <div className="package">
        <h3>Standard Package</h3>
        <p>Perfect for medium-sized projects and businesses.</p>
        <p>$199</p>
        <button>Choose Plan</button>
      </div>
      <div className="package">
        <h3>Premium Package</h3>
        <p>Unlock all features with our premium package.</p>
        <p>$299</p>
        <button>Choose Plan</button>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="John Doe" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="johndoe@email.com" />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="I'd love to chat more about.."
        ></textarea>
        <button>Send</button>
      </form>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
