import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
        else if (newProgress < 0.75) { setShowContent(false); }
      }
    };
    const handleTouchStart = (e) => setTouchStartY(e.touches[0].clientY);
    const handleTouchMove = (e) => {
      if (!touchStartY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false); e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const newProgress = Math.min(Math.max(scrollProgress + deltaY * scrollFactor, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
        else if (newProgress < 0.75) { setShowContent(false); }
        setTouchStartY(touchY);
      }
    };
    const handleTouchEnd = () => setTouchStartY(0);
    const handleScroll = () => { if (!mediaFullyExpanded) window.scrollTo(0, 0); };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);
  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div style={{ overflowX: 'hidden' }}>
      <section style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100dvh' }}>
        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100dvh' }}>
          <motion.div
            style={{ position: 'absolute', inset: 0, zIndex: 0, height: '100%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <img src={bgImageSrc} alt="Background" style={{ width: '100vw', height: '100vh', objectFit: 'cover', objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', zIndex: 10, width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100dvh', position: 'relative' }}>
              <div style={{
                position: 'absolute', zIndex: 0, top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: `${mediaWidth}px`, height: `${mediaHeight}px`,
                maxWidth: '95vw', maxHeight: '85vh',
                boxShadow: '0px 0px 50px rgba(0,0,0,0.3)', borderRadius: '12px', overflow: 'hidden',
              }}>
                {mediaType === 'video' ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }}>
                    <video src={mediaSrc} poster={posterSrc} autoPlay muted loop playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                    <motion.div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', borderRadius: '12px' }}
                      initial={{ opacity: 0.7 }} animate={{ opacity: 0.5 - scrollProgress * 0.3 }} transition={{ duration: 0.2 }} />
                  </div>
                ) : (
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <img src={mediaSrc} alt={title || 'Media'} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                    <motion.div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', borderRadius: '12px' }}
                      initial={{ opacity: 0.7 }} animate={{ opacity: 0.7 - scrollProgress * 0.3 }} transition={{ duration: 0.2 }} />
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 10, marginTop: '16px' }}>
                  {date && <p style={{ fontSize: '22px', color: '#bfdbfe', transform: `translateX(-${textTranslateX}vw)` }}>{date}</p>}
                  {scrollToExpand && <p style={{ color: '#bfdbfe', fontWeight: 500, transform: `translateX(${textTranslateX}vw)` }}>{scrollToExpand}</p>}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '16px', width: '100%', position: 'relative', zIndex: 10, flexDirection: 'column', mixBlendMode: textBlend ? 'difference' : 'normal' }}>
                <motion.h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, color: '#bfdbfe', transform: `translateX(-${textTranslateX}vw)` }}>{firstWord}</motion.h2>
                <motion.h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, color: '#bfdbfe', transform: `translateX(${textTranslateX}vw)` }}>{restOfTitle}</motion.h2>
              </div>
            </div>

            <motion.section style={{ display: 'flex', flexDirection: 'column', width: '100%',  }}
              initial={{ opacity: 0 }} animate={{ opacity: showContent ? 1 : 0 }} transition={{ duration: 0.7 }}>
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
