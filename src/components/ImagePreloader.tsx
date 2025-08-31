import { useEffect } from 'react';

// All hero images that need to be preloaded
const heroImages = [
  '/src/assets/hvac-hero.jpg',
  '/src/assets/products-hero-bg.jpg',
  '/src/assets/inverter-split-ac.jpg',
  '/src/assets/split-ac.jpg',
  '/src/assets/cassette-ac.jpg',
  '/src/assets/window-ac.jpg',
  '/src/assets/floor-standing-ac.jpg',
  '/src/assets/vrv-system.jpg',
  '/src/assets/solar-water-heater.jpg',
  '/src/assets/water-cooler.jpg',
  '/src/assets/portable-ac.jpg',
  '/src/assets/air-purifier.jpg',
  '/src/assets/alkaline-ro.jpg',
  '/src/assets/ahu-system.jpg',
  '/src/assets/chiller-system.jpg',
  '/src/assets/cold-room.jpg',
  '/src/assets/ductable-ac.jpg',
  '/src/assets/heat-pump.jpg',
  '/src/assets/ventilation-hrv.jpg'
];

const ImagePreloader = () => {
  useEffect(() => {
    // Preload all hero images for instant loading
    const preloadImages = () => {
      heroImages.forEach((src) => {
        const img = new Image();
        img.src = src;
        // Set high priority for better caching
        img.loading = 'eager';
        img.fetchPriority = 'high';
      });
    };

    // Small delay to not block initial page load
    const timer = setTimeout(preloadImages, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default ImagePreloader;