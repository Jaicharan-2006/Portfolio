import React from 'react';

export const NeuCard = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export default NeuCard;