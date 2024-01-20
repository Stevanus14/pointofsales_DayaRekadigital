import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar3() {
  return (
    <Card>
      <CardBody>
        <p className="text-muted">
          Use <code>nav-tabs-custom</code> class to create custom tabs with borders.
        </p>
        <Nav tabs className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3">
          <NavItem>
            <NavLink
              style={{ cursor: 'pointer' }}
              className={classnames({
                active: customActiveTab === '1',
              })}
              onClick={() => {
                toggleCustom('1');
              }}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: 'pointer' }}
              className={classnames({
                active: customActiveTab === '2',
              })}
              onClick={() => {
                toggleCustom('2');
              }}
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: 'pointer' }}
              className={classnames({
                active: customActiveTab === '3',
              })}
              onClick={() => {
                toggleCustom('3');
              }}
            >
              Messages
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: 'pointer' }}
              className={classnames({
                active: customActiveTab === '4',
              })}
              onClick={() => {
                toggleCustom('4');
              }}
            >
              Settings
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={customActiveTab} className="text-muted">
          <TabPane tabId="1" id="home1">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <i className="ri-checkbox-multiple-blank-fill text-success"></i>
              </div>
              <div className="flex-grow-1 ms-2">
                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche
                high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR.
                <div className="mt-2">
                  <Link to="#" className="btn btn-sm btn-soft-primary">
                    Read More <i className="ri-arrow-right-line ms-1 align-middle"></i>
                  </Link>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <i className="ri-checkbox-multiple-blank-fill text-success"></i>
              </div>
              <div className="flex-grow-1 ms-2">
                When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself
                down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown.
                <div className="mt-2">
                  <Link to="#" className="btn btn-sm btn-soft-primary">
                    Read More <i className="ri-arrow-right-line ms-1 align-middle"></i>
                  </Link>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <i className="ri-checkbox-multiple-blank-fill text-success"></i>
              </div>
              <div className="flex-grow-1 ms-2">
                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore
                carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                <div className="mt-2">
                  <Link to="#" className="btn btn-sm btn-soft-primary">
                    Read More <i className="ri-arrow-right-line ms-1 align-middle"></i>
                  </Link>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="4">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <i className="ri-checkbox-multiple-blank-fill text-success"></i>
              </div>
              <div className="flex-grow-1 ms-2">
                when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could
                impress upon paper all that is living so full and warm within me, that it might be the.
                <div className="mt-2">
                  <Link to="#" className="btn btn-sm btn-soft-primary">
                    Read More <i className="ri-arrow-right-line ms-1 align-middle"></i>
                  </Link>
                </div>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
}

export default Navbar3;
