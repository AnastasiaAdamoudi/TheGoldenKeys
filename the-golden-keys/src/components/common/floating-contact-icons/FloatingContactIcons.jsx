import { useEffect, useRef } from 'react';
import { contactIcons } from '../../../data/contact-icons';

const FloatingContactIcons = () => {
  const floatingIconsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const iconContainer = floatingIconsRef.current;
      if (iconContainer) {
        const windowHeight = window.innerHeight;
        const containerHeight = iconContainer.offsetHeight;
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const containerTop = scrollPosition + (windowHeight - containerHeight) / 2;
        iconContainer.style.top = `${containerTop}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={floatingIconsRef}
      className="fixed left-4 z-10 flex flex-col items-start gap-2 p-4"
      style={{ top: '50%', transform: 'translateY(-50%)' }}
    >
      {contactIcons.map((icon) => (
        <a
          key={icon.alt}
          href={icon.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center text-dark w-12 h-12 hover:opacity-80 hover:cursor-pointer"
        >
          <img
            src={icon.icon}
            alt={icon.alt}
            className="w-10 h-auto object-contain hover:w-12"
          />
        </a>
      ))}
    </div>
  );
};

export default FloatingContactIcons;