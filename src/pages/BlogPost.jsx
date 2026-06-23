import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import './BlogPost.css';

const blogContent = {
  'top-10-places-to-visit-in-kerala': {
    title: 'Top 10 Places to Visit in Kerala in 2025',
    category: 'Kerala', date: 'June 10, 2025', readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80',
    content: `
      <h2>1. Munnar – The Tea Garden Paradise</h2>
      <p>Munnar is one of Kerala's most popular hill stations, famous for its sprawling tea plantations, misty mountains, and cool climate. Located at an altitude of 1,600 meters above sea level, Munnar offers breathtaking views of the Western Ghats. The tea estates here produce some of the world's finest tea. Must-visit spots include Eravikulam National Park, Mattupetty Dam, and the Top Station viewpoint.</p>

      <h2>2. Alleppey (Alappuzha) – The Venice of the East</h2>
      <p>Alleppey is famous for its backwater houseboat experiences. The serene network of canals, lagoons, and rice paddies creates a magical landscape that's unlike anywhere else in the world. A night on a traditional Kerala houseboat drifting through the backwaters is an experience you'll never forget. The Alleppey beach and its lighthouse are also worth visiting.</p>

      <h2>3. Thekkady – Wildlife and Spice Gardens</h2>
      <p>Thekkady is home to the Periyar Wildlife Sanctuary, one of India's finest tiger reserves. The sanctuary offers boat cruises on Periyar Lake where you can spot elephants, deer, and exotic birds in their natural habitat. The surrounding region is also famous for its spice and tea plantations, offering guided plantation tours.</p>

      <h2>4. Kochi – The Queen of the Arabian Sea</h2>
      <p>Kochi is Kerala's commercial capital and a fascinating blend of ancient and modern. Fort Kochi offers Portuguese-era churches, Dutch palaces, Jewish synagogues, and the iconic Chinese fishing nets. The vibrant arts scene, seafood restaurants, and the Kochi-Muziris Biennale make it a cultural hub worth exploring.</p>

      <h2>5. Wayanad – Misty Mountains and Waterfalls</h2>
      <p>Wayanad is a highland paradise in northern Kerala, known for its dense forests, waterfalls, and coffee plantations. Edakkal Caves with ancient rock carvings, Banasura Sagar Dam (India's largest earth dam), and Chembra Peak are the top attractions here.</p>

      <h2>6. Kovalam – Kerala's Most Famous Beach</h2>
      <p>Kovalam is a crescent-shaped beach town near Trivandrum, famous for its lighthouse beach, Hawa Beach, and Samudra Beach. The cliff-top promenade lined with seafood restaurants and the iconic Vizhinjam Lighthouse make it a classic Kerala coastal experience.</p>

      <h2>7. Varkala – The Clifftop Beach</h2>
      <p>Varkala's dramatic red laterite cliffs overlooking the Arabian Sea make it one of India's most photographed beaches. The North Cliff area is lined with cafes, yoga shalas, and souvenir shops. Janardhana Swami Temple, a 2,000-year-old temple on the cliff, is a significant pilgrimage site.</p>

      <h2>8. Thrissur – Cultural Capital of Kerala</h2>
      <p>Thrissur is Kerala's cultural capital and home to the famous Thrissur Pooram, described as the mother of all temple festivals. The Vadakkunnathan Temple, Kerala Kalamandalam (the state's arts academy), and various museums make it a must-visit for culture enthusiasts.</p>

      <h2>9. Kozhikode (Calicut) – City of Spices</h2>
      <p>Kozhikode is a historic spice trading port city with a rich cultural heritage. The Kozhikode beach, Kappad Beach (where Vasco da Gama landed), and the vibrant local cuisine (particularly the Malabar biryani and Kozhikodan halwa) make it a unique destination.</p>

      <h2>10. Padmanabhapuram Palace – Ancient Kerala Architecture</h2>
      <p>Located near Thiruvananthapuram, the Padmanabhapuram Palace is the largest wooden palace in Asia and a masterpiece of traditional Kerala architecture. The palace complex, dating back to the 16th century, features exquisite woodwork, murals, and exhibits that showcase Kerala's royal heritage.</p>

      <h2>Plan Your Kerala Trip with Kerala Memory Travels</h2>
      <p>Ready to explore these incredible destinations? Kerala Memory Travels offers customized packages for all budgets and group sizes. Contact us on WhatsApp at <strong>+91 9059323753</strong> for personalized Kerala tour packages starting from ₹3,999 per person.</p>
    `
  },
  'kerala-backwaters-complete-guide': {
    title: 'Kerala Backwaters: The Complete Travel Guide',
    category: 'Kerala', date: 'June 5, 2025', readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80',
    content: `
      <h2>What Are the Kerala Backwaters?</h2>
      <p>The Kerala backwaters are a network of interconnected canals, rivers, lakes, and inlets that form a unique and breathtaking coastal ecosystem. Stretching over 900 kilometers along the Kerala coast, the backwaters are home to fishing villages, paddy fields, coconut groves, and diverse wildlife.</p>

      <h2>Best Places to Experience Kerala Backwaters</h2>
      <h3>Alleppey (Alappuzha)</h3>
      <p>Alleppey is the most popular backwater destination and the starting point for most houseboat cruises. The Vembanad Lake, the largest lake in Kerala, is the heart of the Alleppey backwaters. The annual Nehru Trophy Boat Race, held in August, is one of India's most spectacular sporting events.</p>
      <h3>Kumarakom</h3>
      <p>Located on the banks of Vembanad Lake, Kumarakom is a cluster of islands famous for its bird sanctuary and luxury resorts. The Kumarakom Bird Sanctuary is home to migratory birds like Siberian storks, egrets, and kingfishers.</p>
      <h3>Kollam</h3>
      <p>Kollam is the starting point of the famous eight-hour boat journey to Alleppey. Ashtamudi Lake, with its distinctive eight-pronged shape, is one of the most scenic backwater destinations.</p>

      <h2>Houseboat Experience – Everything You Need to Know</h2>
      <p>A Kerala houseboat (locally called "Kettuvallam") is a traditional rice barge that has been converted into a floating hotel. Modern houseboats come equipped with air-conditioned bedrooms, a fully equipped kitchen, sun decks, and a crew including a captain, chef, and guide.</p>

      <h2>What's Included in a Houseboat Package?</h2>
      <ul>
        <li>Accommodation on the houseboat (1 or 2 nights)</li>
        <li>All meals (breakfast, lunch, dinner) prepared by an onboard chef</li>
        <li>Cruise through backwaters and canals</li>
        <li>Sightseeing at village stops</li>
        <li>Professional crew including captain and chef</li>
      </ul>

      <h2>Best Time to Visit Kerala Backwaters</h2>
      <p>The best time to visit Kerala backwaters is from October to March when the weather is cool and pleasant. Monsoon season (June-September) offers lush green landscapes but can affect boat operations. Summer months (April-May) can be hot and humid.</p>

      <h2>Book Your Kerala Backwater Package</h2>
      <p>Kerala Memory Travels offers affordable backwater packages including houseboat stays. Contact us on WhatsApp at <strong>+91 9059323753</strong> for the best Kerala backwater package deals.</p>
    `
  },
  'goa-travel-guide-2025': {
    title: 'Goa Travel Guide 2025: Beaches, Food & Fun',
    category: 'Goa', date: 'May 20, 2025', readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80',
    content: `
      <h2>Why Visit Goa in 2025?</h2>
      <p>Goa remains India's most popular tourist destination, attracting millions of visitors every year. With its stunning beaches, vibrant nightlife, Portuguese heritage, water sports, and delicious seafood, Goa offers something for every type of traveler — from backpackers to luxury seekers, families to honeymooners.</p>

      <h2>North Goa vs South Goa</h2>
      <h3>North Goa</h3>
      <p>North Goa is known for its lively atmosphere, water sports, beach shacks, and nightlife. Popular beaches include Baga, Calangute, Anjuna, Vagator, and Morjim. The area around Panaji (Goa's capital) offers Portuguese colonial architecture, churches, and the famous Fontainhas Latin Quarter.</p>
      <h3>South Goa</h3>
      <p>South Goa is known for its pristine, less-crowded beaches, luxury resorts, and peaceful atmosphere. Palolem, Agonda, Colva, and Cavelossim are among the most beautiful beaches in South Goa. The region is perfect for families and couples seeking a relaxed beach holiday.</p>

      <h2>Top Beaches in Goa</h2>
      <ul>
        <li><strong>Baga Beach:</strong> Most popular beach with water sports and nightlife</li>
        <li><strong>Calangute Beach:</strong> One of the largest and busiest beaches</li>
        <li><strong>Anjuna Beach:</strong> Famous for its flea market and trance parties</li>
        <li><strong>Palolem Beach:</strong> Most beautiful crescent-shaped beach in South Goa</li>
        <li><strong>Vagator Beach:</strong> Known for rocky cliffs and stunning sunsets</li>
      </ul>

      <h2>Water Sports in Goa</h2>
      <p>Goa is India's water sports capital. Popular activities include parasailing, jet skiing, banana boat rides, scuba diving, snorkeling, and kayaking. Grand Island offers excellent scuba diving and snorkeling experiences with vibrant marine life and coral reefs.</p>

      <h2>Goa Food Guide</h2>
      <p>Goan cuisine is a delightful blend of Indian and Portuguese influences. Must-try dishes include Fish Curry Rice, Prawn Balchão, Crab Xec Xec, Bebinca (traditional dessert), and the famous Goan pork vindaloo. Fresh seafood is available at most beach shacks and restaurants.</p>

      <h2>Book Your Goa Package</h2>
      <p>Kerala Memory Travels offers affordable Goa packages for groups, honeymoon couples, and families. Packages start from ₹7,999 per person. Contact us on WhatsApp at <strong>+91 9059323753</strong> for the best Goa deals.</p>
    `
  },
};

