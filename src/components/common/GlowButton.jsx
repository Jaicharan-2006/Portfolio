import React from 'react';

export const GlowButton = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};

export default GlowButton;