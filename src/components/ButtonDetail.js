import React from 'react';
import detail from '../assets/shield-search.png';
import { CImage } from '@coreui/react';

const ButtonDetail = () => {
  return (
    <div className="buttonOut">
      <button className="buttonDetailEdit">
        <CImage className="" fluid src={detail} /> <b>Detail</b>
      </button>
    </div>
  );
};

export default ButtonDetail;
