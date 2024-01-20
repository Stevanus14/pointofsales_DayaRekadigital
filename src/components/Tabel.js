import React from 'react';
import Table from 'react-bootstrap/Table';
import ButtonDetail from './ButtonDetail';
import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';

const Tabel = () => {
  return (
    <div>
      <Table style={{ marginLeft: '24px', marginTop: '24px' }}>
        <thead>
          <tr style={{ backgroundColor: '#FAFAFA', color: '#98949E' }}>
            <th style={{ padding: '10px 100px' }}>Customer Name</th>
            <th>Level</th>
            <th>Favorite Menu</th>
            <th>Total Transaction</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style={{ fontWeight: 'bold' }}>
          <tr style={{ textAlign: 'center', margin: '0', padding: '0' }}>
            <td>Odis Rhinehart</td>
            <td className="lvlWarga">Warga</td>
            <td>Chicken & Ribs Combo</td>
            <td>IDR 194,700</td>
            <td className="tabelButton">
              <ButtonDetail />
              <ButtonEdit />
              <ButtonDelete />
            </td>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <td>Kris Roher</td>
            <td className="lvlWarga">Warga</td>
            <td>Surf & Turf Gift Basket</td>
            <td>IDR 631,200</td>
            <td className="tabelButton">
              <ButtonDetail />
              <ButtonEdit />
              <ButtonDelete />
            </td>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <td>Serenity Fisher</td>
            <td className="lvlJuragan">Juragan</td>
            <td>Fried Chicken Dinne</td>
            <td>IDR 1,040.920</td>
            <td className="tabelButton">
              <ButtonDetail />
              <ButtonEdit />
              <ButtonDelete />
            </td>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <td>Brooklyn Warren</td>
            <td className="lvlSultan">Sultan</td>
            <td>Surf & Turf Gift Basket</td>
            <td>IDR 730,500</td>
            <td className="tabelButton">
              <ButtonDetail />
              <ButtonEdit />
              <ButtonDelete />
            </td>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <td>Franco Delort</td>
            <td className="lvlJuragan">Juragan</td>
            <td>Chicken & Ribs Combo</td>
            <td>IDR 96,000</td>
            <td className="tabelButton">
              <ButtonDetail />
              <ButtonEdit />
              <ButtonDelete />
            </td>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <td>Saul Geoghegan</td>
            <td className="lvlJuragan">Juragan</td>
            <td>Surf & Turf Gift Basket</td>
            <td>IDR 256,000</td>
            <td className="tabelButton">
              <ButtonDetail />
              <ButtonEdit />
              <ButtonDelete />
            </td>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <td>Alfredo Vetrovs</td>
            <td className="lvlJuragan">Juragan</td>
            <td>Dark & Stormy</td>
            <td>IDR 590,080</td>
            <td className="tabelButton">
              <ButtonDetail />
              <ButtonEdit />
              <ButtonDelete />
            </td>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <td>Cristofer Vetrovs</td>
            <td className="lvlKonglomerat">Konglomerat</td>
            <td>Shaking Beef Tri-Tip</td>
            <td>IDR 782,600</td>
            <td className="tabelButton">
              <ButtonDetail />
              <ButtonEdit />
              <ButtonDelete />
            </td>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <td>Calvin Steward</td>
            <td className="lvlKonglomerat">Konglomerat</td>
            <td>BBQ Rib Dinner</td>
            <td>IDR 467,500</td>
            <td className="tabelButton">
              <ButtonDetail />
              <ButtonEdit />
              <ButtonDelete />
            </td>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <td>Calvin Steward</td>
            <td className="lvlKonglomerat">Konglomerat</td>
            <td>BBQ Rib Dinner</td>
            <td>IDR 467,500</td>
            <td className="tabelButton">
              <ButtonDetail />
              <ButtonEdit />
              <ButtonDelete />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Tabel;
