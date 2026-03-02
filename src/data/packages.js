// Pricing calculation functions
export const calculateFamilyPrice = (members) => {
  if (members >= 5) return 7999;
  if (members === 4) return 8499;
  if (members === 3) return 8999;
  if (members === 2) return 9499;
  return 9999;
};

export const calculateHoneymoonPrice = (type) => {
  if (type === "couple") return 25999;
  return 12999;
};

export const calculateTemplePrice = (members) => {
  if (members >= 4) return 17999;
  return 21999;
};

export const packages = [
  // GROUP PACKAGES
  {
    id: 1,
    name: "Kerala Group Package - 3 Days",
    category: "group",
    price: 3999,
    duration: "3 Days / 2 Nights",
    badge: "Popular",
    shortDescription: "Perfect group getaway covering Kerala's best highlights - waterfalls, hill stations, and backwaters.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
    includes: ["AC Travel", "Hotel Stay", "Breakfast & Dinner", "Sightseeing", "Local Guide"],
    locations: ["Kochi", "Athirappilly", "Munnar", "Alappuzha"],
    fullDescription: "Experience Kerala's essence in 3 days with our group package. Perfect for friends and colleagues looking for an affordable Kerala adventure.",
    isKerala: true,
    packageType: "group"
  },
  {
    id: 2,
    name: "Kerala Group Package - 4 Days",
    category: "group",
    price: 4999,
    duration: "4 Days / 3 Nights",
    badge: "Best Value",
    shortDescription: "Extended Kerala exploration with more destinations and experiences for your group.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    includes: ["AC Travel", "Hotel Stay", "All Meals", "Sightseeing", "Local Guide"],
    locations: ["Kochi", "Athirappilly", "Munnar", "Thekkady", "Alappuzha"],
    fullDescription: "4 days of Kerala magic covering waterfalls, tea gardens, wildlife, and backwaters.",
    isKerala: true,
    packageType: "group"
  },
  {
    id: 3,
    name: "Kerala Group Package - 5 Days",
    category: "group",
    price: 6999,
    duration: "5 Days / 4 Nights",
    badge: "Recommended",
    shortDescription: "Comprehensive Kerala tour with all major attractions and hidden gems.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    includes: ["AC Travel", "Premium Stay", "All Meals", "Sightseeing", "Local Guide", "Houseboat"],
    locations: ["Kochi", "Athirappilly", "Munnar", "Thekkady", "Alappuzha", "Varkala"],
    fullDescription: "The complete Kerala experience with 5 days covering mountains, forests, backwaters, and beaches.",
    isKerala: true,
    packageType: "group"
  },
  {
    id: 4,
    name: "Kerala Group Package - 6 Days",
    category: "group",
    price: 8999,
    duration: "6 Days / 5 Nights",
    badge: "Premium",
    shortDescription: "Ultimate Kerala journey with extended stays and premium experiences.",
    image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80",
    includes: ["AC Travel", "Premium Stay", "All Meals", "Sightseeing", "Local Guide", "Houseboat", "Special Activities"],
    locations: ["Kochi", "Athirappilly", "Munnar", "Thekkady", "Alappuzha", "Varkala", "Kovalam", "Trivandrum"],
    fullDescription: "6 days of luxury Kerala exploration with premium accommodations and exclusive experiences.",
    isKerala: true,
    packageType: "group"
  },
  {
    id: 5,
    name: "Kerala Group Package - 7 Days",
    category: "group",
    price: null,
    duration: "Coming Soon",
    badge: "Coming Soon",
    shortDescription: "Extended Kerala adventure - launching soon with exclusive itineraries.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    includes: [],
    locations: ["Full Kerala Circuit"],
    fullDescription: "Coming Soon",
    isKerala: true,
    packageType: "group",
    comingSoon: true
  },

  // HONEYMOON PACKAGES
  {
    id: 6,
    name: "Kerala Honeymoon Package 1",
    category: "honeymoon",
    price: 12999,
    couplePrice: 25999,
    duration: "Flexible Duration",
    badge: "Romantic",
    shortDescription: "Perfect romantic hill + backwater experience. Kochi → Munnar → Alappuzha → Kochi 🌄🛶",
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80",
    includes: ["Luxury Stay", "Candlelight Dinner", "Houseboat", "All Meals", "Romantic Decor", "Private Transfers"],
    locations: ["Kochi", "Munnar", "Alappuzha"],
    fullDescription: "Create unforgettable memories with your loved one. This romantic journey combines misty mountains and serene backwaters.",
    isKerala: true,
    packageType: "honeymoon",
    route: "Kochi → Munnar → Alappuzha → Kochi"
  },
  {
    id: 7,
    name: "Kerala Honeymoon Package 2",
    category: "honeymoon",
    price: 12999,
    couplePrice: 25999,
    duration: "Flexible Duration",
    badge: "Romantic",
    shortDescription: "Beach + Backwaters combo. Kochi → Alappuzha → Varkala → Trivandrum 🌊",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&q=80",
    includes: ["Beach Resort", "Candlelight Dinner", "Houseboat", "All Meals", "Romantic Decor", "Private Transfers"],
    locations: ["Kochi", "Alappuzha", "Varkala", "Trivandrum"],
    fullDescription: "Perfect blend of backwaters and beaches for couples seeking romance and relaxation.",
    isKerala: true,
    packageType: "honeymoon",
    route: "Kochi → Alappuzha → Varkala → Trivandrum"
  },
  {
    id: 8,
    name: "Kerala Honeymoon Package 3",
    category: "honeymoon",
    price: 12999,
    couplePrice: 25999,
    duration: "Flexible Duration",
    badge: "Romantic",
    shortDescription: "Sunset + Spiritual + Beach. Kochi → Varkala → Trivandrum → Kanyakumari 🌅",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    includes: ["Premium Stay", "Candlelight Dinner", "All Meals", "Romantic Decor", "Private Transfers", "Sunset Cruise"],
    locations: ["Kochi", "Varkala", "Trivandrum", "Kanyakumari"],
    fullDescription: "Spiritual and scenic journey to India's southern tip with breathtaking sunsets.",
    isKerala: true,
    packageType: "honeymoon",
    route: "Kochi → Varkala → Trivandrum → Kanyakumari"
  },

  // FAMILY PACKAGES
  {
    id: 9,
    name: "Kerala Family Package 1 (4-5 Days)",
    category: "family",
    basePrice: 9999,
    duration: "4-5 Days",
    badge: "Family Special",
    shortDescription: "Nature + Wildlife + Backwaters. Perfect family adventure covering Kerala's best. 🏡",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    includes: ["Family Rooms", "All Meals", "Kid-Friendly Activities", "Wildlife Safari", "Houseboat", "Local Guide"],
    locations: ["Kochi", "Athirappilly", "Munnar", "Thekkady", "Alappuzha"],
    fullDescription: "Complete family package with nature, wildlife, and backwater experiences. Price reduces with more members!",
    isKerala: true,
    packageType: "family",
    route: "Kochi → Athirappilly → Munnar → Thekkady → Alappuzha → Kochi",
    pricingNote: "Starts from ₹9,999 per person. Reduces to ₹7,999 for 5+ members"
  },
  {
    id: 10,
    name: "Kerala Family Package 2 (4-5 Days)",
    category: "family",
    basePrice: 9999,
    duration: "4-5 Days",
    badge: "Family Special",
    shortDescription: "Beach + Relaxation Package. Perfect for families seeking coastal Kerala. 🏖",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    includes: ["Family Rooms", "All Meals", "Beach Activities", "Backwater Cruise", "Local Guide"],
    locations: ["Kochi", "Alappuzha", "Varkala", "Kollam", "Trivandrum"],
    fullDescription: "Beach and backwater focused family package. Ideal for relaxation and fun!",
    isKerala: true,
    packageType: "family",
    route: "Kochi → Alappuzha → Varkala → Kollam → Trivandrum",
    pricingNote: "Starts from ₹9,999 per person. Reduces to ₹7,999 for 5+ members"
  },

  // TEMPLE PACKAGES
  {
    id: 11,
    name: "Kerala Temple Package 1",
    category: "temple",
    price: 21999,
    groupPrice: 17999,
    duration: "Spiritual Circuit",
    badge: "Spiritual",
    shortDescription: "Kerala Spiritual Tour. Kochi → Alappuzha → Kollam → Varkala → Trivandrum 🛕",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    includes: ["AC Travel", "Temple Visits", "All Meals", "Spiritual Guide", "Accommodation"],
    locations: ["Kochi", "Alappuzha", "Kollam", "Varkala", "Trivandrum"],
    fullDescription: "Spiritual journey through Kerala's sacred temples and holy sites.",
    isKerala: true,
    packageType: "temple",
    pricingNote: "₹21,999 per head. ₹17,999 for 4+ members"
  },
  {
    id: 12,
    name: "Kerala Temple Package 2",
    category: "temple",
    price: 21999,
    groupPrice: 17999,
    duration: "Spiritual Circuit",
    badge: "Spiritual",
    shortDescription: "Extended spiritual tour. Guruvayur → Thrissur → Kochi → Kollam → Varkala → Trivandrum 🛕",
    image: "/lordshiva.jpg",
    includes: ["AC Travel", "Temple Visits", "All Meals", "Spiritual Guide", "Accommodation"],
    locations: ["Guruvayur", "Thrissur", "Kochi", "Kollam", "Varkala", "Trivandrum"],
    fullDescription: "Comprehensive spiritual circuit including the famous Guruvayur temple.",
    isKerala: true,
    packageType: "temple",
    pricingNote: "₹21,999 per head. ₹17,999 for 4+ members"
  },
  {
    id: 13,
    name: "Kerala Temple Package 3 - Premium",
    category: "temple",
    price: 21999,
    groupPrice: 17999,
    duration: "Premium Spiritual Circuit",
    badge: "Premium Spiritual",
    shortDescription: "Complete Kerala spiritual circuit. Kasaragod to Trivandrum covering all major temples 🛕",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    includes: ["AC Travel", "All Temple Visits", "All Meals", "Expert Spiritual Guide", "Premium Stay"],
    locations: ["Kasaragod", "Kannur", "Guruvayur", "Thrissur", "Kochi", "Alappuzha", "Kollam", "Varkala", "Trivandrum"],
    fullDescription: "The ultimate spiritual journey covering Kerala from north to south.",
    isKerala: true,
    packageType: "temple",
    pricingNote: "₹21,999 per head. ₹17,999 for 4+ members"
  },

  // GOA PACKAGES
  {
    id: 14,
    name: "Goa Friends Special - 3 Days",
    category: "goa",
    price: 7999,
    duration: "3 Days / 2 Nights",
    badge: "Friends Special",
    shortDescription: "Complete Goa experience - North & South Goa beaches, forts, and nightlife 🎉",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    includes: ["Travel Van", "Basic Stay", "Sightseeing", "Beach Activities"],
    locations: ["Baga Beach", "Calangute", "Anjuna", "Fort Aguada", "Colva", "Benaulim", "Dona Paula", "Basilica of Bom Jesus"],
    fullDescription: "Perfect friends package covering all Goa highlights - beaches, forts, and churches.",
    packageType: "goa"
  },
  {
    id: 15,
    name: "Goa Friends Special - 4 Days",
    category: "goa",
    price: 9999,
    duration: "4 Days / 3 Nights",
    badge: "Friends Special",
    shortDescription: "Extended Goa adventure with more time to explore and party 🎉",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    includes: ["Travel Van", "Stay", "Sightseeing", "Beach Activities", "Water Sports"],
    locations: ["North Goa", "South Goa", "Dudhsagar Falls", "Spice Plantation"],
    fullDescription: "4 days of Goa fun with beaches, waterfalls, and adventure activities.",
    packageType: "goa"
  },
  {
    id: 16,
    name: "Goa Friends Special - 5 Days",
    category: "goa",
    price: 12999,
    duration: "5 Days / 4 Nights",
    badge: "Friends Special",
    shortDescription: "Ultimate Goa experience with premium stays and exclusive activities 🎉",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80",
    includes: ["Travel Van", "Premium Stay", "All Sightseeing", "Water Sports", "Beach Parties"],
    locations: ["All Goa Beaches", "Dudhsagar Falls", "Spice Plantation", "Old Goa", "Palolem"],
    fullDescription: "5 days of ultimate Goa experience with everything included.",
    packageType: "goa"
  },

  // COMING SOON DESTINATIONS
  {
    id: 17,
    name: "Darjeeling Package",
    category: "darjeeling",
    price: null,
    duration: "Coming Soon",
    badge: "Coming Soon",
    shortDescription: "Queen of Hills - Tea Gardens, Toy Train & Himalayan Views 🏔️",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    includes: [],
    locations: ["Darjeeling", "Tiger Hill", "Batasia Loop", "Tea Gardens"],
    fullDescription: "Coming Soon - Experience the charm of Darjeeling with breathtaking mountain views.",
    packageType: "darjeeling",
    comingSoon: true
  },
  {
    id: 18,
    name: "Chikmagalur Package",
    category: "chikmagalur",
    price: null,
    duration: "Coming Soon",
    badge: "Coming Soon",
    shortDescription: "Coffee Land - Misty Hills, Waterfalls & Scenic Beauty ☕",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    includes: [],
    locations: ["Chikmagalur", "Mullayanagiri", "Baba Budangiri", "Coffee Plantations"],
    fullDescription: "Coming Soon - Explore the coffee paradise of Karnataka with stunning landscapes.",
    packageType: "chikmagalur",
    comingSoon: true
  },
  {
    id: 19,
    name: "Rajasthan Package",
    category: "rajasthan",
    price: null,
    duration: "Coming Soon",
    badge: "Coming Soon",
    shortDescription: "Royal Heritage - Palaces, Forts & Desert Safari 🏰",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
    includes: [],
    locations: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
    fullDescription: "Coming Soon - Discover the royal heritage and vibrant culture of Rajasthan.",
    packageType: "rajasthan",
    comingSoon: true
  }
];

// Signature Experiences
export const signatureExperiences = [
  {
    id: "sig1",
    name: "Treehouse Stay - Munnar, Kerala",
    icon: "🌳",
    description: "Unique treehouse accommodation amidst lush tea plantations with breathtaking valley views",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    premium: true
  },
  {
    id: "sig2",
    name: "Wild Periyar Forest Experience",
    icon: "🌲",
    description: "Exclusive wildlife safari and forest trekking in Thekkady's pristine Periyar forests",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
    premium: true
  },
  {
    id: "sig3",
    name: "Beach Residency - Varkala Cliff",
    icon: "🌊",
    description: "Luxury cliff-top stay with stunning ocean views and pristine beaches",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    premium: true
  },
  {
    id: "sig4",
    name: "Yana - Most Favourite Scenic Location",
    icon: "🌄",
    description: "Explore the mystical rock formations and caves of Yana with breathtaking natural beauty",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    premium: true
  },
  {
    id: "sig5",
    name: "Kannur Theyyam Festival",
    icon: "🎭",
    description: "Witness the ancient ritual art form of North Kerala - a mesmerizing cultural experience",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    premium: true
  }
];
