import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, ArrowRight, Shield, BookOpen, UserCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { t } = useLanguage();

    const categories = [
        { name: "Health", icon: <Activity size={24} />, color: "#EF4444" },
        { name: "Education", icon: <BookOpen size={24} />, color: "#3B82F6" },
        { name: "Finance", icon: <Shield size={24} />, color: "#10B981" },
        { name: "Social Welfare", icon: <UserCheck size={24} />, color: "#8B5CF6" },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, var(--primary-color) 0%, #1e3a8a 100%)',
                color: 'white',
                padding: '5rem 0',
                marginBottom: '3rem',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white' }}>{t.heroTitle}</h1>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
                        {t.heroSubtitle}
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/schemes" className="btn btn-accent" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {t.exploreBtn} <ArrowRight size={20} />
                        </Link>
                        <Link to="/eligibility" className="btn" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}>
                            {t.eligibilityBtn}
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container">
                {/* Quick Search */}
                <div className="glass-card" style={{ marginTop: '-4rem', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                        <Search color="#94a3b8" />
                        <input
                            type="text"
                            placeholder={t.searchPlaceholder}
                            style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1.1rem', padding: '0.5rem' }}
                        />
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>

                {/* Categories */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Browse by Category</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {categories.map((cat) => (
                            <div key={cat.name} className="glass-card" style={{
                                textAlign: 'center',
                                cursor: 'pointer',
                                transition: 'transform 0.3s',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{
                                    background: `${cat.color}20`,
                                    color: cat.color,
                                    padding: '1rem',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {cat.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-dark)' }}>{cat.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Home;
