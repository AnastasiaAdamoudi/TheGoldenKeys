import { contactIcons } from '../../../data/contact-icons';

const FloatingContactIcons = () => {
  return (
    <div className="fixed bottom-10 left-0 z-50 flex flex-col items-end gap-2 p-4">
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
  )
}

export default FloatingContactIcons;
