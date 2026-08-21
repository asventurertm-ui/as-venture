import { image } from 'motion/react-client';
import {
  StatItem,
  TrustFactor,
  SolarService,
  ProcessStep,
  Testimonial,
  FAQItem,
  TeamMember,
  CoreValue
} from './types';
import {
  Award,
  Sun,
  Landmark,
  Zap,
} from "lucide-react";


export const STATS_DATA: StatItem[] = [
  { value: '500+', label: 'Projects Completed', iconName: 'FolderCheck' },
  { value: '15 MW+', label: 'Solar Capacity Installed', iconName: 'Zap' },
  { value: '10+', label: 'Years Industry Experience', iconName: 'Award' },
  { value: '98%', label: 'Customer Satisfaction', iconName: 'Smile' }
];

export const TRUST_FACTORS: TrustFactor[] = [
  {
    title: "Certified Premium & Proven Technology",
    description: "We use only top-quality, certified solar components to ensure reliable performance.",
    iconName: "Stamp" // Or "CheckBadge", "Award"
  },
  {
    title: "Compatible Components for Maximum Output",
    description: "Our systems are designed with perfectly matched parts to maximize energy generation.",
    iconName: "Zap" // Or "LightningBolt"
  },
  {
    title: "Hassle-Free & Quick Installation",
    description: "Expert teams install your system efficiently, minimizing downtime.",
    iconName: "Clock" // Or "Timer"
  },
  {
    title: "Unmatched Client Satisfaction",
    description: "Our commitment to quality and service has earned us loyal, happy customers.",
    iconName: "Smile" // Or "FaceSmile"
  },
  {
    title: "No Consulting Fees",
    description: "We provide free expert consultation with no hidden charges.",
    iconName: "Headset" // Or "Phone", "CustomerService"
  },
  {
    title: "Your One-Stop Solar Solution",
    description: "From design to maintenance, we handle everything for your solar needs.",
    iconName: "Lightbulb" // Or "Hexagon", "Sun"
  }
];

// export const PARTNER_SECTIONS = [
//   {
//     id: 1,
//     title: "Certificates & Accreditations",
//     description:
//       "Recognized certifications and industry approvals that reflect our commitment to quality and excellence.",
//     logos: [
//       "/as-venture-certificate.jpeg",
//       "/as-venture-certificate3.jpeg",
//       "/as-venture-certificate4.jpeg",
//     ],
//   },
//   {
//     id: 2,
//     title: "Inverters",
//     description:
//       "Leading solar panel manufacturers trusted for residential and commercial installations.",
//     logos: [
//       "/as-venture-solaredge.png",
//       "/as-venture-polycabsolar.png",
//       "/as-venture-havells.png",
//       "/as-venture-sungrow.png",
//       "/as-venture-goodwe.png",
//       "/as-venture-hopewind.jpg",
//     ],
//   },
//   {
//     id: 3,
//     title: "investor",
//     description:
//       "Flexible financing options through trusted banking institutions.",
//     logos: [
//       "/as-venture-sbi.webp",
//       "/as-venture-hdfc.jpg",
//       "/as-venture-bankOfBaroda.png",
//       "/as-venture-sibdi.png",
//     ],
//   },
  
// ];

export const PARTNER_SECTIONS = [
  {
    id: 1,
    title: "Certificates & Accreditations",
    description:
      "Official certifications and recognitions demonstrating our quality standards.",
    icon: Award,
    logos: [
       "/as-venture-certificate.jpeg",
      "/as-venture-certificate3.jpeg",
      "/as-venture-certificate4.jpeg",
    ],
  },
  {
    id: 2,
    title: "Solar Module Partners",
    description:
      "Premium solar module manufacturers trusted across all our projects.",
    icon: Sun,
    logos: [
     "/as-venture-solaredge.png",
      "/as-venture-polycabsolar.png",
      "/as-venture-havells.png",
      "/as-venture-sungrow.png",
      "/as-venture-goodwe.png",
      "/as-venture-hopewind.jpg",]
  },
  {
    id: 3,
    title: "Finance Partners",
    description:
      "Trusted banking and financing partners offering flexible solar loans.",
    icon: Landmark,
    logos: [
       "/as-venture-sbi.webp",
      "/as-venture-hdfc.jpg",
      "/as-venture-bankOfBaroda.png",
      "/as-venture-sibdi.png",
    ],
  }]

