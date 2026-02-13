import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Search, Menu, X, Landmark, Globe } from 'lucide-react';

const Navbar = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: t.home, path: "/" },
        { name: t.schemes, path: "/schemes" },
        { name: t.eligibility, path: "/eligibility" },
        { name: t.dashboard, path: "/dashboard" },
    ];

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            background: 'rgba(15, 23, 42, 0.95)', // Dark Navy
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            color: 'white',
            padding: '1rem 0'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                    <Landmark size={32} color="var(--accent-color)" />
                    <span>GovSchemes<span style={{ color: 'var(--accent-color)' }}>.in</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="desktop-nav" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
                    <style>{`
            @media (min-width: 768px) {
                .desktop-nav { display: flex !important; }
                .mobile-toggle { display: none !important; }
            }
            `}</style>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => isActive ? "active-link" : ""}
                            style={({ isActive }) => ({
                                color: isActive ? 'var(--accent-color)' : 'rgba(255,255,255,0.8)',
                                fontWeight: isActive ? 600 : 400,
                                fontSize: '1rem'
                            })}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        style={{
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '20px',
                            padding: '0.5rem 1rem',
                            color: 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.9rem'
                        }}
                    >
                        <Globe size={16} />
                        {language === 'en' ? 'English' : 'हिंदी'}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: '#1E293B',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ padding: '0.5rem', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--accent-color)',
                            textAlign: 'left',
                            padding: '0.5rem',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <Globe size={16} />
                        {language === 'en' ? 'Change to Hindi' : 'अंग्रेजी में बदलें'}
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
