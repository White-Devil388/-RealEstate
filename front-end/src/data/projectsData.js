const REAL_ESTATE_IMAGES = [
  {
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600566753086-35f13ff07742?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    heroImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1554433607-66b5efe9d304?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    heroImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    heroImage: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554433607-66b5efe9d304?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
    ]
  }
];

const getProjectMedia = (index) => REAL_ESTATE_IMAGES[index % REAL_ESTATE_IMAGES.length];

export const PROJECTS = [
 {
    "id": "proj-1",
    "name": "Skyline Heights 1",
    "slug": "skyline-heights-1",
    "location": "Vijay Nagar",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Premium Apartments",
    "status": "Ready to Move",
    "price": "\u20b930 Lakh - \u20b965 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(0).heroImage,
    "gallery": getProjectMedia(0).gallery,
    "shortDesc": "Premium Apartments in Vijay Nagar, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "4 Acres",
      "towers": "1",
      "totalUnits": "120",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b930 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b945 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "5 Min"
      },
      {
        "spot": "Airport",
        "distance": "10 Min"
      },
      {
        "spot": "Main Market",
        "distance": "3 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1000",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-2",
    "name": "Green Valley Homes 2",
    "slug": "green-valley-homes-2",
    "location": "MR-10",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Affordable Housing",
    "status": "Under Construction",
    "price": "\u20b932 Lakh - \u20b967 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": REAL_ESTATE_IMAGES[1].heroImage,
    "gallery": REAL_ESTATE_IMAGES[1].gallery,
    "shortDesc": "Affordable Housing in MR-10, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "5 Acres",
      "towers": "2",
      "totalUnits": "128",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b932 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b947 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "6 Min"
      },
      {
        "spot": "Airport",
        "distance": "11 Min"
      },
      {
        "spot": "Main Market",
        "distance": "4 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1001",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-3",
    "name": "Royal Courtyard 3",
    "slug": "royal-courtyard-3",
    "location": "Bengali Square",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Luxury Villas",
    "status": "Launching Soon",
    "price": "\u20b934 Lakh - \u20b969 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": REAL_ESTATE_IMAGES[2].heroImage,
    "gallery": REAL_ESTATE_IMAGES[2].gallery,
    "shortDesc": "Luxury Villas in Bengali Square, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "6 Acres",
      "towers": "3",
      "totalUnits": "136",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b934 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b949 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "7 Min"
      },
      {
        "spot": "Airport",
        "distance": "12 Min"
      },
      {
        "spot": "Main Market",
        "distance": "5 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1002",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-4",
    "name": "Narmada Residency 4",
    "slug": "narmada-residency-4",
    "location": "Super Corridor",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Premium Township",
    "status": "Ready to Move",
    "price": "\u20b936 Lakh - \u20b971 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": REAL_ESTATE_IMAGES[3].heroImage,
    "gallery": REAL_ESTATE_IMAGES[3].gallery,
    "shortDesc": "Premium Township in Super Corridor, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "7 Acres",
      "towers": "4",
      "totalUnits": "144",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b936 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b951 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "8 Min"
      },
      {
        "spot": "Airport",
        "distance": "13 Min"
      },
      {
        "spot": "Main Market",
        "distance": "6 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1003",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-5",
    "name": "River View Enclave 5",
    "slug": "river-view-enclave-5",
    "location": "AB Road",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Commercial Complex",
    "status": "Under Construction",
    "price": "\u20b938 Lakh - \u20b973 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": REAL_ESTATE_IMAGES[4].heroImage,
    "gallery": REAL_ESTATE_IMAGES[4].gallery,
    "shortDesc": "Commercial Complex in AB Road, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "8 Acres",
      "towers": "5",
      "totalUnits": "152",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b938 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b953 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "9 Min"
      },
      {
        "spot": "Airport",
        "distance": "14 Min"
      },
      {
        "spot": "Main Market",
        "distance": "7 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1004",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-6",
    "name": "Shiv Shakti Plaza 6",
    "slug": "shiv-shakti-plaza-6",
    "location": "Rau",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Residential Plots",
    "status": "Launching Soon",
    "price": "\u20b940 Lakh - \u20b975 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": REAL_ESTATE_IMAGES[5].heroImage,
    "gallery": REAL_ESTATE_IMAGES[5].gallery,
    "shortDesc": "Residential Plots in Rau, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "9 Acres",
      "towers": "6",
      "totalUnits": "160",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b940 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b955 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "10 Min"
      },
      {
        "spot": "Airport",
        "distance": "15 Min"
      },
      {
        "spot": "Main Market",
        "distance": "8 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1005",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-7",
    "name": "Emerald Residency 7",
    "slug": "emerald-residency-7",
    "location": "Palasia",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Mixed Use",
    "status": "Ready to Move",
    "price": "\u20b942 Lakh - \u20b977 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": REAL_ESTATE_IMAGES[6].heroImage,
    "gallery": REAL_ESTATE_IMAGES[6].gallery,
    "shortDesc": "Mixed Use in Palasia, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "10 Acres",
      "towers": "1",
      "totalUnits": "168",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b942 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b957 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "11 Min"
      },
      {
        "spot": "Airport",
        "distance": "16 Min"
      },
      {
        "spot": "Main Market",
        "distance": "9 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1006",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-8",
    "name": "Golden Nest 8",
    "slug": "golden-nest-8",
    "location": "Scheme 140",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Premium Apartments",
    "status": "Under Construction",
    "price": "\u20b944 Lakh - \u20b979 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(1).heroImage,
    "gallery": getProjectMedia(1).gallery,
    "shortDesc": "Premium Apartments in Scheme 140, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "11 Acres",
      "towers": "2",
      "totalUnits": "176",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b944 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b959 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "12 Min"
      },
      {
        "spot": "Airport",
        "distance": "17 Min"
      },
      {
        "spot": "Main Market",
        "distance": "10 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1007",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-9",
    "name": "Urban Oasis 9",
    "slug": "urban-oasis-9",
    "location": "Scheme 78",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Affordable Housing",
    "status": "Launching Soon",
    "price": "\u20b946 Lakh - \u20b981 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(2).heroImage,
    "gallery": getProjectMedia(2).gallery,
    "shortDesc": "Affordable Housing in Scheme 78, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "12 Acres",
      "towers": "3",
      "totalUnits": "184",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b946 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b961 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "13 Min"
      },
      {
        "spot": "Airport",
        "distance": "18 Min"
      },
      {
        "spot": "Main Market",
        "distance": "3 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1008",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-10",
    "name": "Crystal Heights 10",
    "slug": "crystal-heights-10",
    "location": "Bypass Road",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Luxury Villas",
    "status": "Ready to Move",
    "price": "\u20b948 Lakh - \u20b983 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(3).heroImage,
    "gallery": getProjectMedia(3).gallery,
    "shortDesc": "Luxury Villas in Bypass Road, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "13 Acres",
      "towers": "4",
      "totalUnits": "192",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b948 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b963 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "14 Min"
      },
      {
        "spot": "Airport",
        "distance": "19 Min"
      },
      {
        "spot": "Main Market",
        "distance": "4 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1009",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-11",
    "name": "Lake View Residency 11",
    "slug": "lake-view-residency-11",
    "location": "Nipania",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Premium Township",
    "status": "Under Construction",
    "price": "\u20b950 Lakh - \u20b985 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(4).heroImage,
    "gallery": getProjectMedia(4).gallery,
    "shortDesc": "Premium Township in Nipania, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "14 Acres",
      "towers": "5",
      "totalUnits": "200",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b950 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b965 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "5 Min"
      },
      {
        "spot": "Airport",
        "distance": "20 Min"
      },
      {
        "spot": "Main Market",
        "distance": "5 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1010",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-12",
    "name": "Silver Crown 12",
    "slug": "silver-crown-12",
    "location": "Kanadia",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Commercial Complex",
    "status": "Launching Soon",
    "price": "On Request",
    "pricingVisibility": "On Request",
    "heroImage": getProjectMedia(5).heroImage,
    "gallery": getProjectMedia(5).gallery,
    "shortDesc": "Commercial Complex in Kanadia, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "15 Acres",
      "towers": "6",
      "totalUnits": "208",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b952 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b967 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "6 Min"
      },
      {
        "spot": "Airport",
        "distance": "21 Min"
      },
      {
        "spot": "Main Market",
        "distance": "6 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1011",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-13",
    "name": "Palm Paradise 13",
    "slug": "palm-paradise-13",
    "location": "Khajrana",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Residential Plots",
    "status": "Ready to Move",
    "price": "\u20b954 Lakh - \u20b989 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(6).heroImage,
    "gallery": getProjectMedia(6).gallery,
    "shortDesc": "Residential Plots in Khajrana, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "4 Acres",
      "towers": "1",
      "totalUnits": "216",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b954 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b969 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "7 Min"
      },
      {
        "spot": "Airport",
        "distance": "22 Min"
      },
      {
        "spot": "Main Market",
        "distance": "7 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1012",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-14",
    "name": "Elite Avenue 14",
    "slug": "elite-avenue-14",
    "location": "Sudama Nagar",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Mixed Use",
    "status": "Under Construction",
    "price": "\u20b956 Lakh - \u20b991 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(7).heroImage,
    "gallery": getProjectMedia(7).gallery,
    "shortDesc": "Mixed Use in Sudama Nagar, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "5 Acres",
      "towers": "2",
      "totalUnits": "224",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b956 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b971 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "8 Min"
      },
      {
        "spot": "Airport",
        "distance": "23 Min"
      },
      {
        "spot": "Main Market",
        "distance": "8 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1013",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-15",
    "name": "Dream Enclave 15",
    "slug": "dream-enclave-15",
    "location": "Tilak Nagar",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Premium Apartments",
    "status": "Launching Soon",
    "price": "\u20b958 Lakh - \u20b993 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(8).heroImage,
    "gallery": getProjectMedia(8).gallery,
    "shortDesc": "Premium Apartments in Tilak Nagar, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "6 Acres",
      "towers": "3",
      "totalUnits": "232",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b958 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b973 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "9 Min"
      },
      {
        "spot": "Airport",
        "distance": "24 Min"
      },
      {
        "spot": "Main Market",
        "distance": "9 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1014",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-16",
    "name": "Harmony Homes 16",
    "slug": "harmony-homes-16",
    "location": "LIG Colony",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Affordable Housing",
    "status": "Ready to Move",
    "price": "\u20b960 Lakh - \u20b995 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(9).heroImage,
    "gallery": getProjectMedia(9).gallery,
    "shortDesc": "Affordable Housing in LIG Colony, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "7 Acres",
      "towers": "4",
      "totalUnits": "240",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b960 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b975 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "10 Min"
      },
      {
        "spot": "Airport",
        "distance": "10 Min"
      },
      {
        "spot": "Main Market",
        "distance": "10 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1015",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-17",
    "name": "Sunrise Residency 17",
    "slug": "sunrise-residency-17",
    "location": "Ring Road",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Luxury Villas",
    "status": "Under Construction",
    "price": "\u20b962 Lakh - \u20b997 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(10).heroImage,
    "gallery": getProjectMedia(10).gallery,
    "shortDesc": "Luxury Villas in Ring Road, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "8 Acres",
      "towers": "5",
      "totalUnits": "248",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b962 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b977 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "11 Min"
      },
      {
        "spot": "Airport",
        "distance": "11 Min"
      },
      {
        "spot": "Main Market",
        "distance": "3 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1016",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-18",
    "name": "Westend Greens 18",
    "slug": "westend-greens-18",
    "location": "Mahalaxmi Nagar",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Premium Township",
    "status": "Launching Soon",
    "price": "\u20b964 Lakh - \u20b999 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(11).heroImage,
    "gallery": getProjectMedia(11).gallery,
    "shortDesc": "Premium Township in Mahalaxmi Nagar, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "9 Acres",
      "towers": "6",
      "totalUnits": "256",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b964 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b979 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "12 Min"
      },
      {
        "spot": "Airport",
        "distance": "12 Min"
      },
      {
        "spot": "Main Market",
        "distance": "4 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1017",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-19",
    "name": "Royal Horizon 19",
    "slug": "royal-horizon-19",
    "location": "Pipliyahana",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Commercial Complex",
    "status": "Ready to Move",
    "price": "\u20b966 Lakh - \u20b9101 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(12).heroImage,
    "gallery": getProjectMedia(12).gallery,
    "shortDesc": "Commercial Complex in Pipliyahana, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "10 Acres",
      "towers": "1",
      "totalUnits": "264",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b966 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b981 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "13 Min"
      },
      {
        "spot": "Airport",
        "distance": "13 Min"
      },
      {
        "spot": "Main Market",
        "distance": "5 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1018",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-20",
    "name": "Blue Orchid 20",
    "slug": "blue-orchid-20",
    "location": "Dewas Naka",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Residential Plots",
    "status": "Under Construction",
    "price": "\u20b968 Lakh - \u20b9103 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(13).heroImage,
    "gallery": getProjectMedia(13).gallery,
    "shortDesc": "Residential Plots in Dewas Naka, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "11 Acres",
      "towers": "2",
      "totalUnits": "272",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b968 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b983 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "14 Min"
      },
      {
        "spot": "Airport",
        "distance": "14 Min"
      },
      {
        "spot": "Main Market",
        "distance": "6 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1019",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-21",
    "name": "Skyline Heights 21",
    "slug": "skyline-heights-21",
    "location": "Lasudia",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Mixed Use",
    "status": "Launching Soon",
    "price": "\u20b970 Lakh - \u20b9105 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(14).heroImage,
    "gallery": getProjectMedia(14).gallery,
    "shortDesc": "Mixed Use in Lasudia, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "12 Acres",
      "towers": "3",
      "totalUnits": "280",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b970 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b985 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "5 Min"
      },
      {
        "spot": "Airport",
        "distance": "15 Min"
      },
      {
        "spot": "Main Market",
        "distance": "7 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1020",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-22",
    "name": "Green Valley Homes 22",
    "slug": "green-valley-homes-22",
    "location": "Bhawarkuan",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Premium Apartments",
    "status": "Ready to Move",
    "price": "\u20b972 Lakh - \u20b9107 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(15).heroImage,
    "gallery": getProjectMedia(15).gallery,
    "shortDesc": "Premium Apartments in Bhawarkuan, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "13 Acres",
      "towers": "4",
      "totalUnits": "288",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b972 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b987 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "6 Min"
      },
      {
        "spot": "Airport",
        "distance": "16 Min"
      },
      {
        "spot": "Main Market",
        "distance": "8 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1021",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-23",
    "name": "Royal Courtyard 23",
    "slug": "royal-courtyard-23",
    "location": "Rajendra Nagar",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Affordable Housing",
    "status": "Under Construction",
    "price": "\u20b974 Lakh - \u20b9109 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(16).heroImage,
    "gallery": getProjectMedia(16).gallery,
    "shortDesc": "Affordable Housing in Rajendra Nagar, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "14 Acres",
      "towers": "5",
      "totalUnits": "296",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b974 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b989 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "7 Min"
      },
      {
        "spot": "Airport",
        "distance": "17 Min"
      },
      {
        "spot": "Main Market",
        "distance": "9 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1022",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-24",
    "name": "Narmada Residency 24",
    "slug": "narmada-residency-24",
    "location": "Airport Road",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Luxury Villas",
    "status": "Launching Soon",
    "price": "\u20b976 Lakh - \u20b9111 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(17).heroImage,
    "gallery": getProjectMedia(17).gallery,
    "shortDesc": "Luxury Villas in Airport Road, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "15 Acres",
      "towers": "6",
      "totalUnits": "304",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b976 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b991 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "8 Min"
      },
      {
        "spot": "Airport",
        "distance": "18 Min"
      },
      {
        "spot": "Main Market",
        "distance": "10 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1023",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-25",
    "name": "River View Enclave 25",
    "slug": "river-view-enclave-25",
    "location": "Silicon City",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "category": "Premium Township",
    "status": "Ready to Move",
    "price": "\u20b978 Lakh - \u20b9113 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(18).heroImage,
    "gallery": getProjectMedia(18).gallery,
    "shortDesc": "Premium Township in Silicon City, Indore.",
    "longDesc": "Dummy real-estate project for frontend practice in Indore.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "4 Acres",
      "towers": "1",
      "totalUnits": "312",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b978 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b993 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "9 Min"
      },
      {
        "spot": "Airport",
        "distance": "19 Min"
      },
      {
        "spot": "Main Market",
        "distance": "3 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-IND-1024",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-26",
    "name": "Shiv Shakti Plaza 26",
    "slug": "shiv-shakti-plaza-26",
    "location": "Civil Lines",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Commercial Complex",
    "status": "Under Construction",
    "price": "\u20b980 Lakh - \u20b9115 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(19).heroImage,
    "gallery": getProjectMedia(19).gallery,
    "shortDesc": "Commercial Complex in Civil Lines, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "5 Acres",
      "towers": "2",
      "totalUnits": "320",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b980 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b995 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "10 Min"
      },
      {
        "spot": "Airport",
        "distance": "20 Min"
      },
      {
        "spot": "Main Market",
        "distance": "4 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1025",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-27",
    "name": "Emerald Residency 27",
    "slug": "emerald-residency-27",
    "location": "Anand Nagar",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Residential Plots",
    "status": "Launching Soon",
    "price": "\u20b982 Lakh - \u20b9117 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(20).heroImage,
    "gallery": getProjectMedia(20).gallery,
    "shortDesc": "Residential Plots in Anand Nagar, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "6 Acres",
      "towers": "3",
      "totalUnits": "328",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b982 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b997 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "11 Min"
      },
      {
        "spot": "Airport",
        "distance": "21 Min"
      },
      {
        "spot": "Main Market",
        "distance": "5 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1026",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-28",
    "name": "Golden Nest 28",
    "slug": "golden-nest-28",
    "location": "Bombay Bazaar",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Mixed Use",
    "status": "Ready to Move",
    "price": "\u20b984 Lakh - \u20b9119 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(21).heroImage,
    "gallery": getProjectMedia(21).gallery,
    "shortDesc": "Mixed Use in Bombay Bazaar, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "7 Acres",
      "towers": "4",
      "totalUnits": "336",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b984 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b999 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "12 Min"
      },
      {
        "spot": "Airport",
        "distance": "22 Min"
      },
      {
        "spot": "Main Market",
        "distance": "6 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1027",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-29",
    "name": "Urban Oasis 29",
    "slug": "urban-oasis-29",
    "location": "Padawa",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Premium Apartments",
    "status": "Under Construction",
    "price": "\u20b986 Lakh - \u20b9121 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(22).heroImage,
    "gallery": getProjectMedia(22).gallery,
    "shortDesc": "Premium Apartments in Padawa, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "8 Acres",
      "towers": "5",
      "totalUnits": "344",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b986 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9101 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "13 Min"
      },
      {
        "spot": "Airport",
        "distance": "23 Min"
      },
      {
        "spot": "Main Market",
        "distance": "7 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1028",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-30",
    "name": "Crystal Heights 30",
    "slug": "crystal-heights-30",
    "location": "Mundi Road",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Affordable Housing",
    "status": "Launching Soon",
    "price": "\u20b988 Lakh - \u20b9123 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(23).heroImage,
    "gallery": getProjectMedia(23).gallery,
    "shortDesc": "Affordable Housing in Mundi Road, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "9 Acres",
      "towers": "6",
      "totalUnits": "352",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b988 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9103 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "14 Min"
      },
      {
        "spot": "Airport",
        "distance": "24 Min"
      },
      {
        "spot": "Main Market",
        "distance": "8 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1029",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-31",
    "name": "Lake View Residency 31",
    "slug": "lake-view-residency-31",
    "location": "Rameshwar Nagar",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Luxury Villas",
    "status": "Ready to Move",
    "price": "\u20b990 Lakh - \u20b9125 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(24).heroImage,
    "gallery": getProjectMedia(24).gallery,
    "shortDesc": "Luxury Villas in Rameshwar Nagar, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "10 Acres",
      "towers": "1",
      "totalUnits": "360",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b990 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9105 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "5 Min"
      },
      {
        "spot": "Airport",
        "distance": "10 Min"
      },
      {
        "spot": "Main Market",
        "distance": "9 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1030",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-32",
    "name": "Silver Crown 32",
    "slug": "silver-crown-32",
    "location": "Khalwa Road",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Premium Township",
    "status": "Under Construction",
    "price": "\u20b992 Lakh - \u20b9127 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(25).heroImage,
    "gallery": getProjectMedia(25).gallery,
    "shortDesc": "Premium Township in Khalwa Road, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "11 Acres",
      "towers": "2",
      "totalUnits": "368",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b992 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9107 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "6 Min"
      },
      {
        "spot": "Airport",
        "distance": "11 Min"
      },
      {
        "spot": "Main Market",
        "distance": "10 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1031",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-33",
    "name": "Palm Paradise 33",
    "slug": "palm-paradise-33",
    "location": "Station Road",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Commercial Complex",
    "status": "Launching Soon",
    "price": "On Request",
    "pricingVisibility": "On Request",
    "heroImage": getProjectMedia(26).heroImage,
    "gallery": getProjectMedia(26).gallery,
    "shortDesc": "Commercial Complex in Station Road, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "12 Acres",
      "towers": "3",
      "totalUnits": "376",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b994 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9109 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "7 Min"
      },
      {
        "spot": "Airport",
        "distance": "12 Min"
      },
      {
        "spot": "Main Market",
        "distance": "3 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1032",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-34",
    "name": "Elite Avenue 34",
    "slug": "elite-avenue-34",
    "location": "Jawahar Ganj",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Residential Plots",
    "status": "Ready to Move",
    "price": "\u20b996 Lakh - \u20b9131 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(27).heroImage,
    "gallery": getProjectMedia(27).gallery,
    "shortDesc": "Residential Plots in Jawahar Ganj, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "13 Acres",
      "towers": "4",
      "totalUnits": "384",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b996 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9111 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "8 Min"
      },
      {
        "spot": "Airport",
        "distance": "13 Min"
      },
      {
        "spot": "Main Market",
        "distance": "4 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1033",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-35",
    "name": "Dream Enclave 35",
    "slug": "dream-enclave-35",
    "location": "Shivaji Chowk",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Mixed Use",
    "status": "Under Construction",
    "price": "\u20b998 Lakh - \u20b9133 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(28).heroImage,
    "gallery": getProjectMedia(28).gallery,
    "shortDesc": "Mixed Use in Shivaji Chowk, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "14 Acres",
      "towers": "5",
      "totalUnits": "392",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b998 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9113 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "9 Min"
      },
      {
        "spot": "Airport",
        "distance": "14 Min"
      },
      {
        "spot": "Main Market",
        "distance": "5 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1034",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-36",
    "name": "Harmony Homes 36",
    "slug": "harmony-homes-36",
    "location": "Teen Pulia",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Premium Apartments",
    "status": "Launching Soon",
    "price": "\u20b9100 Lakh - \u20b9135 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(29).heroImage,
    "gallery": getProjectMedia(29).gallery,
    "shortDesc": "Premium Apartments in Teen Pulia, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "15 Acres",
      "towers": "6",
      "totalUnits": "400",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9100 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9115 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "10 Min"
      },
      {
        "spot": "Airport",
        "distance": "15 Min"
      },
      {
        "spot": "Main Market",
        "distance": "6 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1035",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-37",
    "name": "Sunrise Residency 37",
    "slug": "sunrise-residency-37",
    "location": "Ganesh Talai",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Affordable Housing",
    "status": "Ready to Move",
    "price": "\u20b9102 Lakh - \u20b9137 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(30).heroImage,
    "gallery": getProjectMedia(30).gallery,
    "shortDesc": "Affordable Housing in Ganesh Talai, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "4 Acres",
      "towers": "1",
      "totalUnits": "408",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9102 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9117 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "11 Min"
      },
      {
        "spot": "Airport",
        "distance": "16 Min"
      },
      {
        "spot": "Main Market",
        "distance": "7 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1036",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-38",
    "name": "Westend Greens 38",
    "slug": "westend-greens-38",
    "location": "Moghat Road",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Luxury Villas",
    "status": "Under Construction",
    "price": "\u20b9104 Lakh - \u20b9139 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(31).heroImage,
    "gallery": getProjectMedia(31).gallery,
    "shortDesc": "Luxury Villas in Moghat Road, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "5 Acres",
      "towers": "2",
      "totalUnits": "416",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9104 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9119 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "12 Min"
      },
      {
        "spot": "Airport",
        "distance": "17 Min"
      },
      {
        "spot": "Main Market",
        "distance": "8 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1037",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-39",
    "name": "Royal Horizon 39",
    "slug": "royal-horizon-39",
    "location": "Borgaon",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Premium Township",
    "status": "Launching Soon",
    "price": "\u20b9106 Lakh - \u20b9141 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(32).heroImage,
    "gallery": getProjectMedia(32).gallery,
    "shortDesc": "Premium Township in Borgaon, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "6 Acres",
      "towers": "3",
      "totalUnits": "424",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9106 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9121 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "13 Min"
      },
      {
        "spot": "Airport",
        "distance": "18 Min"
      },
      {
        "spot": "Main Market",
        "distance": "9 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1038",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-40",
    "name": "Blue Orchid 40",
    "slug": "blue-orchid-40",
    "location": "Indira Chowk",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Commercial Complex",
    "status": "Ready to Move",
    "price": "\u20b9108 Lakh - \u20b9143 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(33).heroImage,
    "gallery": getProjectMedia(33).gallery,
    "shortDesc": "Commercial Complex in Indira Chowk, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "7 Acres",
      "towers": "4",
      "totalUnits": "432",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9108 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9123 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "14 Min"
      },
      {
        "spot": "Airport",
        "distance": "19 Min"
      },
      {
        "spot": "Main Market",
        "distance": "10 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1039",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-41",
    "name": "Skyline Heights 41",
    "slug": "skyline-heights-41",
    "location": "Kaveri Nagar",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Residential Plots",
    "status": "Under Construction",
    "price": "\u20b9110 Lakh - \u20b9145 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(34).heroImage,
    "gallery": getProjectMedia(34).gallery,
    "shortDesc": "Residential Plots in Kaveri Nagar, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "8 Acres",
      "towers": "5",
      "totalUnits": "440",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9110 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9125 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "5 Min"
      },
      {
        "spot": "Airport",
        "distance": "20 Min"
      },
      {
        "spot": "Main Market",
        "distance": "3 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1040",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-42",
    "name": "Green Valley Homes 42",
    "slug": "green-valley-homes-42",
    "location": "Collectorate Road",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Mixed Use",
    "status": "Launching Soon",
    "price": "\u20b9112 Lakh - \u20b9147 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(35).heroImage,
    "gallery": getProjectMedia(35).gallery,
    "shortDesc": "Mixed Use in Collectorate Road, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "9 Acres",
      "towers": "6",
      "totalUnits": "448",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9112 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9127 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "6 Min"
      },
      {
        "spot": "Airport",
        "distance": "21 Min"
      },
      {
        "spot": "Main Market",
        "distance": "4 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1041",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-43",
    "name": "Royal Courtyard 43",
    "slug": "royal-courtyard-43",
    "location": "Narmada Nagar",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Premium Apartments",
    "status": "Ready to Move",
    "price": "\u20b9114 Lakh - \u20b9149 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(36).heroImage,
    "gallery": getProjectMedia(36).gallery,
    "shortDesc": "Premium Apartments in Narmada Nagar, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "10 Acres",
      "towers": "1",
      "totalUnits": "456",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9114 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9129 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "7 Min"
      },
      {
        "spot": "Airport",
        "distance": "22 Min"
      },
      {
        "spot": "Main Market",
        "distance": "5 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1042",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-44",
    "name": "Narmada Residency 44",
    "slug": "narmada-residency-44",
    "location": "Bus Stand Area",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Affordable Housing",
    "status": "Under Construction",
    "price": "\u20b9116 Lakh - \u20b9151 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(37).heroImage,
    "gallery": getProjectMedia(37).gallery,
    "shortDesc": "Affordable Housing in Bus Stand Area, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "11 Acres",
      "towers": "2",
      "totalUnits": "464",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9116 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9131 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "8 Min"
      },
      {
        "spot": "Airport",
        "distance": "23 Min"
      },
      {
        "spot": "Main Market",
        "distance": "6 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1043",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-45",
    "name": "River View Enclave 45",
    "slug": "river-view-enclave-45",
    "location": "Mahalaxmi Nagar",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Luxury Villas",
    "status": "Launching Soon",
    "price": "\u20b9118 Lakh - \u20b9153 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(38).heroImage,
    "gallery": getProjectMedia(38).gallery,
    "shortDesc": "Luxury Villas in Mahalaxmi Nagar, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "12 Acres",
      "towers": "3",
      "totalUnits": "472",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9118 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9133 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "9 Min"
      },
      {
        "spot": "Airport",
        "distance": "24 Min"
      },
      {
        "spot": "Main Market",
        "distance": "7 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1044",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-46",
    "name": "Shiv Shakti Plaza 46",
    "slug": "shiv-shakti-plaza-46",
    "location": "Gurudwara Road",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Premium Township",
    "status": "Ready to Move",
    "price": "\u20b9120 Lakh - \u20b9155 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(39).heroImage,
    "gallery": getProjectMedia(39).gallery,
    "shortDesc": "Premium Township in Gurudwara Road, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "13 Acres",
      "towers": "4",
      "totalUnits": "480",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9120 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9135 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "10 Min"
      },
      {
        "spot": "Airport",
        "distance": "10 Min"
      },
      {
        "spot": "Main Market",
        "distance": "8 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1045",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-47",
    "name": "Emerald Residency 47",
    "slug": "emerald-residency-47",
    "location": "New Khandwa",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Commercial Complex",
    "status": "Under Construction",
    "price": "\u20b9122 Lakh - \u20b9157 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(40).heroImage,
    "gallery": getProjectMedia(40).gallery,
    "shortDesc": "Commercial Complex in New Khandwa, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "14 Acres",
      "towers": "5",
      "totalUnits": "488",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9122 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9137 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "11 Min"
      },
      {
        "spot": "Airport",
        "distance": "11 Min"
      },
      {
        "spot": "Main Market",
        "distance": "9 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1046",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-48",
    "name": "Golden Nest 48",
    "slug": "golden-nest-48",
    "location": "Old City",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Residential Plots",
    "status": "Launching Soon",
    "price": "\u20b9124 Lakh - \u20b9159 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(39).heroImage,
    "gallery": getProjectMedia(39).gallery,
    "shortDesc": "Residential Plots in Old City, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "15 Acres",
      "towers": "6",
      "totalUnits": "496",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9124 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9139 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "12 Min"
      },
      {
        "spot": "Airport",
        "distance": "12 Min"
      },
      {
        "spot": "Main Market",
        "distance": "10 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1047",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-49",
    "name": "Urban Oasis 49",
    "slug": "urban-oasis-49",
    "location": "Ghaspura",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Mixed Use",
    "status": "Ready to Move",
    "price": "\u20b9126 Lakh - \u20b9161 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(42).heroImage,
    "gallery": getProjectMedia(42).gallery,
    "shortDesc": "Mixed Use in Ghaspura, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "4 Acres",
      "towers": "1",
      "totalUnits": "504",
      "configurations": "2 & 3 BHK",
      "possession": "Ready"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9126 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9141 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "13 Min"
      },
      {
        "spot": "Airport",
        "distance": "13 Min"
      },
      {
        "spot": "Main Market",
        "distance": "3 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1048",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": true,
    "hasVideo": true,
    "brochureUrl": "#download-brochure"
  },
  {
    "id": "proj-50",
    "name": "Crystal Heights 50",
    "slug": "crystal-heights-50",
    "location": "Hanuman Talai",
    "city": "Khandwa",
    "state": "Madhya Pradesh",
    "category": "Premium Apartments",
    "status": "Under Construction",
    "price": "\u20b9128 Lakh - \u20b9163 Lakh",
    "pricingVisibility": "Visible",
    "heroImage": getProjectMedia(43).heroImage,
    "gallery": getProjectMedia(43).gallery,
    "shortDesc": "Premium Apartments in Hanuman Talai, Khandwa.",
    "longDesc": "Dummy real-estate project for frontend practice in Khandwa.",
    "highlights": [
      "Clubhouse",
      "24x7 Security",
      "Garden",
      "Parking"
    ],
    "specifications": {
      "projectArea": "5 Acres",
      "towers": "2",
      "totalUnits": "512",
      "configurations": "2 & 3 BHK",
      "possession": "2027"
    },
    "amenities": [
      {
        "name": "Gym",
        "icon": "Dumbbell",
        "category": "Fitness"
      },
      {
        "name": "Swimming Pool",
        "icon": "Waves",
        "category": "Leisure"
      },
      {
        "name": "Garden",
        "icon": "Tree",
        "category": "Eco"
      }
    ],
    "floorPlans": [
      {
        "type": "2 BHK",
        "area": "1050 Sq Ft",
        "price": "\u20b9128 Lakh"
      },
      {
        "type": "3 BHK",
        "area": "1450 Sq Ft",
        "price": "\u20b9143 Lakh"
      }
    ],
    "connectivity": [
      {
        "spot": "Railway Station",
        "distance": "14 Min"
      },
      {
        "spot": "Airport",
        "distance": "14 Min"
      },
      {
        "spot": "Main Market",
        "distance": "4 Min"
      }
    ],
    "reraNumber": "DUMMY-RERA-KHA-1049",
    "legalDisclosure": "Dummy data for practice only.",
    "hasVirtualTour": false,
    "hasVideo": false,
    "brochureUrl": "#download-brochure"
  }
];
