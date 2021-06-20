import React, { useContext } from 'react';
import '../styles/components/Success.scss';

import AppContext from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAddress';

import Map from '../components/Map';

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);

  const location = useGoogleAddress(buyer[0].address); // We get latitude and longitude for set the map point

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer.name}, Thanks for your purchase</h2>
        <span>You order will be delivered to your address in 3 days</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
