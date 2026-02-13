import React, { useState } from 'react';
import { FileText, CheckCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const SchemeList = ({ schemes, language }) => {
    const [expandedScheme, setExpandedScheme] = useState(null);

    const toggleExpand = (id) => {
        setExpandedScheme(expandedScheme === id ? null : id);
    };

    const t = {
        en: {
            results: "Eligible Schemes",
            noResults: "No schemes found matching your criteria. Try adjusting the filters.",
            docs: "Document Roadmap",
            apply: "Apply Now",
            viewDetails: "View Details",
            hideDetails: "Hide Details",
            step1: "Gather Docs",
            step2: "Verify",
            step3: "Submit"
        },
        hi: {
            results: "पात्र योजनाएं",
            noResults: "आपके मानदंडों से मेल खाने वाली कोई योजना नहीं मिली। फिल्टर समायोजित करने का प्रयास करें।",
            docs: "दस्तावेज़ रोडमैप",
            apply: "अभी आवेदन करें",
            viewDetails: "विवरण देखें",
            hideDetails: "विवरण छिपाएं",
            step1: "दस्तावेज़ जमा करें",
            step2: "सत्यापन",
            step3: "जमा करें"
        }
    };

    const text = t[language];

    if (schemes.length === 0) {
        return (
            <div className="glass-card" style={{ textAlign: 'center', padding: '3rem' }}>
                <h3 style={{ color: 'var(--secondary-color)' }}>{text.noResults}</h3>
            </div>
        );
    }

    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {text.results}
                <span style={{ fontSize: '1rem', background: 'var(--primary-color)', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '1rem' }}>
                    {schemes.length}
                </span>
            </h2>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {schemes.map(scheme => (
                    <div key={scheme.id} className="glass-card" style={{ transition: 'all 0.3s ease', borderLeft: `4px solid ${scheme.category === 'Health' ? '#EF4444' : scheme.category === 'Education' ? '#3B82F6' : '#F59E0B'}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <span style={{
                                        background: '#f1f5f9',
                                        color: '#475569',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '1rem',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        textTransform: 'uppercase'
                                    }}>
                                        {scheme.category}
                                    </span>
                                    {scheme.popularity > 80 && (
                                        <span style={{
                                            background: '#dcfce7',
                                            color: '#166534',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '1rem',
                                            fontSize: '0.75rem',
                                            fontWeight: '600'
                                        }}>
                                            Trending
                                        </span>
                                    )}
                                </div>
                                <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary-color)' }}>{scheme.title[language]}</h3>
                                <p style={{ color: 'var(--secondary-color)', marginBottom: '1rem', lineHeight: '1.6' }}>{scheme.description[language]}</p>
                            </div>

                            <button
                                onClick={() => toggleExpand(scheme.id)}
                                className="btn"
                                style={{
                                    background: 'white',
                                    border: '1px solid #e2e8f0',
                                    padding: '0.5rem 1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.9rem'
                                }}
                            >
                                {expandedScheme === scheme.id ? (
                                    <>{text.hideDetails} <ChevronUp size={16} /></>
                                ) : (
                                    <>{text.viewDetails} <ChevronDown size={16} /></>
                                )}
                            </button>
                        </div>

                        {expandedScheme === scheme.id && (
                            <div style={{ marginTop: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', animation: 'fadeIn 0.3s ease-in-out' }}>
                                <style>{`
                                    @keyframes fadeIn {
                                        from { opacity: 0; transform: translateY(-10px); }
                                        to { opacity: 1; transform: translateY(0); }
                                    }
                                `}</style>

                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                    <FileText size={20} color="var(--primary-color)" /> {text.docs}
                                </h4>

                                {/* Document Roadmap / Stepper */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', position: 'relative' }}>
                                    {/* Line */}
                                    <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: '#e2e8f0', zIndex: 0 }}></div>

                                    {/* Step 1 */}
                                    <div style={{ position: 'relative', zIndex: 1, background: 'white', padding: '0 0.5rem', textAlign: 'center' }}>
                                        <div style={{ width: '32px', height: '32px', background: 'var(--primary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 0.5rem auto' }}>1</div>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{text.step1}</span>
                                    </div>

                                    {/* Step 2 */}
                                    <div style={{ position: 'relative', zIndex: 1, background: 'white', padding: '0 0.5rem', textAlign: 'center' }}>
                                        <div style={{ width: '32px', height: '32px', background: '#e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', margin: '0 auto 0.5rem auto' }}>2</div>
                                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{text.step2}</span>
                                    </div>

                                    {/* Step 3 */}
                                    <div style={{ position: 'relative', zIndex: 1, background: 'white', padding: '0 0.5rem', textAlign: 'center' }}>
                                        <div style={{ width: '32px', height: '32px', background: '#e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', margin: '0 auto 0.5rem auto' }}>3</div>
                                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{text.step3}</span>
                                    </div>
                                </div>

                                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
                                    <ul style={{ margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                                        {scheme.documents[language].map((doc, index) => (
                                            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                                <CheckCircle size={16} color="var(--accent-color)" /> {doc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{ textAlign: 'right' }}>
                                    <button className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                        {text.apply} <ExternalLink size={16} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SchemeList;
