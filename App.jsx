import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.classList.add("loaded");

    const revealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const images = [
    "/res1.jpeg",
    "/res2.jpeg",
    "/res3.jpeg",
    "/img3.png",
    "/res4.jpeg",
    "/res5.jpeg",
    "/res6.jpeg",
    "/about.jpeg"
  ];

  return (
    <div>

    
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src="/logo1.jpeg" alt="Logo" />
          </div>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      
      <section id="home" className="hero reveal">
        <div className="hero-content">
          <h1>Building Dreams with Quality</h1>
          <p>Trusted Construction & Ventures Company</p>
          <a href="#contact-form" className="btn">Get in Touch</a>
        </div>
      </section>

      
      <section id="about" className="about reveal">
        <div className="about-container">
          <div className="about-image">
            <img src="/about.jpeg" alt="About" />
          </div>

          <div className="about-content">
            <span className="since">Since 2005</span>
            <h2>About Us</h2>
            <h3>MN Builders</h3>
            <p id="tt">
              The primary goal of MN Builders is to deliver quality construction services and achieve complete customer satisfaction in the construction industry. We undertake industrial, commercial, and residential projects, currently operating in and around Bengaluru. We provide our clients with flexible options in design, budget, and location, and are a trusted choice for executing turnkey construction projects.
            </p>
          </div>
        </div>
      </section>

      
      <section id="services" className="reveal">
        <h2 style={{ textAlign: "center" }}>Our Services</h2>

        <div className="card-container">
          <div className="service-card">
            <img src="/res3.jpeg" alt="" />
            <h3>Residential</h3>
            <p>Modern homes tailored for you.</p>
          </div>

          <div className="service-card">
            <img src="/img3.png" alt="" />
            <h3>Commercial</h3>
            <p>Reliable commercial spaces.</p>
          </div>
        </div>
      </section>

    
      <section id="projects" className="service-category reveal">
        <h2>Residential & Commercial</h2>

        <div className="image-list">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </section>

    
      <section id="contact" className="contact reveal">
        <h2>Contact Us</h2>
        <p>+91 9364020288</p>
        <p>mn@gmail.com</p>
      </section>

      
      <section id="contact-form" className="contact reveal">
        <h2>Get in Touch</h2>

        <form>
          <input type="text" placeholder="Your Name" required /><br /><br />
          <input type="email" placeholder="Your Email" required /><br /><br />
          <textarea placeholder="Your Message" required></textarea><br /><br />
          <button className="btn">Send</button>
        </form>
      </section>

      
      <footer className="footer">
        <div className="footer-container">

          <div>
            <h3>About Us</h3>
            <p id="last">
              The primary goal of MN Builders is to provide quality construction and unmatched customer satisfaction. We cater to residential and commercial projects, ensuring high-quality craftsmanship and innovative designs.
            </p>
          </div>

          <div>
            <h3>Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>

          <div>
            <h3>Gallery</h3>
            <div className="gallery">
              <img src="/res1.jpeg" alt="" />
              <img src="/res2.jpeg" alt="" />
              <img src="/res3.jpeg" alt="" />
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2025 MN Builders</p>
        </div>
      </footer>

      
      {selectedImage && (
        <div className="popup" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img className="popup-img" src={selectedImage} alt="" />
        </div>
      )}

    </div>
  );
}

export default App;
