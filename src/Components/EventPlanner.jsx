import React, { useState, useEffect } from 'react';
import './EventPlanner.css';
import hero from './assets/Hero.jpeg';
import portfolioData from './portfolioData';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaCheck, FaStar, FaBars, FaTimes } from 'react-icons/fa';

const EventPlanner = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Update active section based on scroll position
            const sections = ['home', 'services', 'portfolio', 'about', 'contact'];
            const scrollPosition = window.scrollY + 100;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i]);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMobileNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsMobileMenuOpen(false);
    };

    if (isLoading) {
        return (
            <div className="loading-screen">
                <div className="loading-content">
                    <div className="loading-logo">EventCraft</div>
                    <div className="loading-spinner"></div>
                    <p className="loading-text">Creating magic...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="event-planner-container">
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className='header-container'>
                    <div className='header-content'>
                        <div className='logo'>
                            <h3 className='logo-text'>EventCraft</h3>
                        </div>
                    </div>
                    <nav className='nav'>
                        <ul className='nav-links'>
                            <li className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>
                                <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
                            </li>
                            <li className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>
                                <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
                            </li>
                            <li className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}>
                                <a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a>
                            </li>
                            <li className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
                                <a href="#about" onClick={() => scrollToSection('about')}>About</a>
                            </li>
                            <li className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
                                <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
                            </li>
                        </ul>
                        <button className='nav-button' onClick={() => scrollToSection('contact')}>
                            Get Quote <FaArrowRight style={{ marginLeft: '8px' }} />
                        </button>
                    </nav>
                    <button className='mobile-menu-toggle' onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className='mobile-nav-links'>
                        <li className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}>
                            <a href="#home" onClick={() => handleMobileNavClick('home')}>Home</a>
                        </li>
                        <li className={`mobile-nav-link ${activeSection === 'services' ? 'active' : ''}`}>
                            <a href="#services" onClick={() => handleMobileNavClick('services')}>Services</a>
                        </li>
                        <li className={`mobile-nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}>
                            <a href="#portfolio" onClick={() => handleMobileNavClick('portfolio')}>Portfolio</a>
                        </li>
                        <li className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}>
                            <a href="#about" onClick={() => handleMobileNavClick('about')}>About</a>
                        </li>
                        <li className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
                            <a href="#contact" onClick={() => handleMobileNavClick('contact')}>Contact</a>
                        </li>
                    </ul>
                    <button className='mobile-nav-button' onClick={() => handleMobileNavClick('contact')}>
                        Get Quote <FaArrowRight style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </header>

            <div className='hero' id="home">
                <div className='hero-content'>
                    <div className="hero-text-content">
                        <h1 className='hero-title'>
                            Creating <span className="text-gradient">Unforgettable</span> Moments
                        </h1>
                        <p className='hero-description'>
                            From intimate gatherings to grand celebrations, we transform your vision into extraordinary experiences. 
                            Professional event planning with a personal touch that makes every detail count.
                        </p>
                        <div className='hero-buttons'>
                            <button className='btn-primary' onClick={() => scrollToSection('services')}>
                                Get Started <FaArrowRight style={{ marginLeft: '8px' }} />
                            </button>
                            <button className='btn-secondary' onClick={() => scrollToSection('portfolio')}>
                                View Portfolio
                            </button>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Events Planned</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">98%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                        </div>
                    </div>
                    <div className='image-card'>
                        <img src={hero} alt="Event Planning Hero" className='hero-img' />
                        <div className="image-badge">
                            <FaStar style={{ color: '#fbbf24' }} />
                            <span>Trusted by 500+ Clients</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='services' id="services">
                <div className='services-container'>
                    <div className='section-header'>
                        <h1 className='section-title'>Our Event Services</h1>
                        <p className='section-description'>
                            We specialize in creating memorable experiences across all types of events, 
                            from intimate gatherings to grand celebrations.
                        </p>
                    </div>
                    <div className='services-grid'>
                        <div className='service-card wedding'>
                            <div className="service-icon">
                                <svg className="icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h2 className='service-title'>Weddings</h2>
                            <p className='service-description'>Elegant and personalized wedding planning services to make your special day truly unforgettable.</p>
                            <ul className='service-list'>
                                <li className='service-list-item'>Venue Selection & Coordination</li>
                                <li className='service-list-item'>Vendor Management</li>
                                <li className='service-list-item'>Day-of Event Management</li>
                                <li className='service-list-item'>Wedding Timeline Planning</li>
                            </ul>
                            <button className="service-cta">Learn More <FaArrowRight /></button>
                        </div>
                        <div className='service-card corporate'>
                            <div className="service-icon">
                                <svg className="icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h2 className='service-title'>Corporate Events</h2>
                            <p className='service-description'>Professional events that reflect your brand and achieve your business objectives with precision.</p>
                            <ul className='service-list'>
                                <li className='service-list-item'>Conference & Seminar Planning</li>
                                <li className='service-list-item'>Team Building Activities</li>
                                <li className='service-list-item'>Product Launch Events</li>
                                <li className='service-list-item'>Annual Company Meetings</li>
                            </ul>
                            <button className="service-cta">Learn More <FaArrowRight /></button>
                        </div>
                        <div className='service-card personal'>
                            <div className="service-icon">
                                <svg className="icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                </svg>
                            </div>
                            <h2 className='service-title'>Birthday Parties</h2>
                            <p className='service-description'>Fun and creative birthday party planning services for all ages with personalized themes.</p>
                            <ul className='service-list'>
                                <li className='service-list-item'>Theme Design & Decoration</li>
                                <li className='service-list-item'>Entertainment Coordination</li>
                                <li className='service-list-item'>Catering & Cake Services</li>
                                <li className='service-list-item'>Photography & Videography</li>
                            </ul>
                            <button className="service-cta">Learn More <FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='portfolio' id="portfolio">
                <div className='portfolio-container'>
                    <div className='section-header'>
                        <h1 className="section-title">Our Portfolio</h1>
                        <p className="section-description">
                            Take a look at some of our recent successful events that showcase our creativity and attention to detail.
                        </p>
                    </div>
                    <div className='portfolio-grid'>
                        {portfolioData.map((item, idx) => (
                            <div key={item.id || idx} className='portfolio-item animate-fade-in-up' style={{ animationDelay: `${idx * 0.1}s` }}>
                                <img src={item.image} alt={item.title} className='portfolio-image' />
                                <div className='portfolio-overlay'>
                                    <div className="portfolio-category">{item.category} • {item.year}</div>
                                    <h3 className='portfolio-title'>{item.title}</h3>
                                    <p className='portfolio-description'>{item.description}</p>
                                    <button className="portfolio-btn">View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='features'>
                <div className='features-container'>
                    <div className='section-header'>
                        <h1 className='section-title'>Why Choose EventCraft?</h1>
                        <p className='section-description'>
                            Our comprehensive approach ensures every detail is perfect, from concept to execution.
                        </p>
                    </div>
                    <div className='features-grid'>
                        <div className='feature-card animate-fade-in-up'>
                            <div className='feature-icon expert'>
                                <svg className="icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className='feature-card-title'>Experienced Team</h2>
                            <p className='feature-card-description'>Our team has years of experience in event planning and management with proven track records.</p>
                        </div>
                        <div className='feature-card animate-fade-in-up' style={{ animationDelay: '0.1s' }}>
                            <div className='feature-icon planning'>
                                <svg className="icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="3" y="4" width="18" height="18" rx="2" />
                                    <path d="M16 2v4M8 2v4M3 10h18" />
                                </svg>
                            </div>
                            <h2 className='feature-card-title'>Full Planning Service</h2>
                            <p className='feature-card-description'>From concept to execution, we handle every aspect of your event with meticulous attention.</p>
                        </div>
                        <div className='feature-card animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
                            <div className='feature-icon timing'>
                                <svg className="icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h2 className='feature-card-title'>On-Time Delivery</h2>
                            <p className='feature-card-description'>Punctuality is our priority. Your event will be flawlessly executed on schedule.</p>
                        </div>
                        <div className='feature-card animate-fade-in-up' style={{ animationDelay: '0.3s' }}>
                            <div className='feature-icon award'>
                                <svg className="icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="12" cy="8" r="7" />
                                    <path d="M8.21 13.89l-1.42 4.24a1 1 0 0 0 1.45 1.12l3.76-2.2 3.76 2.2a1 1 0 0 0 1.45-1.12l-1.42-4.24" />
                                </svg>
                            </div>
                            <h2 className='feature-card-title'>Award Winning</h2>
                            <p className='feature-card-description'>Recognized for excellence and creativity in event planning across the industry.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='testimonials' id="about">
                <div className='testimonials-container'>
                    <div className='section-header'>
                        <h1 className="section-title">What Our Clients Say</h1>
                        <p className="section-description">
                            Don't just take our word for it - hear from our happy clients who have experienced our exceptional service.
                        </p>
                    </div>
                    <div className='testimonials-grid'>
                        <div className='testimonial-card animate-fade-in-up'>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} style={{ color: '#fbbf24' }} />
                                ))}
                            </div>
                            <p className='testimonial-text'>
                                "EventCraft made our wedding day absolutely perfect! Their attention to detail and creativity were exceptional. 
                                Every moment was flawlessly executed."
                            </p>
                            <div className="testimonial-author">
                                <div>
                                    <h4 className="author-name">Sarah & John</h4>
                                    <p className="author-role">Wedding Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-card animate-fade-in-up' style={{ animationDelay: '0.1s' }}>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} style={{ color: '#fbbf24' }} />
                                ))}
                            </div>
                            <p className='testimonial-text'>
                                "The corporate event was a huge success thanks to EventCraft. They handled everything flawlessly and 
                                our clients were thoroughly impressed!"
                            </p>
                            <div className="testimonial-author">
                                <div>
                                    <h4 className="author-name">Mark Johnson</h4>
                                    <p className="author-role">CEO, TechCorp</p>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-card animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} style={{ color: '#fbbf24' }} />
                                ))}
                            </div>
                            <p className='testimonial-text'>
                                "We had a fantastic birthday party for our daughter. The team was professional, creative, and made 
                                the whole experience stress-free and fun!"
                            </p>
                            <div className="testimonial-author">
                                <div>
                                    <h4 className="author-name">Emily & Tom</h4>
                                    <p className="author-role">Birthday Party Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contact' id="contact">
                <div className='contact-container'>
                    <div className='section-header'>
                        <h1 className="section-title">Get In Touch</h1>
                        <p className="section-description">Ready to plan your perfect event? Contact us today for a free consultation!</p>
                    </div>
                    <div className="contact-content">
                        <div>
                            <h2 className="contact-title">Contact Details</h2>
                            <p className="contact-description">
                                We'd love to hear from you. Reach out via any method below and we'll get back to you within 24 hours.
                            </p>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span className="contact-text">123 Main Street, Islamabad, Pakistan</span>
                                </div>
                                <div className="contact-item">
                                    <FaEnvelope className="contact-icon" />
                                    <span className="contact-text">info@eventcraft.com</span>
                                </div>
                                <div className="contact-item">
                                    <FaPhone className="contact-icon" />
                                    <span className="contact-text">+92 316 014 3685</span>
                                </div>
                            </div>
                            <div className="social-links">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaFacebookF />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaTwitter />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                        <div className="contact-form-container">
                            <form className="contact-form" onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Full Name</label>
                                    <input className="form-input" type="text" id="name" name="name" placeholder="Your full name" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Email Address</label>
                                    <input className="form-input" type="email" id="email" name="email" placeholder="your.email@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="phone">Phone Number</label>
                                    <input className="form-input" type="tel" id="phone" name="phone" placeholder="+92 XXX XXX XXXX" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="service">Service Type</label>
                                    <select className="form-select" id="service" name="service" required>
                                        <option value="">Select a Service</option>
                                        <option value="wedding">Wedding Planning</option>
                                        <option value="corporate">Corporate Event</option>
                                        <option value="birthday">Birthday Party</option>
                                        <option value="other">Other Event</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="date">Event Date</label>
                                    <input className="form-input" type="date" id="date" name="date" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="message">Message</label>
                                    <textarea className="form-textarea" id="message" name="message" rows="4" placeholder="Tell us about your event vision and requirements..." required></textarea>
                                </div>
                                <button className="form-submit" type="submit">
                                    Send Message <FaArrowRight style={{ marginLeft: '8px' }} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div>
                            <div className="footer-logo">
                                <FaEnvelope className="footer-logo-icon" />
                                <div className="footer-logo-text">EventCraft</div>
                            </div>
                            <p className="footer-description">
                                We craft unforgettable events with creativity, precision, and heart. 
                                Your vision, our expertise, perfect execution.
                            </p>
                            <div className="footer-social">
                                <FaFacebookF className="footer-social-icon" />
                                <FaInstagram className="footer-social-icon" />
                                <FaTwitter className="footer-social-icon" />
                            </div>
                        </div>

                        <div>
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                <li><a href="#home" className="footer-link" onClick={() => scrollToSection('home')}>Home</a></li>
                                <li><a href="#about" className="footer-link" onClick={() => scrollToSection('about')}>About</a></li>
                                <li><a href="#services" className="footer-link" onClick={() => scrollToSection('services')}>Services</a></li>
                                <li><a href="#portfolio" className="footer-link" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
                                <li><a href="#contact" className="footer-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="footer-title">Our Services</h4>
                            <ul className="footer-links">
                                <li><span className="footer-link">Wedding Planning</span></li>
                                <li><span className="footer-link">Corporate Events</span></li>
                                <li><span className="footer-link">Birthday Parties</span></li>
                                <li><span className="footer-link">Concert Management</span></li>
                                <li><span className="footer-link">Conference Planning</span></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="footer-title">Contact Info</h4>
                            <div className="footer-contact">
                                <span className="footer-contact-item">📍 Islamabad, Pakistan</span>
                                <span className="footer-contact-item">📞 +92 316 014 3685</span>
                                <span className="footer-contact-item">✉️ ehtshamhaqnawaz@gmail.com</span>
                                <span className="footer-contact-item">🕒 Mon-Fri: 9AM-6PM</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} EventCraft. All rights reserved. | Privacy Policy | Terms of Service
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EventPlanner;
