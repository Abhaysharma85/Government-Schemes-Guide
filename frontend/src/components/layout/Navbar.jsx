import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Search, Menu, X, Landmark, Globe, Moon, Sun } from 'lucide-react';

const Navbar = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    };

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
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--glass-border)',
            color: 'var(--text-dark)',
            padding: '1rem 0',
            transition: 'background 0.3s, color 0.3s'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                {/* Left Side: Logo + Navigation */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary-color)', textDecoration: 'none' }}>
                        <Landmark size={28} color="var(--primary-color)" />
                        <span>GovSchemes<span style={{ color: 'var(--accent-color)' }}>.in</span></span>
                    </Link>

                    {/* Desktop Nav - Now on the Left */}
                    <div className="desktop-nav" style={{ display: 'none', gap: '1.5rem', alignItems: 'center' }}>
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
                                    color: isActive ? 'var(--primary-color)' : 'var(--secondary-color)',
                                    fontWeight: isActive ? 600 : 400,
                                    fontSize: '0.95rem',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Right Side: Tools (Language + Dark Mode + Mobile Toggle) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        style={{
                            background: 'transparent',
                            border: '1px solid var(--secondary-color)',
                            borderRadius: '0.375rem',
                            padding: '0.4rem 0.8rem',
                            color: 'var(--text-dark)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            transition: 'all 0.2s'
                        }}
                    >
                        <Globe size={16} />
                        <span style={{ display: 'none', '@media (min-width: 640px)': { display: 'inline' } }}>
                            {language === 'en' ? 'EN' : 'हिं'}
                        </span>
                    </button>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-dark)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0.5rem',
                            transition: 'color 0.2s'
                        }}
                        title="Toggle Dark Mode"
                    >
                        {darkMode ? <Sun size={22} color="var(--accent-color)" /> : <Moon size={22} />}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ background: 'none', border: 'none', color: 'var(--text-dark)', cursor: 'pointer' }}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'var(--bg-light)',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    borderBottom: '1px solid var(--glass-border)',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    zIndex: 999
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                padding: '0.75rem',
                                color: 'var(--text-dark)',
                                borderBottom: '1px solid var(--glass-border)',
                                textDecoration: 'none',
                                fontWeight: '500'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
