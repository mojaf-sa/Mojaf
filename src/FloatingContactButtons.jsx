import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const FloatingContactButtons = () => {
    const phoneNumber = '+966568401900'; // Replace with your phone number
    const whatsappNumber = '+966568401900'; // WhatsApp number (without +)

    return (
        <div style={styles.container}>
            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.whatsappButton}
                title="Chat on WhatsApp"
            >
                <FaWhatsapp size={24} />
            </a>

        {/* Call Button */}
            <a href={`tel:${phoneNumber}`} style={styles.callButton} title="Call Us">
                <FaPhoneAlt size={20} />
            </a>

        </div>
    );
};

const baseButton = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    textDecoration: 'none',
};

const styles = {
    container: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 999,
    },
    callButton: {
        ...baseButton,
        backgroundColor: '#007bff',
    },
    whatsappButton: {
        ...baseButton,
        backgroundColor: '#25D366',
    },
};

export default FloatingContactButtons;
