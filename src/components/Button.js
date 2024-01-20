import React from 'react';
import logout from '../assets/logout.png';
import { CImage } from '@coreui/react';

const Button = () => {
  return (
    <div className="buttonOut">
      <button className="button">
        <CImage className="logoOut" fluid src={logout} /> <b>Logout</b>
      </button>
    </div>
  );
};

export default Button;