export const SOLAR_SERVICES: SolarService[] = [
  {
    id: 'site-survey',
    title: 'Site Survey & Consultation',
    description: 'Comprehensive site analysis including structural integrity checks, shadow mapping, and energy load evaluation to determine the optimal solar solution for your premises.',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
    features: [
      'In-depth energy consumption analysis',
      'Roof structure and feasibility assessment',
      'Advanced shadow mapping and 3D modeling',
      'Customized ROI and payback projections'
    ],
    suitableFor: ['Residential Roofs', 'Commercial Buildings', 'Industrial Facilities', 'Open Ground Mounts']
  },
  {
    id: 'system-design',
    title: 'System Design & Engineering',
    description: 'Custom engineering of your solar array using advanced software to select the perfect components and create detailed electrical single-line diagrams for maximum output.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    features: [
      'Optimal inverter and panel matching',
      'Detailed electrical schematics (SLD)',
      'Wind load and structural engineering',
      'Safety and compliance driven designs'
    ],
    suitableFor: ['Complex Roof Structures', 'High-Capacity Plants', 'Off-Grid Systems', 'Grid-Tied Systems']
  },
  {
    id: 'net-metering',
    title: 'Net Metering & Approvals',
    description: 'Seamless handling of all utility grid connectivity requirements. We navigate local regulations, government documentation, and utility approvals on your behalf.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Complete utility paperwork management',
      'Bi-directional meter installation coordination',
      'Liaising with local electricity boards',
      'Safety certificate acquisitions'
    ],
    suitableFor: ['Grid-Connected Homes', 'Commercial Grid-Tie', 'Industrial Open Access']
  },
  {
    id: 'finance-subsidy',
    title: 'Finance & Subsidy Assistance',
    description: 'Expert guidance in securing project funding, low-interest solar loans, and navigating available government subsidies to make your transition highly affordable.',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80',
    features: [
      'PM Surya Ghar subsidy processing',
      'Assistance with low-interest bank loans',
      'Tax benefit and accelerated depreciation guidance',
      'Zero-upfront cost model evaluations'
    ],
    suitableFor: ['Homeowners', 'SME Businesses', 'Large Corporations', 'Housing Societies']
  },
  {
    id: 'epc-execution',
    title: 'EPC Execution',
    description: 'End-to-end project management covering Engineering, Procurement, and Construction. We deliver a hassle-free, turnkey solar deployment from start to finish.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    features: [
      'Turnkey project management',
      'High-quality component procurement',
      'Strict timeline adherence',
      'Transparent progress reporting'
    ],
    suitableFor: ['Large Commercial Sites', 'Utility-Scale Projects', 'Industrial Rooftops', 'Institutional Campuses']
  },
  {
    id: 'installation-commissioning',
    title: 'Installation & Commissioning',
    description: 'Precision physical installation by certified technical experts, followed by rigorous safety testing and the official activation of your solar power plant.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    features: [
      'Trained and certified installation crews',
      'Weather-sealed and secure mounting',
      'Rigorous electrical safety testing',
      'Official grid synchronization and handover'
    ],
    suitableFor: ['All Solar Projects', 'Battery Storage Integrations', 'EV Charger Setups']
  },
  {
    id: 'amc-monitoring',
    title: 'AMC & Remote Monitoring',
    description: 'Comprehensive Annual Maintenance Contracts paired with real-time digital telemetry to constantly track generation metrics and system health from anywhere.',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Real-time mobile app tracking',
      'Proactive fault detection alerts',
      'Scheduled cleaning and physical checkups',
      'Performance optimization reports'
    ],
    suitableFor: ['Existing Solar Owners', 'Commercial Fleets', 'Remote Installations']
  },
  {
    id: 'after-sales-support',
    title: 'After-Sales Support',
    description: 'Dedicated ongoing customer service, prompt hardware troubleshooting, and seamless warranty claim management to ensure decades of reliable power.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    features: [
      'Dedicated toll-free helpline',
      'Rapid response troubleshooting',
      'Hassle-free part replacements',
      'OEM warranty claim handling'
    ],
    suitableFor: ['Long-term Peace of Mind', 'Hardware Upgrades', 'System Expansions']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Consultation & Inspection',
    description: "First, we understand your unique energy needs, then our experts visit your location to assess the site's potential.",
    iconName: 'Clipboard' // Or 'MessageSquare', 'Search'
  },
  {
    step: 2,
    title: 'Design & Procurement',
    description: 'We design a custom solar system and source quality materials for you.',
    iconName: 'Layers'
  },
  {
    step: 3,
    title: 'Expert Installation',
    description: 'Our certified team installs your system with precision and care.',
    iconName: 'Hammer'
  },
  {
    step: 4,
    title: 'Quality Checks & Commissioning',
    description: 'Every component undergoes thorough inspection, followed by rigorous testing for flawless operation.',
    iconName: 'ShieldCheck'
  },
  {
    step: 5,
    title: 'Regulatory Clearances',
    description: 'We take care of all necessary permits and approvals — hassle-free for you.',
    iconName: 'FileText'
  },
  {
    step: 6,
    title: 'Care & Support',
    description: 'With ongoing asset management and maintenance, your system stays in top shape.',
    iconName: 'HeartHandshake'
  }

];



