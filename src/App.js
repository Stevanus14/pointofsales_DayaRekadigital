import './App.css';
import ButtonAnalys from './components/ButtonAnalys';
import ContentHeader from './components/ContentHeader';
import MenuBar from './components/MenuBar';
import MenuSidebar from './components/MenuSidebar';
import Table from './components/Tabel';
import { CImage } from '@coreui/react';
import vector from '../src/assets/Vector.png';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="sidebar">
          <MenuSidebar />
        </div>

        <div className="container__kanan">
          <div className="header">
            <div>
              <ContentHeader />
            </div>
            <div>
              <MenuBar />
            </div>
            <div></div>
          </div>

          <div className="content">
            <div className="kiri">
              <div className="card__customer">
                <div className="textCard">
                  <h1>Customer</h1>
                  <p style={{ width: '55%' }}>On this menu you will be able to create, edit, and also delete the customer. Also you can manage it easily.</p>
                </div>
              </div>
              <div>
                <Table />
              </div>
            </div>

            <div className="kanan">
              <div className="card__analis">
                <h3 style={{ width: '75%', padding: '16px' }}>See analytics of the Customer Clearly</h3>
                <ButtonAnalys />
              </div>
              <div className="card__makanan">
                <div className="judulCard">
                  <p style={{ fontSize: '30px', padding: '0px', margin: '0px' }}>Top Menu</p>
                  <p style={{ color: '#F17300', fontSize: '30px', padding: '0px', margin: '0px' }}>
                    <b>This Week</b>
                  </p>
                </div>
                <p style={{ color: '#98949E' }}>10 - 12 Agustus 2023</p>
                <div className="makanan">
                  <p style={{ fontSize: '15px', padding: '0px', margin: '0px' }}>
                    <b>
                      Nasi Goreng Jamur <br />
                      Special Resto Pak Min
                    </b>
                  </p>
                </div>
                <p style={{ color: '#98949E' }}>2. Tongseng Sapi Gurih</p>
                <p style={{ color: '#98949E' }}>3. Nasi Gudeg Telur Ceker</p>
                <p style={{ color: '#98949E' }}>4. Nasi Ayam serundeng</p>
                <p style={{ color: '#98949E' }}>5. Nasi Goreng Seafood</p>
                <CImage className="vector" fluid src={vector} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
