import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // 'en' or 'hi'

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
    };

    const translations = {
        en: {
            searchPlaceholder: "Search for schemes...",
            home: "Home",
            schemes: "Schemes",
            dashboard: "Dashboard",
            eligibility: "Check Eligibility",
            login: "Login",
            footerText: "© 2024 Government Scheme Portal. All rights reserved.",
            heroTitle: "Find Government Schemes That Fit You",
            heroSubtitle: "A smart portal to discover, track, and apply for government benefits easily.",
            exploreBtn: "Explore Schemes",
            eligibilityBtn: "Check Eligibility",
        },
        hi: {
            searchPlaceholder: "योजनाएं खोजें...",
            home: "मुख्य पृष्ठ",
            schemes: "योजनाएं",
            dashboard: "डैशबोर्ड",
            eligibility: "पात्रता जांचें",
            login: "लॉगिन",
            footerText: "© 2024 सरकारी योजना पोर्टल। सभी अधिकार सुरक्षित।",
            heroTitle: "अपने लिए सही सरकारी योजनाएं खोजें",
            heroSubtitle: "सरकारी लाभों को आसानी से खोजने, ट्रैक करने और आवेदन करने के लिए एक स्मार्ट पोर्टल।",
            exploreBtn: "योजनाएं देखें",
            eligibilityBtn: "पात्रता जांचें",
        }
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useLanguage = () => useContext(LanguageContext);