export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Vishwas sharda',
    location: 'Ratlam, MP',
    rating: 5,
    review: "The AS venture team continues to impress us with not only good product, but also with great technical support 24×7. They are true leaders in the industry as professionals helping to advance the industry through their hard work. It's been impressive to watch the company grow and lead the solar industry in ratlam and near by regions."
  },
  {
    name: 'Mahendra Gupta',
    location: 'Ratlam, MP',
    rating: 5,
    review: "Best firm in ratlam for most of the engineering solutions specially in the field of solar energy solutions, satisfied with their work and support after installation of 5kw solar roof top system."
  },
  {
    name: 'PAWAN SHARMA',
    location: 'Ratlam, MP',
    rating: 5,
    review: "As a civil engineer I would like to recommend to hire them for specific services like solar power plant heat pump and water softener .\nHad a great experience with them ."
  },
  {
    name: 'saurabh sharda',
    location: 'Ratlam, MP',
    rating: 5,
    review: "Mr. Shashank Joshi and Mr. Atul are not just knowledgeable about the product but always ready to assist you after the installation. Very helpful and sincere people and above all very punctual."
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "I recently got my solar system installed by AS Venture, and the entire experience was excellent. From the first consultation to the final installation, the team was professional, knowledgeable, and always ready to answer my questions. They completed the work on time without compromising on quality. The installation was neat, and everything was explained clearly. I highly recommend AS Venture to anyone looking for a reliable solar solution."
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "AS Venture की टीम ने शुरुआत से लेकर इंस्टॉलेशन पूरा होने तक बहुत ही प्रोफेशनल तरीके से काम किया। उन्होंने हर स्टेप की पूरी जानकारी दी और मेरी सभी शंकाओं का धैर्यपूर्वक समाधान किया। इंस्टॉलेशन समय पर हुआ और काम की क्वालिटी बहुत अच्छी रही। अब बिजली के बिल में भी अच्छी बचत हो रही है। अगर आप एक भरोसेमंद सोलर कंपनी की तलाश में हैं, तो AS Venture निश्चित रूप से एक बेहतरीन विकल्प है।"
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "Choosing AS Venture for my solar project was one of the best decisions. Their team was punctual, polite, and technically skilled. They suggested the right system according to my electricity usage instead of pushing unnecessary upgrades. The installation was completed smoothly, and the after-sales support has been equally impressive. I’m happy with both the service and the performance of the solar system."
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "मैं AS Venture की सर्विस से पूरी तरह संतुष्ट हूँ। टीम का व्यवहार बहुत अच्छा था और उन्होंने पूरे प्रोजेक्ट को बिना किसी परेशानी के पूरा किया। इंस्टॉलेशन बहुत साफ-सुथरे तरीके से किया गया और सभी सुरक्षा मानकों का भी ध्यान रखा गया। सबसे अच्छी बात यह रही कि इंस्टॉलेशन के बाद भी उन्होंने पूरा सपोर्ट दिया। उनकी ईमानदारी और प्रोफेशनलिज़्म ने मुझे काफी प्रभावित किया।"
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "Excellent experience with AS Venture. Their customer service is outstanding, and the installation team is highly experienced. They maintained complete transparency regarding pricing, equipment, and the installation process. The quality of work exceeded my expectations, and the solar system has been performing efficiently from day one. I would confidently recommend AS Venture to anyone planning to switch to solar energy."
  },

  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "Excellent service by AS Venture. The entire solar installation process was smooth and professional. Highly recommended!"
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "AS Venture की टीम बहुत प्रोफेशनल है। इंस्टॉलेशन समय पर हुआ और पूरा काम बहुत साफ-सुथरे तरीके से किया गया।"
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "Very satisfied with the quality of the solar panels and the support provided by the team. Great experience."
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "बिजली का बिल पहले से काफी कम हो गया है। AS Venture का काम और सर्विस दोनों बेहतरीन हैं।"
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "The staff explained every detail before installation. Honest pricing and excellent after-sales support."
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "अगर आप भरोसेमंद सोलर कंपनी ढूंढ रहे हैं, तो AS Venture एक बहुत अच्छा विकल्प है। काम समय पर और गुणवत्ता के साथ पूरा किया।"
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "Professional team, quality products, and timely installation. I am happy with my decision to choose AS Venture."
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "AS Venture ने हमारी उम्मीदों से भी बेहतर काम किया। टीम का व्यवहार बहुत अच्छा था और पूरी प्रक्रिया आसान रही।"
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "Highly impressed with their customer support. They answered all my questions patiently and completed the work on schedule."
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "बहुत बढ़िया अनुभव रहा। इंस्टॉलेशन के बाद भी टीम ने पूरा सपोर्ट दिया। धन्यवाद AS Venture!"
  },
  {
    name: 'Verified Customer',
    location: 'Madhya Pradesh',
    rating: 5,
    review: "The installation was neat, quick, and hassle-free. I would definitely recommend AS Venture to my friends and family."
  },
];

