import React from 'react';

export const GlassCard = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export default GlassCard;