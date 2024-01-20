import React from 'react';
import edit from '../assets/edit-2.png';
import { CImage } from '@coreui/react';

const ButtonEdit = () => {
  return (
    <div className="buttonOut">
      <button className="buttonDetailEdit">
        <CImage className="" fluid src={edit} />
      </button>
    </div>
  );
};

export default ButtonEdit;
