import { useRef } from 'react';

export const Button = ({ text, className = "",onClick }) => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = btnRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // magnetic effect
    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const resetTransform = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = 'translate(0, 0)';
    }
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
      onClick={onClick}
      className={`
        bg-gradient-to-r from-purple-600 to-pink-600 
        hover:from-purple-700 hover:to-pink-700 
        px-8 py-3 rounded-md text-white font-semibold
        shadow-xl transition-transform duration-150 ease-out 
        neon-glow cursor-pointer will-change-transform
        ${className}
      `}
    >
      {text}
    </button>
  );
};
