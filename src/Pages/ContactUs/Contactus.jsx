import React from "react";
import "./Contactus.css";

const Contact=() =>{
  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-overlay"></div>
        <div className="contact-hero-content">
          <h1>Contact Our Team</h1>
          <p>
            Have questions about our keyboards, cooling systems, monitors,
            or gaming setups? Our team is here to help.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-info">
        <div className="contact-card">
          <h3>Office</h3>
          <p>Kathmandu, Nepal</p>
        </div>

        <div className="contact-card">
          <h3>Email</h3>
          <p>info@company.com</p>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          <p>+977 9800000000</p>
        </div>

        <div className="contact-card">
          <h3>Business Hours</h3>
          <p>Mon – Fri : 9AM – 6PM</p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">

        <div className="contact-form-container">

          <div className="contact-text">
            <h2>Send Us a Message</h2>
            <p>
              Whether you are looking for product information,
              business partnerships, or custom cooling solutions,
              feel free to reach out to our team.
            </p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>

        </div>

      </section>

      {/* MAP */}
      <section className="contact-map">

        <h2>Our Location</h2>
         <iframe
    title="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.348102095715!2d85.31802978072989!3d27.706536514772615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a582c316cb%3A0xbf36a040e87a89a8!2sKunyo%20Gears%20(Putalisadak%20Store)!5e0!3m2!1sen!2snp!4v1773303005121!5m2!1sen!2snp"
    width="100%"
    height="450"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />

{/* 
<iframe 
title="map"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.348102095715!2d85.31802978072989!3d27.706536514772615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a582c316cb%3A0xbf36a040e87a89a8!2sKunyo%20Gears%20(Putalisadak%20Store)!5e0!3m2!1sen!2snp!4v1773303005121!5m2!1sen!2snp"
 loading="lazy">
</iframe> */}
        {/* <iframe
          title="map"
          src="https://maps.google.com/maps?q=Kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe> */}

      </section>

    </div>
  );
}

export default Contact;