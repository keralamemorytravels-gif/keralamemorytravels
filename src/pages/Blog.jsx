import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import './Blog.css';

const blogPosts = [
  { id: 1, slug: 'top-10-places-to-visit-in-kerala', title: 'Top 10 Places to Visit in Kerala in 2025', category: 'Kerala', date: 'June 10, 2025', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', excerpt: 'Kerala is truly God\'s Own Country. From misty tea gardens of Munnar to the serene backwaters of Alleppey, here are the must-visit places in Kerala for 2025.' },
  { id: 2, slug: 'kerala-backwaters-complete-guide', title: 'Kerala Backwaters: The Complete Travel Guide', category: 'Kerala', date: 'June 5, 2025', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', excerpt: 'The backwaters of Kerala are a network of interconnected canals, rivers, and lakes. This guide covers everything you need to know about the Kerala backwater experience.' },
  { id: 3, slug: 'munnar-tea-gardens-guide', title: 'Munnar Tea Gardens: A Traveler\'s Paradise', category: 'Kerala', date: 'May 28, 2025', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80', excerpt: 'Munnar is famous for its sprawling tea plantations, misty hills, and cool climate. Discover the best tea estates, trekking routes, and scenic viewpoints in Munnar.' },
  { id: 4, slug: 'goa-travel-guide-2025', title: 'Goa Travel Guide 2025: Beaches, Food & Fun', category: 'Goa', date: 'May 20, 2025', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80', excerpt: 'Goa is India\'s most popular beach destination. This comprehensive guide covers the best beaches, restaurants, water sports, and hidden gems that Goa has to offer.' },
  { id: 5, slug: 'lakshadweep-travel-guide', title: 'Lakshadweep: India\'s Hidden Island Paradise', category: 'Lakshadweep', date: 'May 15, 2025', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', excerpt: 'Lakshadweep is India\'s best-kept secret. With pristine coral islands, crystal-clear lagoons, and world-class marine biodiversity, it\'s a paradise waiting to be explored.' },
  { id: 6, slug: 'darjeeling-hill-station-guide', title: 'Darjeeling: Complete Guide to the Queen of Hills', category: 'Darjeeling', date: 'May 8, 2025', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80', excerpt: 'Darjeeling enchants visitors with its Himalayan views, colonial charm, and world-famous tea. Here\'s everything you need to know before visiting this magical hill station.' },
  { id: 7, slug: 'kerala-honeymoon-package-guide', title: 'Kerala Honeymoon Packages: The Ultimate Romantic Guide', category: 'Kerala', date: 'May 1, 2025', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&q=80', excerpt: 'Kerala is India\'s most romantic honeymoon destination. From luxury houseboats in Alleppey to misty mountain retreats in Munnar, discover the perfect Kerala honeymoon experience.' },
  { id: 8, slug: 'kerala-family-vacation-tips', title: 'Kerala with Family: Best Places & Tips for 2025', category: 'Kerala', date: 'April 25, 2025', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80', excerpt: 'Planning a family trip to Kerala? From wildlife safaris in Thekkady to houseboat rides in Alleppey, Kerala has something for every family member. Here\'s our complete guide.' },
  { id: 9, slug: 'alleppey-houseboat-experience', title: 'Alleppey Houseboat Experience: What to Expect', category: 'Kerala', date: 'April 18, 2025', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', excerpt: 'A houseboat ride in Alleppey\'s backwaters is one of India\'s most unique travel experiences. Learn everything about booking, what\'s included, and how to make the most of it.' },
  { id: 10, slug: 'varkala-beach-guide', title: 'Varkala Beach: Kerala\'s Most Beautiful Clifftop Beach', category: 'Kerala', date: 'April 10, 2025', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', excerpt: 'Varkala is famous for its dramatic red cliffs overlooking the Arabian Sea. Here\'s a complete guide to Varkala beach including the best cafes, activities, and accommodation.' },
  { id: 11, slug: 'periyar-wildlife-sanctuary-guide', title: 'Periyar Wildlife Sanctuary: Tiger Reserve in Thekkady', category: 'Kerala', date: 'April 3, 2025', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80', excerpt: 'Periyar Wildlife Sanctuary is one of India\'s most scenic tiger reserves. Spot elephants, tigers, and exotic birds while cruising the Periyar Lake on a boat safari.' },
  { id: 12, slug: 'best-time-to-visit-kerala', title: 'Best Time to Visit Kerala: A Month-by-Month Guide', category: 'Kerala', date: 'March 28, 2025', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', excerpt: 'Kerala\'s weather varies throughout the year. Find out the best months to visit Kerala based on your travel preferences — whether you prefer festivals, monsoon magic, or sunny skies.' },
];

function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-hero">
        <motion.div className="blog-hero-content"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        >
          <h1>Travel Blog</h1>
          <p>Tips, Guides & Stories from Kerala Memory Travels</p>
        </motion.div>
      </div>

      <div className="container blog-container">
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.article key={post.id} className="blog-card"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link to={`/blog/${post.slug}`} className="blog-card-link">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span>📅 {post.date}</span>
                    <span>⏱ {post.readTime}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <span className="read-more">Read More →</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  );
}

export default Blog;
