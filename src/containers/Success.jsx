import React, { useContext } from 'react';
import '../styles/components/Success.scss';

import AppContext from '../context/AppContext';

import Map from '../components/Map';

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer.name}, Thanks for your purchase</h2>
        <span>You order will be delivered to your address in 3 days</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Success;