// Generate generic content for slugs not in the main content map
function getGenericContent(slug) {
  const titleMap = {
    'munnar-tea-gardens-guide': { title: 'Munnar Tea Gardens: A Traveler\'s Paradise', category: 'Kerala', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200&q=80' },
    'lakshadweep-travel-guide': { title: 'Lakshadweep: India\'s Hidden Island Paradise', category: 'Lakshadweep', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80' },
    'darjeeling-hill-station-guide': { title: 'Darjeeling: Complete Guide to the Queen of Hills', category: 'Darjeeling', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80' },
    'kerala-honeymoon-package-guide': { title: 'Kerala Honeymoon Packages: The Ultimate Romantic Guide', category: 'Kerala', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&q=80' },
    'kerala-family-vacation-tips': { title: 'Kerala with Family: Best Places & Tips for 2025', category: 'Kerala', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80' },
    'alleppey-houseboat-experience': { title: 'Alleppey Houseboat Experience: What to Expect', category: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80' },
    'varkala-beach-guide': { title: 'Varkala Beach: Kerala\'s Most Beautiful Clifftop Beach', category: 'Kerala', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80' },
    'periyar-wildlife-sanctuary-guide': { title: 'Periyar Wildlife Sanctuary: Tiger Reserve in Thekkady', category: 'Kerala', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200&q=80' },
    'best-time-to-visit-kerala': { title: 'Best Time to Visit Kerala: A Month-by-Month Guide', category: 'Kerala', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80' },
  };
  return titleMap[slug] || null;
}

function BlogPost() {
  const { slug } = useParams();
  const post = blogContent[slug];
  const generic = !post ? getGenericContent(slug) : null;

  if (!post && !generic) {
    return (
      <div className="blog-post-page">
        <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
          <h1>Post Not Found</h1>
          <Link to="/blog" style={{ color: '#fb8500' }}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const title = post ? post.title : generic.title;
  const category = post ? post.category : generic.category;
  const image = post ? post.image : generic.image;

  return (
    <div className="blog-post-page">
      <div className="blog-post-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${image})` }}>
        <motion.div className="blog-post-hero-content"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        >
          <span className="blog-post-category">{category}</span>
          <h1>{title}</h1>
          {post && <div className="blog-post-meta"><span>📅 {post.date}</span><span>⏱ {post.readTime}</span></div>}
        </motion.div>
      </div>

      <div className="container blog-post-container">
        <Link to="/blog" className="back-to-blog">← Back to Blog</Link>

        <div className="blog-post-layout">
          <motion.article className="blog-post-content"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            {post ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <div>
                <p>This is a detailed travel guide about <strong>{title}</strong>. We are constantly adding more content to our travel blog. Stay tuned for the full article!</p>
                <p>In the meantime, contact us for personalized travel recommendations and affordable tour packages.</p>
              </div>
            )}

            <div className="blog-post-cta">
              <h3>Ready to Book Your Trip?</h3>
              <p>Contact Kerala Memory Travels for customized tour packages at the best prices!</p>
              <a href="https://wa.me/919059323753?text=Hi, I read your travel blog and want to book a package"
                className="blog-cta-btn" target="_blank" rel="noopener noreferrer"
              >
                📱 WhatsApp Us – +91 9059323753
              </a>
            </div>
          </motion.article>

          <aside className="blog-post-sidebar">
            <div className="sidebar-widget">
              <h3>Our Packages</h3>
              <ul className="sidebar-links">
                <li><Link to="/package/1">🌴 Kerala Group Packages</Link></li>
                <li><Link to="/package/6">💑 Kerala Honeymoon Packages</Link></li>
                <li><Link to="/package/9">👨‍👩‍👧 Kerala Family Packages</Link></li>
                <li><Link to="/package/11">🛕 Kerala Temple Packages</Link></li>
                <li><Link to="/package/14">🏖️ Goa Packages</Link></li>
                <li><Link to="/package/20">🏝️ Lakshadweep Packages</Link></li>
                <li><Link to="/package/22">🏔️ Darjeeling Packages</Link></li>
              </ul>
            </div>
            <div className="sidebar-widget">
              <h3>Contact Us</h3>
              <p>📱 +91 9059323753</p>
              <p>📸 @kerala_memory_travels</p>
              <a href="https://wa.me/919059323753" className="sidebar-whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
            </div>
          </aside>
        </div>
      </div>
      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  );
}

export default BlogPost;
