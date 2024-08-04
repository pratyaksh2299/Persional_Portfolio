import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const accessKey = import.meta.env.VITE_MAIL_KEY; 
        formData.append("access_key", accessKey);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <div className='Contact' id='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src="" alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h2>Let's talk</h2>
                    <p>Feel free to contact me anytime!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail Icon" />
                            <p>pratyakshsharma40@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon" />
                            <p>+91760989026</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon" />
                            <p>NITW, Telangana</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your name</label>
                    <input type="text" placeholder='Enter your name' name='name'/>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
