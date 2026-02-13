import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, ArrowRight, Shield, BookOpen, UserCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { t } = useLanguage();

    const categories = [
        { name: "Health", icon: <Activity size={24} />, color: "#000000" },
        { name: "Education", icon: <BookOpen size={24} />, color: "#000000" },
        { name: "Finance", icon: <Shield size={24} />, color: "#000000" },
        { name: "Social Welfare", icon: <UserCheck size={24} />, color: "#000000" },
    ];

    return (
        <div style={{ background: '#ffffff', minHeight: '100vh' }}>
            {/* Hero Section */}
            <section style={{
                background: '#ffffff',
                color: '#000000',
                padding: '6rem 0 4rem 0',
                marginBottom: '3rem',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ 
                        fontSize: '3.5rem', 
                        marginBottom: '1.5rem', 
                        color: '#000000',
                        fontWeight: '800',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.1'
                    }}>
                        {t.heroTitle}
                    </h1>
                    <p style={{ 
                        fontSize: '1.15rem', 
                        marginBottom: '2.5rem', 
                        color: '#666666',
                        maxWidth: '650px', 
                        margin: '0 auto 2.5rem auto',
                        lineHeight: '1.6',
                        fontWeight: '400'
                    }}>
                        {t.heroSubtitle}
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link 
                            to="/schemes" 
                            className="btn btn-accent" 
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '0.5rem',
                                background: '#000000',
                                color: '#ffffff',
                                padding: '0.875rem 2rem',
                                borderRadius: '0.375rem',
                                border: 'none',
                                fontWeight: '500',
                                fontSize: '1rem',
                                textDecoration: 'none',
                                transition: 'all 0.2s'
                            }}
                        >
                            {t.exploreBtn} <ArrowRight size={20} />
                        </Link>
                        <Link 
                            to="/eligibility" 
                            className="btn" 
                            style={{ 
                                background: '#ffffff', 
                                border: '1.5px solid #e5e5e5', 
                                color: '#000000',
                                padding: '0.875rem 2rem',
                                borderRadius: '0.375rem',
                                fontWeight: '500',
                                fontSize: '1rem',
                                textDecoration: 'none',
                                transition: 'all 0.2s'
                            }}
                        >
                            {t.eligibilityBtn}
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container">
                {/* Quick Search */}
                <div style={{ 
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem auto'
                }}>
                    <div style={{ 
                        display: 'flex', 
                        gap: '0.75rem', 
                        alignItems: 'center', 
                        background: '#ffffff', 
                        padding: '0.5rem 1rem', 
                        borderRadius: '0.5rem', 
                        border: '1.5px solid #e5e5e5',
                        transition: 'border-color 0.2s'
                    }}>
                        <Search color="#999999" size={20} />
                        <input
                            type="text"
                            placeholder={t.searchPlaceholder}
                            style={{ 
                                flex: 1, 
                                border: 'none', 
                                outline: 'none', 
                                fontSize: '1rem', 
                                padding: '0.5rem',
                                color: '#000000',
                                background: 'transparent'
                            }}
                        />
                        <button 
                            className="btn btn-primary"
                            style={{
                                background: '#000000',
                                color: '#ffffff',
                                border: 'none',
                                padding: '0.5rem 1.5rem',
                                borderRadius: '0.375rem',
                                fontWeight: '500',
                                cursor: 'pointer'
                            }}
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Categories */}
                <section style={{ marginBottom: '4rem', maxWidth: '900px', margin: '0 auto 4rem auto' }}>
                    <h2 style={{ 
                        textAlign: 'center', 
                        marginBottom: '2.5rem',
                        fontSize: '1.75rem',
                        fontWeight: '700',
                        color: '#000000'
                    }}>
                        Browse by Category
                    </h2>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
                        gap: '1rem'
                    }}>
                        {categories.map((cat) => (
                            <div 
                                key={cat.name} 
                                className="glass-card" 
                                style={{
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '2rem 1.5rem',
                                    background: '#ffffff',
                                    border: '1.5px solid #e5e5e5',
                                    borderRadius: '0.5rem'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.borderColor = '#000000';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = '#e5e5e5';
                                }}
                            >
                                <div style={{
                                    background: '#f5f5f5',
                                    color: cat.color,
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid #e5e5e5'
                                }}>
                                    {cat.icon}
                                </div>
                                <h3 style={{ 
                                    fontSize: '1rem', 
                                    margin: 0, 
                                    color: '#000000',
                                    fontWeight: '600'
                                }}>
                                    {cat.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Home;