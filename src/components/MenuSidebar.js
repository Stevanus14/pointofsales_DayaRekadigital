import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import dashboardlogo from '../assets/dahsboardlogo.png';
import batrai from '../assets/battery-full.png';
import twouser from '../assets/profile-2user.png';
import reserve from '../assets/reserve.png';
import mouse from '../assets/mouse-square.png';
import documentNormal from '../assets/document-normal.png';
import userSquare from '../assets/user-square.png';
import candle from '../assets/candle.png';
import cart from '../assets/shopping-cart.png';
import truck from '../assets/truck.png';
import logo from '../assets/logo.png';
import foto from '../assets/Foto.png';
import badges from '../assets/Badges.png';
import Button from './Button';
import { CImage } from '@coreui/react';

const MenuSidebar = () => {
  return (
    <div className="container__sidebar">
      <div>
        <Sidebar className="sidebar">
          <div>
            <CImage className="gambarLogo" fluid src={logo} />
          </div>
          <Menu className="card__menu">
            <h1 className="text">Menu</h1>
            <MenuItem className="textMenu">
              {' '}
              <CImage className="cimage" fluid src={dashboardlogo} /> Documentation <CImage className="badges" fluid src={badges} />
            </MenuItem>
            <MenuItem className="textMenu">
              <CImage className="cimage" fluid src={batrai} /> Stock{' '}
            </MenuItem>
            <MenuItem className="customer">
              <CImage className="cimage" fluid src={twouser} /> Customer{' '}
            </MenuItem>
            <MenuItem className="textMenu">
              <CImage className="cimage" fluid src={reserve} /> Restaurant{' '}
            </MenuItem>
            <MenuItem className="textMenu">
              <CImage className="cimage" fluid src={mouse} /> Design{' '}
            </MenuItem>
            <MenuItem className="textMenu">
              <CImage className="cimage" fluid src={documentNormal} /> Report{' '}
            </MenuItem>
            <MenuItem className="textMenu">
              <CImage className="cimage" fluid src={userSquare} /> Role & Admin{' '}
            </MenuItem>
            <MenuItem className="textMenu">
              <CImage className="cimage" fluid src={candle} /> Settings{' '}
            </MenuItem>
            <h1 className="text">Integration</h1>
            <MenuItem className="textMenu">
              <CImage className="cimage" fluid src={cart} /> Stock{' '}
            </MenuItem>
            <MenuItem className="textMenu">
              <CImage className="cimage" fluid src={truck} /> Supply{' '}
            </MenuItem>
          </Menu>

          <div className="bottomCard">
            <div className="userCard">
              <div>
                <CImage className="gambar" fluid src={foto} />
              </div>
              <div>
                <p style={{ padding: '0px', margin: '0px', fontWeight: 'bold' }}>Savvanah N</p>
                <p style={{ padding: '0px', margin: '0px', color: '98949E', fontSize: '11px' }}>Food Quality Manager</p>
              </div>
            </div>

            <div>
              <Button />
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default MenuSidebar;
