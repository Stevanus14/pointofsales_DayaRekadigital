import React from 'react';

const MenuBar = () => {
  return (
    <div className="menu">
      <div className="container__Cust">
        <h3 style={{ color: '#5D5FEF' }}>Customer</h3>
      </div>
      <div className="containerPromoVoucher">
        <h3 style={{ color: '#98949E' }}>Promo</h3>
      </div>
      <div className="containerPromoVoucher">
        <h3 style={{ color: '#98949E' }}>Voucher</h3>
      </div>
    </div>
  );
};

export default MenuBar;
