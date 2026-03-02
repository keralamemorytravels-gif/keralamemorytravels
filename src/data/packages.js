export const packages = [
  {
    id: 1,
    name: "Kerala Packages – Starting ₹3999",
    price: 3999,
    duration: "2-6 Days",
    badge: "Popular",
    shortDescription: "Explore Kerala with flexible packages from 2 to 6 days — covering Kochi, Athirappilly, Munnar, Thekkady, Alappuzha, Varkala, and more.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
    includes: ["AC Travel", "Hotel Stay", "Breakfast & Dinner", "Sightseeing", "Local Guide"],
    locations: [
      "Kochi",
      "Athirappilly Waterfalls",
      "Munnar Hills",
      "Thekkady",
      "Alappuzha Backwaters",
      "Varkala Beach",
      "Trivandrum",
      "Kovalam",
      "Kanyakumari"
    ],
    fullDescription: "Experience the best of Kerala with our flexible packages. Choose from 2 to 6 days covering waterfalls, hill stations, backwaters, and beaches.",
    isKerala: true,
    packageOptions: [
      { days: 2, nights: 1, price: "Custom", label: "Special Price – You Decide" },
      { days: 3, nights: 2, price: 3999 },
      { days: 4, nights: 3, price: 4999 },
      { days: 5, nights: 4, price: 4999 },
      { days: 6, nights: 5, price: 4999 }
    ],
    itineraries: {
      2: {
        packages: [
          {
            packageName: "Package 1",
            days: [
              {
                day: 1,
                title: "Kochi → Athirappilly → Munnar",
                subtitle: "Waterfalls & Hill Station",
                places: ["Kochi", "Athirappilly Waterfalls", "Munnar"],
                description: "Start your journey from Kochi, visit the majestic Athirappilly waterfalls, and reach the beautiful hill station of Munnar."
              },
              {
                day: 2,
                title: "Munnar → Kochi",
                subtitle: "Return Journey",
                places: ["Munnar", "Kochi"],
                description: "Enjoy Munnar's scenic beauty and return to Kochi."
              }
            ]
          }
        ]
      },
      3: {
        packages: [
          {
            packageName: "Package 1",
            days: [
              {
                day: 1,
                title: "Kochi → Athirappilly → Munnar",
                subtitle: "Waterfalls & Hill Station",
                places: ["Kochi", "Athirappilly Waterfalls", "Munnar"],
                description: "Begin your Kerala journey from Kochi, visit the stunning Athirappilly waterfalls, and proceed to the misty hills of Munnar."
              },
              {
                day: 2,
                title: "Munnar Sightseeing",
                subtitle: "Tea Gardens & Scenic Beauty",
                places: ["Mattupetty Dam", "Echo Point", "Tea Museum", "Tea Gardens"],
                description: "Explore Munnar's famous tea plantations, visit Mattupetty Dam, Echo Point, and the Tea Museum."
              },
              {
                day: 3,
                title: "Munnar → Alappuzha → Kochi",
                subtitle: "Backwaters & Return",
                places: ["Munnar", "Alappuzha Backwaters", "Kochi"],
                description: "Travel from Munnar to Alappuzha to experience the serene backwaters, then return to Kochi."
              }
            ]
          }
        ]
      },
      4: {
        packages: [
          {
            packageName: "Package 1",
            days: [
              {
                day: 1,
                title: "Kochi → Athirappilly → Munnar",
                subtitle: "Waterfalls & Hill Station",
                places: ["Kochi", "Athirappilly Waterfalls", "Munnar"],
                description: "Start from Kochi, visit Athirappilly waterfalls, and reach Munnar."
              },
              {
                day: 2,
                title: "Munnar Exploration",
                subtitle: "Tea Gardens & Nature",
                places: ["Mattupetty Dam", "Echo Point", "Tea Plantations"],
                description: "Full day exploring Munnar's tea gardens and scenic spots."
              },
              {
                day: 3,
                title: "Munnar → Athirappilly",
                subtitle: "Return to Waterfalls",
                places: ["Munnar", "Athirappilly"],
                description: "Travel back to Athirappilly for more waterfall exploration."
              },
              {
                day: 4,
                title: "Athirappilly → Kochi",
                subtitle: "Return Journey",
                places: ["Athirappilly", "Kochi"],
                description: "Return to Kochi with beautiful memories."
              }
            ]
          },
          {
            packageName: "Package 2",
            days: [
              {
                day: 1,
                title: "Kochi → Athirappilly",
                subtitle: "Waterfalls Experience",
                places: ["Kochi", "Athirappilly Waterfalls"],
                description: "Journey from Kochi to the magnificent Athirappilly waterfalls."
              },
              {
                day: 2,
                title: "Athirappilly → Munnar",
                subtitle: "Hill Station Beauty",
                places: ["Athirappilly", "Munnar"],
                description: "Travel to Munnar and explore the tea gardens."
              },
              {
                day: 3,
                title: "Munnar → Alappuzha",
                subtitle: "Backwater Experience",
                places: ["Munnar", "Alappuzha Backwaters"],
                description: "Experience the serene backwaters of Alappuzha."
              },
              {
                day: 4,
                title: "Alappuzha → Trivandrum",
                subtitle: "Capital City",
                places: ["Alappuzha", "Trivandrum"],
                description: "Travel to Trivandrum, Kerala's capital city."
              }
            ]
          }
        ]
      },
      5: {
        packages: [
          {
            packageName: "Package 1",
            days: [
              {
                day: 1,
                title: "Kochi → Athirappilly",
                subtitle: "Waterfalls Experience",
                places: ["Kochi", "Athirappilly Waterfalls"],
                description: "Journey from Kochi to the magnificent Athirappilly waterfalls."
              },
              {
                day: 2,
                title: "Athirappilly → Munnar",
                subtitle: "Hill Station Beauty",
                places: ["Athirappilly", "Munnar"],
                description: "Travel to Munnar and explore the tea gardens."
              },
              {
                day: 3,
                title: "Munnar → Thekkady",
                subtitle: "Wildlife & Spices",
                places: ["Munnar", "Thekkady", "Periyar Wildlife Sanctuary"],
                description: "Visit Thekkady's wildlife sanctuary and spice plantations."
              },
              {
                day: 4,
                title: "Thekkady → Alappuzha",
                subtitle: "Backwater Experience",
                places: ["Thekkady", "Alappuzha Backwaters"],
                description: "Experience the serene backwaters of Alappuzha."
              },
              {
                day: 5,
                title: "Alappuzha → Kochi",
                subtitle: "Return Journey",
                places: ["Alappuzha", "Kochi"],
                description: "Return to Kochi with unforgettable memories."
              }
            ]
          },
          {
            packageName: "Package 2",
            days: [
              {
                day: 1,
                title: "Kochi → Munnar",
                subtitle: "Hill Station Journey",
                places: ["Kochi", "Munnar"],
                description: "Travel directly to Munnar from Kochi."
              },
              {
                day: 2,
                title: "Munnar Exploration",
                subtitle: "Tea Gardens & Nature",
                places: ["Mattupetty Dam", "Echo Point", "Tea Museum"],
                description: "Full day exploring Munnar's scenic beauty."
              },
              {
                day: 3,
                title: "Munnar → Thekkady",
                subtitle: "Wildlife Adventure",
                places: ["Munnar", "Thekkady", "Periyar"],
                description: "Visit Thekkady's wildlife and spice plantations."
              },
              {
                day: 4,
                title: "Thekkady → Varkala",
                subtitle: "Beach & Cliffs",
                places: ["Thekkady", "Varkala Beach"],
                description: "Travel to the stunning Varkala beach."
              },
              {
                day: 5,
                title: "Varkala → Trivandrum",
                subtitle: "Capital City",
                places: ["Varkala", "Trivandrum"],
                description: "Visit Trivandrum before departure."
              }
            ]
          },
          {
            packageName: "Package 3",
            days: [
              {
                day: 1,
                title: "Kochi → Athirappilly",
                subtitle: "Waterfalls Trail",
                places: ["Kochi", "Athirappilly Waterfalls"],
                description: "Start with Athirappilly waterfalls."
              },
              {
                day: 2,
                title: "Athirappilly → Munnar",
                subtitle: "Hill Station",
                places: ["Athirappilly", "Munnar"],
                description: "Journey to Munnar's tea gardens."
              },
              {
                day: 3,
                title: "Munnar Sightseeing",
                subtitle: "Tea Gardens",
                places: ["Munnar", "Tea Plantations"],
                description: "Explore Munnar's beauty."
              },
              {
                day: 4,
                title: "Munnar → Alappuzha",
                subtitle: "Backwaters",
                places: ["Munnar", "Alappuzha"],
                description: "Experience backwaters."
              },
              {
                day: 5,
                title: "Alappuzha → Varkala",
                subtitle: "Beach Experience",
                places: ["Alappuzha", "Varkala"],
                description: "Visit Varkala beach and cliffs."
              }
            ]
          }
        ]
      },
      6: {
        packages: [
          {
            packageName: "Package 1",
            days: [
              {
                day: 1,
                title: "Kochi → Athirappilly",
                subtitle: "Waterfalls Trail",
                places: ["Kochi", "Athirappilly Waterfalls"],
                description: "Start your extended Kerala tour with Athirappilly waterfalls."
              },
              {
                day: 2,
                title: "Athirappilly → Munnar",
                subtitle: "Hill Station Journey",
                places: ["Athirappilly", "Munnar"],
                description: "Travel to the beautiful hill station of Munnar."
              },
              {
                day: 3,
                title: "Munnar Exploration",
                subtitle: "Tea Gardens & Nature",
                places: ["Tea Plantations", "Mattupetty Dam", "Echo Point"],
                description: "Full day exploring Munnar's scenic beauty."
              },
              {
                day: 4,
                title: "Munnar → Alappuzha",
                subtitle: "Backwater Experience",
                places: ["Munnar", "Alappuzha Backwaters"],
                description: "Experience the famous Kerala backwaters."
              },
              {
                day: 5,
                title: "Alappuzha → Varkala",
                subtitle: "Beach & Cliffs",
                places: ["Alappuzha", "Varkala Beach", "Varkala Cliff"],
                description: "Visit the stunning Varkala beach and cliff views."
              },
              {
                day: 6,
                title: "Varkala → Trivandrum",
                subtitle: "Capital City & Departure",
                places: ["Varkala", "Trivandrum"],
                description: "Travel to Trivandrum for your departure."
              }
            ]
          },
          {
            packageName: "Package 2",
            days: [
              {
                day: 1,
                title: "Kochi → Athirappilly",
                subtitle: "Waterfalls Experience",
                places: ["Kochi", "Athirappilly Waterfalls"],
                description: "Begin with Athirappilly waterfalls."
              },
              {
                day: 2,
                title: "Athirappilly → Varkala",
                subtitle: "Beach Journey",
                places: ["Athirappilly", "Varkala Beach"],
                description: "Travel to Varkala's stunning cliffs."
              },
              {
                day: 3,
                title: "Varkala Exploration",
                subtitle: "Beach & Cliffs",
                places: ["Varkala Beach", "Varkala Cliff", "Janardhana Temple"],
                description: "Explore Varkala's beauty."
              },
              {
                day: 4,
                title: "Varkala → Kovalam",
                subtitle: "Lighthouse Beach",
                places: ["Varkala", "Kovalam Beach"],
                description: "Visit the famous Kovalam lighthouse beach."
              },
              {
                day: 5,
                title: "Kovalam → Trivandrum → Kanyakumari",
                subtitle: "Southern Tip",
                places: ["Kovalam", "Trivandrum", "Kanyakumari"],
                description: "Visit India's southern tip at Kanyakumari."
              },
              {
                day: 6,
                title: "Kanyakumari → Trivandrum",
                subtitle: "Return & Departure",
                places: ["Kanyakumari", "Trivandrum"],
                description: "Return to Trivandrum for departure."
              }
            ]
          }
        ]
      }
    }
  },
  {
    id: 2,
    name: "Manali Adventure",
    price: null,
    duration: "Coming Soon",
    badge: "Coming Soon",
    shortDescription: "Snow-capped mountains, adventure sports, and serene valleys await you in the Himalayas.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    includes: [],
    locations: ["Solang Valley", "Rohtang Pass", "Hadimba Temple", "Old Manali"],
    fullDescription: "Coming Soon",
    comingSoon: true
  },
  {
    id: 3,
    name: "Goa Beach Paradise",
    price: null,
    duration: "Coming Soon",
    badge: "Coming Soon",
    shortDescription: "Pristine beaches, vibrant nightlife, and Portuguese heritage in India's beach capital.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    includes: [],
    locations: ["Baga Beach", "Fort Aguada", "Dudhsagar Falls", "Old Goa Churches"],
    fullDescription: "Coming Soon",
    comingSoon: true
  },
  {
    id: 4,
    name: "Rajasthan Heritage Tour",
    price: null,
    duration: "Coming Soon",
    badge: "Coming Soon",
    shortDescription: "Royal palaces, desert safaris, and rich cultural heritage of the Land of Kings.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
    includes: [],
    locations: ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur"],
    fullDescription: "Coming Soon",
    comingSoon: true
  }
];
