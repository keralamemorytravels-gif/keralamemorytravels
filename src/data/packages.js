export const packages = [
  {
    id: 1,
    name: "Vizag to Kerala – Starting ₹3999",
    price: 3999,
    duration: "3 Days / 2 Nights",
    badge: "Popular",
    shortDescription: "A quick getaway covering the best of Kerala — from historic Kochi streets to tea-kissed Munnar hills and serene backwaters.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
    includes: ["AC Travel", "Hotel Stay", "Breakfast & Dinner", "Sightseeing", "Local Guide"],
    locations: [
      "Alleppey Backwaters",
      "Munnar Hills",
      "Thekkady",
      "Kochi Fort",
      "Athirapally Waterfalls"
    ],
    fullDescription: "Experience the essence of Kerala in just 3 days. Start with the historic charm of Fort Kochi, journey through the misty tea gardens of Munnar, and end with the serene backwaters of Alleppey.",
    isKerala: true,
    packageOptions: [
      { days: 3, nights: 2, price: 3999 },
      { days: 4, nights: 3, price: 5332 },
      { days: 5, nights: 4, price: 6665 },
      { days: 6, nights: 5, price: 7998 },
      { days: 7, nights: 6, price: 9331 }
    ],
    itineraries: {
      3: [
        {
          day: 1,
          title: "Waterfalls Trail 💦",
          subtitle: "(Via Elephant Safari Forest View) 🐘🦚🔥",
          places: ["Athirapally", "Cheeyapara", "Valara"],
          description: "Begin your magical Kerala journey with stunning waterfalls and elephant safari through lush forest views."
        },
        {
          day: 2,
          title: "Munnar Exploration 🌿",
          subtitle: "Tea Gardens & Scenic Beauty",
          places: ["Mattupetty Dam", "Echo Point", "Tea Museum"],
          description: "Explore the misty hills of Munnar, visit the famous tea museum, and enjoy breathtaking views at Echo Point."
        },
        {
          day: 3,
          title: "Backwater Bliss & Kochi Heritage 🚤🌊",
          subtitle: "Cruise & Culture",
          places: ["Alleppey Backwater Cruise", "Fort Kochi", "Marine Ride"],
          description: "Experience the serene backwaters of Alleppey on a traditional cruise and explore the historic Fort Kochi."
        }
      ],
      4: [
        {
          day: 1,
          title: "Waterfalls Trail 💦",
          subtitle: "(Via Elephant Safari Forest View) 🐘🦚🔥",
          places: ["Athirapally", "Cheeyapara", "Valara"],
          description: "Begin your magical Kerala journey with stunning waterfalls and elephant safari through lush forest views."
        },
        {
          day: 2,
          title: "Munnar Exploration 🌿",
          subtitle: "Tea Gardens & Scenic Beauty",
          places: ["Mattupetty Dam", "Echo Point", "Tea Museum"],
          description: "Explore the misty hills of Munnar, visit the famous tea museum, and enjoy breathtaking views at Echo Point."
        },
        {
          day: 3,
          title: "Thekkady Wildlife Adventure 🦁🌲",
          subtitle: "Spice Gardens & Nature",
          places: ["Periyar Wildlife Sanctuary", "Spice Plantation", "Bamboo Rafting"],
          description: "Discover exotic wildlife at Periyar, explore aromatic spice plantations, and enjoy bamboo rafting."
        },
        {
          day: 4,
          title: "Backwater Bliss & Kochi Heritage 🚤🌊",
          subtitle: "Cruise & Culture",
          places: ["Alleppey Backwater Cruise", "Fort Kochi", "Marine Ride"],
          description: "Experience the serene backwaters of Alleppey on a traditional cruise and explore the historic Fort Kochi."
        }
      ],
      5: [
        {
          day: 1,
          title: "Waterfalls Trail 💦",
          subtitle: "(Via Elephant Safari Forest View) 🐘🦚🔥",
          places: ["Athirapally", "Cheeyapara", "Valara"],
          description: "Begin your magical Kerala journey with stunning waterfalls and elephant safari through lush forest views."
        },
        {
          day: 2,
          title: "Munnar Exploration 🌿",
          subtitle: "Tea Gardens & Scenic Beauty",
          places: ["Mattupetty Dam", "Echo Point", "Tea Museum", "Eravikulam National Park"],
          description: "Explore the misty hills of Munnar, visit the famous tea museum, and spot the endangered Nilgiri Tahr."
        },
        {
          day: 3,
          title: "Thekkady Wildlife Adventure 🦁🌲",
          subtitle: "Spice Gardens & Nature",
          places: ["Periyar Wildlife Sanctuary", "Spice Plantation", "Bamboo Rafting"],
          description: "Discover exotic wildlife at Periyar, explore aromatic spice plantations, and enjoy bamboo rafting."
        },
        {
          day: 4,
          title: "Alleppey Backwater Experience 🚤",
          subtitle: "Houseboat Stay",
          places: ["Houseboat Cruise", "Village Tour", "Sunset Views"],
          description: "Spend a full day cruising the tranquil backwaters, visit local villages, and witness stunning sunsets."
        },
        {
          day: 5,
          title: "Kochi Heritage & Departure 🌊",
          subtitle: "Culture & History",
          places: ["Fort Kochi", "Chinese Fishing Nets", "Marine Drive", "Shopping"],
          description: "Explore the historic Fort Kochi, see the iconic Chinese fishing nets, and enjoy shopping before departure."
        }
      ],
      6: [
        {
          day: 1,
          title: "Waterfalls Trail 💦",
          subtitle: "(Via Elephant Safari Forest View) 🐘🦚🔥",
          places: ["Athirapally", "Cheeyapara", "Valara"],
          description: "Begin your magical Kerala journey with stunning waterfalls and elephant safari through lush forest views."
        },
        {
          day: 2,
          title: "Munnar Exploration 🌿",
          subtitle: "Tea Gardens & Scenic Beauty",
          places: ["Mattupetty Dam", "Echo Point", "Tea Museum", "Eravikulam National Park"],
          description: "Explore the misty hills of Munnar, visit the famous tea museum, and spot the endangered Nilgiri Tahr."
        },
        {
          day: 3,
          title: "Thekkady Wildlife Adventure 🦁🌲",
          subtitle: "Spice Gardens & Nature",
          places: ["Periyar Wildlife Sanctuary", "Spice Plantation", "Bamboo Rafting", "Elephant Ride"],
          description: "Discover exotic wildlife at Periyar, explore aromatic spice plantations, and enjoy elephant rides."
        },
        {
          day: 4,
          title: "Alleppey Houseboat Experience 🚤",
          subtitle: "Overnight Houseboat Stay",
          places: ["Houseboat Cruise", "Village Tour", "Traditional Kerala Meals"],
          description: "Experience an overnight stay on a traditional houseboat with authentic Kerala cuisine."
        },
        {
          day: 5,
          title: "Kovalam Beach Relaxation 🏖️",
          subtitle: "Beach & Lighthouse",
          places: ["Lighthouse Beach", "Hawah Beach", "Samudra Beach", "Ayurvedic Massage"],
          description: "Relax on pristine beaches, visit the iconic lighthouse, and enjoy rejuvenating Ayurvedic treatments."
        },
        {
          day: 6,
          title: "Kochi Heritage & Departure 🌊",
          subtitle: "Culture & History",
          places: ["Fort Kochi", "Chinese Fishing Nets", "Marine Drive", "Shopping"],
          description: "Explore the historic Fort Kochi, see the iconic Chinese fishing nets, and enjoy shopping before departure."
        }
      ],
      7: [
        {
          day: 1,
          title: "Waterfalls Trail 💦",
          subtitle: "(Via Elephant Safari Forest View) 🐘🦚🔥",
          places: ["Athirapally", "Cheeyapara", "Valara"],
          description: "Begin your magical Kerala journey with stunning waterfalls and elephant safari through lush forest views."
        },
        {
          day: 2,
          title: "Munnar Exploration 🌿",
          subtitle: "Tea Gardens & Scenic Beauty",
          places: ["Mattupetty Dam", "Echo Point", "Tea Museum", "Eravikulam National Park"],
          description: "Explore the misty hills of Munnar, visit the famous tea museum, and spot the endangered Nilgiri Tahr."
        },
        {
          day: 3,
          title: "Thekkady Wildlife Adventure 🦁🌲",
          subtitle: "Spice Gardens & Nature",
          places: ["Periyar Wildlife Sanctuary", "Spice Plantation", "Bamboo Rafting", "Elephant Ride"],
          description: "Discover exotic wildlife at Periyar, explore aromatic spice plantations, and enjoy elephant rides."
        },
        {
          day: 4,
          title: "Alleppey Houseboat Experience 🚤",
          subtitle: "Overnight Houseboat Stay",
          places: ["Houseboat Cruise", "Village Tour", "Traditional Kerala Meals"],
          description: "Experience an overnight stay on a traditional houseboat with authentic Kerala cuisine."
        },
        {
          day: 5,
          title: "Kovalam Beach Relaxation 🏖️",
          subtitle: "Beach & Lighthouse",
          places: ["Lighthouse Beach", "Hawah Beach", "Samudra Beach", "Ayurvedic Massage"],
          description: "Relax on pristine beaches, visit the iconic lighthouse, and enjoy rejuvenating Ayurvedic treatments."
        },
        {
          day: 6,
          title: "Varkala Cliff & Beach 🌅",
          subtitle: "Spiritual & Scenic",
          places: ["Varkala Beach", "Janardhana Temple", "Cliff Views", "Sunset Point"],
          description: "Visit the sacred Janardhana Temple, enjoy cliff-top views, and witness spectacular sunsets."
        },
        {
          day: 7,
          title: "Kochi Heritage & Departure 🌊",
          subtitle: "Culture & History",
          places: ["Fort Kochi", "Chinese Fishing Nets", "Marine Drive", "Shopping"],
          description: "Explore the historic Fort Kochi, see the iconic Chinese fishing nets, and enjoy shopping before departure."
        }
      ]
    }
  },
  {
    id: 2,
    name: "Honeymoon Special Kerala – Starting ₹4999",
    price: 4999,
    duration: "3 Days / 2 Nights",
    badge: "Romantic",
    shortDescription: "A romantic escape through misty mountains, spice gardens, luxury houseboats, and golden beach sunsets.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    includes: ["Luxury Accommodation", "Candlelight Dinner", "Houseboat Stay", "All Meals"],
    locations: [
      "Munnar",
      "Thekkady",
      "Alleppey",
      "Kovalam"
    ],
    fullDescription: "Create unforgettable memories with your loved one. This romantic journey takes you through misty mountains, exotic spice gardens, a luxury houseboat cruise, and pristine beaches perfect for sunset walks.",
    packageOptions: [
      { days: 3, nights: 2, price: 4999 },
      { days: 4, nights: 3, price: 6665 },
      { days: 5, nights: 4, price: 8331 },
      { days: 6, nights: 5, price: 9997 },
      { days: 7, nights: 6, price: 11663 }
    ]
  },
  {
    id: 3,
    name: "Family & Group Kerala – Starting ₹5999",
    price: 5999,
    duration: "3 Days / 2 Nights",
    badge: "Best Value",
    shortDescription: "The ultimate Kerala adventure for families and groups — wildlife, waterfalls, culture, and coastal bliss.",
    image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80",
    includes: ["AC Sleeper Bus", "3-Star Hotel", "All Meals", "Wildlife Safari"],
    locations: [
      "Kochi",
      "Munnar",
      "Periyar Wildlife Sanctuary",
      "Alleppey",
      "Varkala"
    ],
    fullDescription: "The complete Kerala experience perfect for families and groups. Explore wildlife sanctuaries, cascading waterfalls, cultural heritage sites, and relax on beautiful beaches.",
    packageOptions: [
      { days: 3, nights: 2, price: 5999 },
      { days: 4, nights: 3, price: 7999 },
      { days: 5, nights: 4, price: 9999 },
      { days: 6, nights: 5, price: 11999 },
      { days: 7, nights: 6, price: 13999 }
    ]
  },
  {
    id: 4,
    name: "Vizag to Goa – Starting ₹5999",
    price: 5999,
    duration: "3 Days / 2 Nights",
    badge: null,
    shortDescription: "Enjoy Goa's beaches, waterfalls, and vibrant nightlife",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    includes: ["AC Travel", "Beach Resort Stay", "Breakfast & Dinner"],
    locations: [
      "Dudhsagar Waterfalls",
      "Baga Beach",
      "Calangute Beach",
      "Fort Aguada"
    ],
    fullDescription: "Relax on Goa's pristine beaches, explore historic forts, and witness the majestic Dudhsagar Waterfalls. Perfect for beach lovers and adventure seekers.",
    packageOptions: [
      { days: 3, nights: 2, price: 5999 },
      { days: 4, nights: 3, price: 7999 },
      { days: 5, nights: 4, price: 9999 },
      { days: 6, nights: 5, price: 11999 },
      { days: 7, nights: 6, price: 13999 }
    ]
  }
];
