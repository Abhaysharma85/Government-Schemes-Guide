import React from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
    return (
        <div className="splash-screen">
            <div className="flying-color color-1"></div>
            <div className="flying-color color-2"></div>
            <div className="flying-color color-3"></div>

            <div className="splash-content">
                <h1 className="splash-title">Gov Schemes</h1>
            </div>
        </div>
    );
};

export default SplashScreen;
