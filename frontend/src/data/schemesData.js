export const schemes = [
  {
    id: 1,
    title: { en: "Pradhan Mantri Awas Yojana", hi: "प्रधानमंत्री आवास योजना" },
    category: "Housing",
    eligibility: {
      minAge: 18,
      maxAge: 70,
      maxIncome: 500000,
      caste: ["General", "OBC", "SC", "ST"],
      occupation: ["Salaried", "Self-Employed", "Unemployed"]
    },
    documents: {
        en: ["Aadhar Card", "Income Certificate", "Bank Statement"],
        hi: ["आधार कार्ड", "आय प्रमाण पत्र", "बैंक पासबुक"]
    },
    popularity: 85,
    description: {
      en: "Affordable housing for urban and rural poor.",
      hi: "शहरी और ग्रामीण गरीबों के लिए किफायती आवास।"
    }
  },
  {
    id: 2,
    title: { en: "Ayushman Bharat Yoga", hi: "आयुष्मान भारत योजना" },
    category: "Health",
    eligibility: {
      minAge: 0,
      maxAge: 100,
      maxIncome: 250000, // E.g., for BPL families mostly
      caste: ["General", "OBC", "SC", "ST"],
      occupation: ["Unemployed", "Self-Employed", "Laborer"]
    },
    documents: {
        en: ["Ration Card", "Aadhar Card"],
        hi: ["राशन कार्ड", "आधार कार्ड"]
    },
    popularity: 92,
    description: {
      en: "Health insurance coverage up to ₹5 lakh per family per year.",
      hi: "प्रति परिवार प्रति वर्ष ₹5 लाख तक का स्वास्थ्य बीमा कवर।"
    }
  },
  {
      id: 3,
      title: { en: "PM Kisan Samman Nidhi", hi: "पीएम किसान सम्मान निधि" },
      category: "Agriculture",
      eligibility: {
        minAge: 18,
        maxAge: 100,
        maxIncome: 10000000, // Technically land ownership matters more, but simplistic for demo
        caste: ["General", "OBC", "SC", "ST"],
        occupation: ["Farmer"]
      },
      documents: {
          en: ["Land Records", "Bank Account Details", "Aadhar Card"],
          hi: ["भूमि रिकॉर्ड", "बैंक खाता विवरण", "आधार कार्ड"]
      },
      popularity: 78,
      description: {
        en: "Income support of ₹6,000 per year to detailed farmer families.",
        hi: "किसान परिवारों को प्रति वर्ष ₹6,000 की आय सहायता।"
      }
    },
    {
      id: 4,
      title: { en: "National Social Assistance Programme", hi: "राष्ट्रीय सामाजिक सहायता कार्यक्रम" },
      category: "Pension",
      eligibility: {
        minAge: 60,
        maxAge: 120,
        maxIncome: 100000, // Below poverty line
        caste: ["General", "OBC", "SC", "ST"],
        occupation: ["Unemployed", "Retired"]
      },
      documents: {
          en: ["Age Proof", "BPL Card"],
          hi: ["आयु प्रमाण", "बीपीएल कार्ड"]
      },
      popularity: 65,
      description: {
        en: "Pension for elderly, widows, and disabled persons.",
        hi: "बुजुर्गों, विधवाओं और विकलांग व्यक्तियों के लिए पेंशन।"
      }
    },
    {
      id: 5,
      title: { en: "Post Matric Scholarship for SC Students", hi: "एससी छात्रों के लिए पोस्ट मैट्रिक छात्रवृत्ति" },
      category: "Education",
      eligibility: {
        minAge: 16,
        maxAge: 30,
        maxIncome: 250000,
        caste: ["SC"],
        occupation: ["Student"]
      },
      documents: {
          en: ["Caste Certificate", "Income Certificate", "Mark Sheet"],
          hi: ["जाति प्रमाण पत्र", "आय प्रमाण पत्र", "अंक पत्र"]
      },
      popularity: 70,
      description: {
        en: "Financial assistance for SC students strictly for post-matriculation.",
        hi: "मैट्रिक के बाद की पढ़ाई के लिए एससी छात्रों के लिए वित्तीय सहायता।"
      }
    }
];
