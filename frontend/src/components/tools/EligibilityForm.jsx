import React, { useState } from 'react';
import { Filter } from 'lucide-react';

const EligibilityForm = ({ onFilterChange, language }) => {
    const [formData, setFormData] = useState({
        age: '',
        income: '',
        caste: 'General',
        occupation: 'Unemployed'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newData = { ...formData, [name]: value };
        setFormData(newData);

        // Pass parsed number for age/income, string for others
        onFilterChange({
            ...newData,
            age: newData.age ? parseInt(newData.age) : '',
            income: newData.income ? parseInt(newData.income) : ''
        });
    };

    const labels = {
        en: {
            title: "Filter Schemes",
            subtitle: "Enter details to find eligible schemes.",
            age: "Age",
            income: "Annual Income (₹)",
            caste: "Caste Category",
            occupation: "Occupation"
        },
        hi: {
            title: "योजनाएं खोजें",
            subtitle: "पात्र योजनाएं खोजने के लिए विवरण दर्ज करें।",
            age: "आयु",
            income: "वार्षिक आय (₹)",
            caste: "जाति श्रेणी",
            occupation: "व्यवसाय"
        }
    };

    const t = labels[language];

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        borderRadius: '0.5rem',
        border: '1px solid var(--glass-border)',
        background: 'var(--bg-light)',
        color: 'var(--text-dark)',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.2s, background 0.3s, color 0.3s'
    };

    return (
        <div style={{ height: '100%', color: 'var(--text-dark)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ background: 'var(--bg-light)', padding: '0.5rem', borderRadius: '0.5rem', color: 'var(--accent-color)', border: '1px solid var(--glass-border)' }}>
                    <Filter size={20} />
                </div>
                <div>
                    <h3 style={{ margin: 0, color: 'var(--primary-color)' }}>{t.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--secondary-color)' }}>{t.subtitle}</p>
                </div>
            </div>

            <div style={{ display: 'grid', gap: '1.25rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)' }}>
                        {t.age}
                    </label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="e.g. 25"
                        style={inputStyle}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)' }}>
                        {t.income}
                    </label>
                    <input
                        type="number"
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                        placeholder="e.g. 200000"
                        style={inputStyle}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)' }}>
                        {t.caste}
                    </label>
                    <select
                        name="caste"
                        value={formData.caste}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                    >
                        <option value="General">General / सामान्य</option>
                        <option value="OBC">OBC / अन्य पिछड़ा वर्ग</option>
                        <option value="SC">SC / अनुसूचित जाति</option>
                        <option value="ST">ST / अनुसूचित जनजाति</option>
                    </select>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)' }}>
                        {t.occupation}
                    </label>
                    <select
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                    >
                        <option value="Unemployed">Unemployed / बेरोजगार</option>
                        <option value="Salaried">Salaried / वेतनभोगी</option>
                        <option value="Self-Employed">Self-Employed / स्व-नियोजित</option>
                        <option value="Farmer">Farmer / किसान</option>
                        <option value="Student">Student / छात्र</option>
                        <option value="Laborer">Laborer / मजदूर</option>
                        <option value="Retired">Retired / सेवानिवृत्त</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default EligibilityForm;
