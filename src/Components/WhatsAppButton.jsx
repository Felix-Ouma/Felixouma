import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '+254115888327'; 
  const message = 'Hey Felix, I am willing to work together';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="24px"
        height="24px"
      >
        <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 1.78.46 3.46 1.34 4.96L2 22l5.1-1.32c1.46.81 3.12 1.26 4.9 1.26 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.18c-1.5 0-2.98-.4-4.29-1.16l-.31-.18-3.02.78.78-2.96-.2-.33C4.4 13.98 4 12.52 4 11c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.52-6.53c-.25-.12-1.47-.73-1.7-.82-.23-.08-.4-.12-.57.12-.17.25-.65.82-.8.98-.15.17-.3.2-.55.08-.25-.12-1.05-.39-2-1.26-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.3.37-.45.12-.15.16-.25.23-.42.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.87-.2-.49-.4-.42-.57-.42-.15 0-.31-.02-.48-.02-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.12.17 1.76 2.66 4.28 3.73.6.25 1.06.4 1.42.51.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.67-1.18.2-.58.2-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
      </svg>
    </button>
  );
};

const buttonStyle = {
  position: 'fixed', // Fixed positioning
  bottom: '20px', // 20px from the bottom of the screen
  right: '20px', // 20px from the right of the screen
  width: '60px',
  height: '60px',
  backgroundColor: '#25D366',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional shadow for better visibility
};

export default WhatsAppButton;
