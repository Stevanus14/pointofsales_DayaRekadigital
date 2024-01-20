import React from 'react';
import hapus from '../assets/trash.png';
import { CImage } from '@coreui/react';

const ButtonDelete = () => {
  return (
    <div className="buttonOut">
      <button className="buttonDelete">
        <CImage className="" fluid src={hapus} />
      </button>
    </div>
  );
};

export default ButtonDelete;
