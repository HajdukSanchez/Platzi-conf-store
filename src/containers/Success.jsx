import React from 'react';
import '../styles/components/Success.scss';

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Jozek, Thanks for your purchase</h2>
        <span>You order will be delivered to your address in 3 days</span>
        <div className="Success-map">Google maps</div>
      </div>
    </div>
  );
};

export default Success;
