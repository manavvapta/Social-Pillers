import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollExpandMedia from '../components/ScrollExpandMedia';
import { Link } from 'react-router-dom';
import './Projects.css';

const categories = [
  {
    id: 'reels',
    label: 'Reels',
    emoji: '🎬',
    slides: [
      { id: 1, title: 'Viral Reel', category: 'Instagram Reels', image: 'img1.jpg', description: '10M+ views reel campaign for a fashion brand.' },
      { id: 2, title: 'Product Launch', category: 'Instagram Reels', image: 'img2.jpg', description: 'Product reveal reel with cinematic transitions.' },
      { id: 3, title: 'Brand Story', category: 'Instagram Reels', image: 'img3.jpg', description: 'Emotional brand story reel with 500K reach.' },
      { id: 4, title: 'Trending Audio', category: 'Instagram Reels', image: 'img4.jpg', description: 'Trend-jacking reel that hit Explore page.' },
      { id: 5, title: 'Tutorial Reel', category: 'Instagram Reels', image: 'img1.jpg', description: 'How-to reel with 2M+ plays in 48 hours.' },
      { id: 6, title: 'Collab Reel', category: 'Instagram Reels', image: 'img2.jpg', description: 'Influencer collab reel with 300% engagement.' },
    ],
  },
  {
    id: 'posts',
    label: 'Posts',
    emoji: '🖼️',
    slides: [
      { id: 1, title: 'Feed Design', category: 'Instagram Posts', image: 'img3.jpg', description: 'Aesthetic feed layout with consistent brand theme.' },
      { id: 2, title: 'Carousel Post', category: 'Instagram Posts', image: 'img4.jpg', description: '10-slide carousel with 40K saves.' },
      { id: 3, title: 'Product Post', category: 'Instagram Posts', image: 'img1.jpg', description: 'High-converting product showcase post.' },
      { id: 4, title: 'Infographic', category: 'Instagram Posts', image: 'img2.jpg', description: 'Data-driven infographic with 15K shares.' },
      { id: 5, title: 'Quote Card', category: 'Instagram Posts', image: 'img3.jpg', description: 'Motivational series with consistent branding.' },
      { id: 6, title: 'Event Post', category: 'Instagram Posts', image: 'img4.jpg', description: 'Event announcement with 8K RSVPs.' },
    ],
  },
  {
    id: 'websites',
    label: 'Websites',
    emoji: '🌐',
    slides: [
      { id: 1, title: 'Agency Site', category: 'Web Design', image: 'img1.jpg', description: 'Full agency website with animations and CMS.' },
      { id: 2, title: 'E-Commerce', category: 'Web Design', image: 'img2.jpg', description: 'Shopify store with 3x conversion rate.' },
      { id: 3, title: 'Portfolio Site', category: 'Web Design', image: 'img3.jpg', description: 'Personal portfolio with scroll animations.' },
      { id: 4, title: 'Landing Page', category: 'Web Design', image: 'img4.jpg', description: 'High-converting landing page with 45% CTR.' },
      { id: 5, title: 'SaaS Dashboard', category: 'Web Design', image: 'img1.jpg', description: 'Clean SaaS dashboard UI with dark mode.' },
      { id: 6, title: 'Restaurant Site', category: 'Web Design', image: 'img2.jpg', description: 'Restaurant site with online booking system.' },
    ],
  },
];

const Lightbox = ({ item, onClose }) => {
  if (!item) return null;

  const getCategoryType = () => {
    if (!item.category) return 'default';
    const cat = item.category.toLowerCase();
    if (cat.includes('reel')) return 'reels';
    if (cat.includes('post')) return 'posts';
    if (cat.includes('web')) return 'websites';
    return 'default';
  };

  const categoryType = getCategoryType();

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={`lightbox-content lightbox-content-${categoryType}`}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={onClose}>✕</button>
            <img 
              src={item.image} 
              alt={item.title} 
              className={`lightbox-img lightbox-img-${categoryType}`}
            />
            <div className="lightbox-info">
              <span className="lightbox-category">{item.category}</span>
              <h3 className="lightbox-title">{item.title}</h3>
              <p className="lightbox-desc">{item.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectRow = ({ category, onCardClick }) => {
  const doubled = [...category.slides, ...category.slides];
  const isReverse = category.id === 'posts';

  return (
    <div className="project-row">
      <div className="project-row-label">
        <span className="project-row-emoji">{category.emoji}</span>
        <h3 className="project-row-title">{category.label}</h3>
        <div className="project-row-line" />
      </div>
      <div className="projects-slider-wrapper">
        <div className={`projects-slider ${isReverse ? 'projects-slider-reverse' : ''}`}>
          {doubled.map((slide, index) => (
            <div
              key={index}
              className={`project-card project-card-${category.id}`}
              onClick={() => onCardClick(slide)}
            >
              <div className="project-card-img">
                <img src={slide.image} alt={slide.title} />
                <div className="project-card-overlay">
                  <p className="project-card-desc">{slide.description}</p>
                  <span className="project-card-click">Click to expand</span>
                </div>
              </div>
              <div className="project-card-body">
                <span className="project-card-category">{slide.category}</span>
                <h3 className="project-card-title">{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsContent = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="projects-content">
      <div className="projects-content-heading">
        <p className="projects-content-subtitle">Our Work</p>
        <h2 className="projects-content-title">Featured <span>Projects</span></h2>
      </div>

      {categories.map((cat) => (
        <ProjectRow key={cat.id} category={cat} onCardClick={setSelected} />
      ))}

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default function Projects() {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <Link to="/" className="back-home-btn">← Back to Home</Link> 
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="img1.jpg"
        bgImageSrc="img2.jpg"
        title="Our Projects"
        date="Social Pillers"
        scrollToExpand="Scroll to explore"
        textBlend
      >
        <ProjectsContent />
      </ScrollExpandMedia>
    </div>
  );
}