export const CLIENTS_DATA = [
  { id: 1, name: 'Airen International', logo: '/airen-international-logo.png' },
  { id: 2, name: 'Ankoor Hospital', logo: '/Ankoor-Hospital.jpg' },
  { id: 3, name: 'Anmol Ratan', logo: '/anmol-ratan-logo.jpg' },
  { id: 4, name: 'Arochem', logo: '/arochem-logo.jpg' },
  { id: 5, name: 'GD Hospital', logo: '/gd_hospital_logo.jpg' },
  { id: 6, name: 'GR Industries', logo: '/gr-industries-logo.jpg' },
  { id: 7, name: 'Indian Oil', logo: '/indian-oil-logo.png' },
  { id: 8, name: 'NCHSS', logo: '/NCHSS-Logo.webp' },
  { id: 9, name: 'NKM Tech', logo: '/nkm-tech.png' },
  { id: 10, name: 'Paras Agro', logo: '/paras-agro-logo.jpg' },
  { id: 11, name: 'Parshvanath Industries', logo: '/parshvanath-industries-logo.avif' },
  { id: 12, name: 'RM Jaora', logo: '/rm-jaora-logo.jpg' },
  { id: 13, name: 'Roopvarsha', logo: '/roopvarsha.jpg' },
  { id: 14, name: 'Tata Motor', logo: '/tata-motar-logo.jpg' },
  { id: 15, name: 'The Great Padma', logo: '/the-great-padma-logo.jpg' }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How much can I save with solar?',
    answer: 'By switching to solar, you can save up to 90% on your monthly electricity bills. The exact savings depend on your system size, roof solar exposure, energy usage habits, and prevailing grid tariffs.'
  },
  {
    id: 'faq-2',
    question: 'What is the lifespan of solar panels?',
    answer: 'Premium Tier-1 solar panels have a operational lifespan of 25 to 30 years. Their efficiency decreases extremely slowly (about 0.5% per year), and they are backed by a 25-year manufacturer performance warranty.'
  },
  {
    id: 'faq-3',
    question: 'Is government subsidy available?',
    answer: 'Yes! The government of India offers generous subsidies for residential rooftop solar under the PM Surya Ghar: Muft Bijli Yojana. We handle the complete registration, upload, and documentation support to get your subsidy directly credited.'
  },
  {
    id: 'faq-4',
    question: 'What is net metering and how does it work?',
    answer: 'Net metering is a bi-directional billing mechanism that credits you for excess solar electricity exported back to the grid. On sunny afternoons when solar production exceeds house usage, the meter spins backward, offsetting your night grid usage.'
  },
  {
    id: 'faq-5',
    question: 'How long does the installation take?',
    answer: 'A standard residential solar system (3 KW to 10 KW) takes only 2 to 3 days for physical on-site mounting, wiring, and inverter commissioning. Commercial and large-scale industrial projects take between 1 to 4 weeks.'
  },
  {
    id: 'faq-6',
    question: 'Do you provide maintenance and cleaning services?',
    answer: 'Yes, absolutely. We offer premium Annual Maintenance Contracts (AMC). This includes quarterly physical structural audits, electrical wire integrity sweeps, thermal panel imaging, and chemical-free professional panel cleaning.'
  }
];



