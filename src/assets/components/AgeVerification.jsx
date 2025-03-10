import React from 'react';
import '../styles/AgeVerification.css';

const AgeVerification = ({ onVerify }) => {
    return (
        <div className="age-verification-overlay">
            <div className="age-verification-modal">
                <h1>Bienvenido a Clandestino.cl</h1>
                <h2>Verificación de Edad</h2>
                <p>Debes ser mayor de 18 años para acceder a este sitio.</p>
                <p>¿Eres mayor de 18 años?</p>
                <div className="age-verification-buttons">
                    <button 
                        onClick={() => onVerify(true)}
                    >
                        Sí, soy mayor de 18
                    </button>
                    <button 
                        onClick={() => onVerify(false)}
                    >
                        No, soy menor de 18
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgeVerification;
