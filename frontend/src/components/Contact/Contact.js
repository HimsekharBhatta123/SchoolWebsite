import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

function Contact() {
    document.title = 'Contact - C.K Academy ';

    const [popupMessage, setPopupMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        classes: ''

    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/submit-form', {
                name: formData.name,
                email: formData.email,
                classes: formData.classes
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                setPopupMessage('Message sent successfully');
                setFormData({
                    name: '',
                    email: '',
                    classes: ''
                });
            } else {
                console.log('Error sending message');
                // Handle error, show alert or error message
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error, show alert or error message
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePopupClose = () => {
        setPopupMessage('');
        setFormData({
            name: '',
            email: '',
            classes: ''
        });
    };

    return (
        <>
            <div className="container">
                <div className="contact-us">
                    <div className="contact-us-title">
                        <h1>Contact Us</h1>
                    </div>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-details">
                            <h2>Contact Information</h2>
                            <p><i className="fa-solid fa-phone sign"></i><b>Contact no.</b><br />+918486580122</p>
                            <p><i className="fa-solid fa-envelope sign"></i><b>Email</b><br />ckacademy70@ymail.com</p>
                            <p><i className="fa-solid fa-location-dot sign"></i><b>Address</b><br />Pillingkata Road, Maidam Bakrapara,Basistha Chariali<br />Guwahati,Assam <br />781029</p>
                        </div>
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223.91763623454227!2d91.79975771385608!3d26.109291452546014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5f24efe9e379%3A0x4973a02a33d6840!2sC.K.%20Academy%20School!5e0!3m2!1sen!2sin!4v1706703063647!5m2!1sen!2sin" width="530" height="220" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="vertical-line"></div>

                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <h2>Send Message</h2>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} /><br /><br />
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} /><br /><br />
                            <label htmlFor="class">Enter class Id:</label>
                            <input type="number" name="classes" id="classes" required value={formData.classes} onChange={handleInputChange} /><br /><br />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>

                {popupMessage && (
                    <div className="popup">
                        <span>{popupMessage}</span>
                        <button onClick={handlePopupClose}>Close</button>
                    </div>
                )}

            </div>
        </>
    )
}

export default Contact;