export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Integrity',
    description: 'We believe in absolute honesty, transparent pricing, and ethical business dealings. No hidden charges, ever.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Customer Focus',
    description: 'Our clients are at the center of our choices. We design solar arrays tailored to your specific needs, never over-selling.',
    iconName: 'UserCheck'
  },
  {
    title: 'Quality',
    description: 'We strictly source premium Tier-1 Mono PERC Bifacial solar modules and highly efficient microinverters/string inverters.',
    iconName: 'Award'
  },
  {
    title: 'Innovation',
    description: 'Continuously refining our designs, 3D shading simulations, and structural mounts to withstand 150+ km/h wind speeds.',
    iconName: 'Lightbulb'
  },
  {
    title: 'Sustainability',
    description: 'A genuine passion to power a cleaner, greener tomorrow. Every kilowatt we install actively reduces heavy coal carbon footprints.',
    iconName: 'Leaf'
  }
];

export const EXTRA_SERVICES_DATA = [
  {
    title: 'Solar Maintenance Services',
    description: 'Preventative maintenance, detailed performance diagnostics, and quick wiring/inverter troubleshooting for long-term system health.',
    iconName: 'Wrench'
  },
  {
    title: 'Solar Cleaning Services',
    description: 'Professional pressurized pure-water cleaning to remove hardened dust, bird droppings, and pollen that block sunlight and sap energy.',
    iconName: 'Sparkles'
  },
  {
    title: 'Annual Maintenance Contract (AMC)',
    description: 'Enjoy absolute peace of mind. Regular quarterly health inspections, rapid-response site assistance, and free cleaning blocks under AMC.',
    iconName: 'FileCheck'
  },
  {
    title: 'Solar Battery Backup',
    description: 'Integrated intelligent battery storage (Lithium Ferro Phosphate) for smooth, uninterrupted power grids when the main utility lines cut off.',
    iconName: 'BatteryCharging'
  },
  {
    title: 'Transparent Pricing & No Hidden Costs',
    description: 'We deliver comprehensive cost sheets breaking down panels, mounts, wiring, meters, and licenses. The quoted price is what you pay.',
    iconName: 'TrendingUp'
  },
  {
    title: 'Long-Term Performance',
    description: 'Our arrays are designed with corrosion-free hot-dip galvanized mounting structures and top-tier wires to ensure 25+ years of robust yield.',
    iconName: 'Gauge'
  }
];

export const SEVEN_STEPS_INSTALLATION = [
  { 
    step: 1, 
    title: 'We Listen, You Speak', 
    desc: 'First, we understand your unique energy needs and expectations.' 
  },
  { 
    step: 2, 
    title: 'On-Site Inspection', 
    desc: "Our experts visit your location to assess the site's potential and challenges." 
  },
  { 
    step: 3, 
    title: 'Design & Procurement', 
    desc: 'We design a custom solar system and source quality materials for you.' 
  },
  { 
    step: 4, 
    title: 'Expert Installation', 
    desc: 'Our certified team installs your system with precision and care.' 
  },
  { 
    step: 5, 
    title: 'Quality Checks & Commissioning', 
    desc: 'Every component undergoes thorough inspection, followed by rigorous testing for flawless operation.' 
  },
  { 
    step: 6, 
    title: 'Regulatory Clearances', 
    desc: 'We take care of all necessary permits and approvals — hassle-free for you.' 
  },
  { 
    step: 7, 
    title: 'Care & Support', 
    desc: 'With ongoing asset management and maintenance, your system stays in top shape.' 
  }
];