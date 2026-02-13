import React from 'react';
import { schemes } from '../data/schemesData';
import { useLanguage } from '../context/LanguageContext';
import { BarChart3, TrendingUp, Users, FileCheck } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ padding: '1rem', borderRadius: '50%', background: `${color}20`, color: color }}>
            <Icon size={24} />
        </div>
        <div>
            <p style={{ margin: 0, color: 'var(--secondary-color)', fontSize: '0.9rem' }}>{title}</p>
            <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-dark)' }}>{value}</h3>
        </div>
    </div>
);

const Dashboard = () => {
    const { language } = useLanguage();

    // Sort schemes by popularity
    const sortedSchemes = [...schemes].sort((a, b) => b.popularity - a.popularity).slice(0, 5);

    const t = {
        en: {
            title: "Admin Insights",
            subtitle: "Real-time overview of scheme performance and citizen engagement.",
            trending: "Top Trending Schemes",
            totalSchemes: "Total Schemes",
            activeUsers: "Active Users",
            applications: "Total Applications"
        },
        hi: {
            title: "व्यवस्थापक अंतर्दृष्टि",
            subtitle: "योजना के प्रदर्शन और नागरिक जुड़ाव का वास्तविक समय अवलोकन।",
            trending: "शीर्ष लोकप्रिय योजनाएं",
            totalSchemes: "कुल योजनाएं",
            activeUsers: "सक्रिय उपयोगकर्ता",
            applications: "कुल आवेदन"
        }
    };

    const text = t[language];

    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>{text.title}</h1>
                <p style={{ color: 'var(--secondary-color)' }}>{text.subtitle}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <StatCard title={text.totalSchemes} value={schemes.length} icon={FileCheck} color="#3B82F6" />
                <StatCard title={text.activeUsers} value="1,234" icon={Users} color="#10B981" />
                <StatCard title={text.applications} value="5,678" icon={TrendingUp} color="#F59E0B" />
            </div>

            <div className="glass-card">
                <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary-color)' }}>
                    <BarChart3 /> {text.trending}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {sortedSchemes.map(scheme => (
                        <div key={scheme.id}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ fontWeight: 500, color: 'var(--text-dark)' }}>{scheme.title[language]}</span>
                                <span style={{ fontWeight: 700, color: 'var(--primary-color)' }}>{scheme.popularity}%</span>
                            </div>
                            <div style={{ height: '8px', background: 'var(--secondary-color)', opacity: 0.2, borderRadius: '4px', overflow: 'hidden' }}>
                                <div
                                    style={{
                                        width: `${scheme.popularity}%`,
                                        height: '100%',
                                        background: 'linear-gradient(90deg, var(--primary-color) 0%, var(--accent-color) 100%)',
                                        borderRadius: '4px'
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
