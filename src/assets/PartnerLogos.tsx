import React from 'react';

export interface Partner {
  id: string;
  name: string;
  location: string;
  info: string;
  logo: React.ReactNode;
}

export const partners: Partner[] = [
  {
    id: "kobesteel",
    name: "Kobe Steel, Ltd.",
    location: "Kobe, Japan",
    info: "Precision structural steel & specialty alloys",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <circle cx="22" cy="30" r="14" fill="#E65100" />
        <path d="M16 30 L28 22 V38 Z" fill="#FFF" />
        <text x="45" y="32" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="14" fill="#1A1A1A">KOBE STEEL</text>
        <text x="45" y="45" fontFamily="'Outfit', sans-serif" fontWeight="500" fontSize="8" fill="#666" letterSpacing="1">KOBELCO GROUP</text>
      </svg>
    )
  },
  {
    id: "kardemir",
    name: "Kardemir",
    location: "Karabük, Turkey",
    info: "Structural steel & export infrastructure",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <rect x="10" y="15" width="24" height="24" rx="4" fill="#1565C0" />
        <path d="M16 22 H28 M22 22 V36" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
        <text x="45" y="35" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="18" fill="#1A1A1A" letterSpacing="-0.5">KARDEMİR</text>
        <text x="45" y="46" fontFamily="'Outfit', sans-serif" fontWeight="600" fontSize="8" fill="#1565C0" letterSpacing="2">STEEL INDUSTRY</text>
      </svg>
    )
  },
  {
    id: "continental",
    name: "Continental Steel & Tube Co.",
    location: "Croydon, PA",
    info: "Tube & steel distributor",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <circle cx="22" cy="30" r="14" stroke="#1565C0" strokeWidth="4" />
        <circle cx="22" cy="30" r="7" stroke="#1E88E5" strokeWidth="3" />
        <text x="45" y="30" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="14" fill="#1A1A1A">CONTINENTAL</text>
        <text x="45" y="44" fontFamily="'Outfit', sans-serif" fontWeight="500" fontSize="9" fill="#1565C0" letterSpacing="1">STEEL & TUBE</text>
      </svg>
    )
  },
  {
    id: "eastern",
    name: "Eastern Steel Corp.",
    location: "Brooklyn, NY",
    info: "Steel distributor & processing",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <path d="M10 15 H32 V21 H18 V26 H28 V32 H18 V37 H32 V43 H10 Z" fill="#D32F2F" />
        <text x="42" y="32" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="18" fill="#1A1A1A" letterSpacing="0.5">EASTERN</text>
        <text x="42" y="45" fontFamily="'Outfit', sans-serif" fontWeight="500" fontSize="9" fill="#555" letterSpacing="1.5">STEEL CORP.</text>
      </svg>
    )
  },
  {
    id: "oneal",
    name: "O'Neal Steel",
    location: "Birmingham, AL",
    info: "Distributor sourcing domestic & import",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <rect x="10" y="15" width="28" height="28" fill="#1976D2" rx="2" />
        <text x="24" y="35" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="22" fill="#FFF" textAnchor="middle">O</text>
        <text x="48" y="34" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="18" fill="#1A1A1A" letterSpacing="-0.5">O'NEAL STEEL</text>
        <text x="48" y="45" fontFamily="'Outfit', sans-serif" fontWeight="500" fontSize="8" fill="#666" letterSpacing="1">AN ONI COMPANY</text>
      </svg>
    )
  },
  {
    id: "coilplus",
    name: "Coilplus, Inc.",
    location: "Portage, IN",
    info: "Steel coil processor & importer",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <path d="M12 30 C12 18, 32 18, 32 30 C32 42, 16 42, 16 30 C16 24, 28 24, 28 30" stroke="#00796B" strokeWidth="4" strokeLinecap="round" fill="none" />
        <text x="42" y="35" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="19" fill="#1A1A1A" letterSpacing="-0.5">COILPLUS</text>
      </svg>
    )
  },
  {
    id: "samuel",
    name: "Samuel, Son & Co.",
    location: "Multiple US locations",
    info: "Heavy import & distribution network",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <path d="M10 20 C10 12, 30 12, 30 20 C30 25, 10 27, 10 32 C10 40, 30 40, 30 32" stroke="#C2185B" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <text x="42" y="31" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="15" fill="#1A1A1A">SAMUEL</text>
        <text x="42" y="43" fontFamily="'Outfit', sans-serif" fontWeight="500" fontSize="8" fill="#C2185B" letterSpacing="1">SON & CO. EST. 1855</text>
      </svg>
    )
  },
  {
    id: "steelwarehouse",
    name: "Steel Warehouse Company",
    location: "South Bend, IN",
    info: "Industrial steel service center",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <path d="M10 30 L22 15 L34 30 L34 42 L10 42 Z" fill="#303F9F" />
        <path d="M15 30 H29 V37 H15 Z" fill="#FFF" />
        <text x="44" y="30" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="14" fill="#1A1A1A">STEEL</text>
        <text x="44" y="44" fontFamily="'Outfit', sans-serif" fontWeight="600" fontSize="11" fill="#303F9F" letterSpacing="0.5">WAREHOUSE</text>
      </svg>
    )
  },
  {
    id: "sunsteel",
    name: "SunSteel, LLC",
    location: "Vancouver, WA",
    info: "Steel fabricator & supplier",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <circle cx="22" cy="30" r="12" fill="#F57C00" />
        <path d="M22 10 V14 M22 46 V50 M10 30 H14 M46 30 H50" stroke="#F57C00" strokeWidth="2.5" strokeLinecap="round" />
        <text x="45" y="35" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="18" fill="#1A1A1A">SUNSTEEL</text>
      </svg>
    )
  },
  {
    id: "sme",
    name: "SME Steel",
    location: "Salt Lake City, UT",
    info: "High-quality structural steel fabricator",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <path d="M10 15 H34 M22 15 V45 M10 45 H34" stroke="#1A1A1A" strokeWidth="4" />
        <text x="45" y="36" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="22" fill="#1A1A1A" letterSpacing="1">SME</text>
        <text x="96" y="36" fontFamily="'Outfit', sans-serif" fontWeight="500" fontSize="14" fill="#666">STEEL</text>
      </svg>
    )
  },
  {
    id: "robinson",
    name: "Robinson Inc.",
    location: "De Pere, WI",
    info: "Custom metal fabrication & machining",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <rect x="10" y="15" width="28" height="28" rx="14" fill="#0288D1" />
        <path d="M18 36 V22 H24 C27 22, 28 24, 28 26 C28 28, 26 29, 24 29 H21 M23 29 L28 36" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="46" y="35" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="16" fill="#1A1A1A">ROBINSON</text>
      </svg>
    )
  },
  {
    id: "ironform",
    name: "Ironform Corp.",
    location: "Chicago, IL",
    info: "Precision metal component manufacturer",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <path d="M10 20 L24 15 L38 20 L38 40 L24 45 L10 40 Z" fill="#37474F" />
        <path d="M14 23 L24 19 L34 23" stroke="#FFF" strokeWidth="2" fill="none" />
        <text x="46" y="34" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="16" fill="#1A1A1A">IRONFORM</text>
        <text x="46" y="44" fontFamily="'Outfit', sans-serif" fontWeight="600" fontSize="8" fill="#78909C" letterSpacing="1">CORPORATION</text>
      </svg>
    )
  },
  {
    id: "unitedsteel",
    name: "United Steel",
    location: "New England, CT",
    info: "Fabricator & erector of structural steel",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <path d="M10 15 H20 V33 C20 37, 28 37, 28 33 V15 H38 V33 C38 43, 10 43, 10 33 Z" fill="#0D47A1" />
        <text x="46" y="31" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="14" fill="#1A1A1A">UNITED STEEL</text>
        <text x="46" y="43" fontFamily="'Outfit', sans-serif" fontWeight="600" fontSize="9" fill="#D32F2F" letterSpacing="2">AMERICA</text>
      </svg>
    )
  },
  {
    id: "rkindustries",
    name: "RK Industries LLC",
    location: "Denver, CO",
    info: "Steel & mechanical contracting",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <rect x="10" y="15" width="28" height="28" rx="2" fill="#E65100" />
        <text x="24" y="35" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="18" fill="#FFF" textAnchor="middle">RK</text>
        <text x="46" y="34" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="18" fill="#1A1A1A">RK</text>
        <text x="72" y="34" fontFamily="'Outfit', sans-serif" fontWeight="400" fontSize="18" fill="#666">INDUSTRIES</text>
      </svg>
    )
  },
  {
    id: "cives",
    name: "Cives Steel Company",
    location: "Roswell, GA",
    info: "Large multi-plant structural fabricator",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <path d="M24 12 L38 24 L24 38 L10 24 Z" fill="#B71C1C" />
        <text x="24" y="30" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="16" fill="#FFF" textAnchor="middle">C</text>
        <text x="46" y="35" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="19" fill="#1A1A1A" letterSpacing="0.5">CIVES</text>
      </svg>
    )
  },
  {
    id: "williams",
    name: "Williams Steel Erectors",
    location: "Portland, OR",
    info: "Steel erection & crane service",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <path d="M10 15 L18 38 L24 24 L30 38 L38 15" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="46" y="31" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="15" fill="#1A1A1A">WILLIAMS</text>
        <text x="46" y="43" fontFamily="'Outfit', sans-serif" fontWeight="500" fontSize="8" fill="#666" letterSpacing="1.5">STEEL ERECTORS</text>
      </svg>
    )
  },
  {
    id: "havens",
    name: "Havens Steel Company",
    location: "North Kansas City, MO",
    info: "Structural steel fabrication",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <path d="M12 15 V45 M32 15 V45 M12 30 H32" stroke="#1565C0" strokeWidth="4" strokeLinecap="round" />
        <text x="44" y="31" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="16" fill="#1A1A1A">HAVENS</text>
        <text x="44" y="44" fontFamily="'Outfit', sans-serif" fontWeight="500" fontSize="9" fill="#666" letterSpacing="1">STEEL COMPANY</text>
      </svg>
    )
  },
  {
    id: "highsteel",
    name: "High Steel Structures",
    location: "Lancaster, PA",
    info: "Bridge & structural steel fabricator",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <path d="M10 40 L24 15 L38 40 Z" fill="#C62828" />
        <path d="M24 15 V40" stroke="#FFF" strokeWidth="2.5" />
        <text x="46" y="31" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="15" fill="#1A1A1A">HIGH STEEL</text>
        <text x="46" y="43" fontFamily="'Outfit', sans-serif" fontWeight="500" fontSize="8" fill="#C62828" letterSpacing="1">STRUCTURES</text>
      </svg>
    )
  },
  {
    id: "thyssenkrupp",
    name: "ThyssenKrupp Steel",
    location: "Duisburg, Germany",
    info: "Premium-grade steel & compliance-certified materials",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <path d="M12 40 C12 25, 32 35, 32 20" stroke="#00A0E2" strokeWidth="5" strokeLinecap="round" fill="none" />
        <text x="45" y="32" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="15" fill="#1A1A1A" letterSpacing="-0.5">THYSSENKRUPP</text>
        <text x="45" y="44" fontFamily="'Outfit', sans-serif" fontWeight="600" fontSize="9" fill="#00A0E2" letterSpacing="1">STEEL EUROPE</text>
      </svg>
    )
  },
  {
    id: "wwafco",
    name: "W&W|AFCO Steel",
    location: "Oklahoma City, OK",
    info: "Structural steel fabrication & erection",
    logo: (
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
        <rect x="10" y="15" width="30" height="30" rx="3" fill="#1A1A1A" />
        <path d="M15 22 L20 38 L25 22" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M22 22 L27 38 L32 22" stroke="#FFD54F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="48" y="30" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="15" fill="#1A1A1A">W&W | AFCO</text>
        <text x="48" y="42" fontFamily="'Outfit', sans-serif" fontWeight="600" fontSize="10" fill="#E65100" letterSpacing="1.5">STEEL</text>
      </svg>
    )
  }
];
