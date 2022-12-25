import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavItems from './Navbardata';
import Logo from '../../assets-old/images/cropped-bitbyteindia-e1569401953174.png';
import Dropdown from './NavbarDropdown';
import ButtonCustom from '../Basics/buttonComponent';

function NavbarMain() {
  const expand = 'md';
  return (
    <>
      {
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand href="#">
              <img src={Logo} alt="Logo" width="120px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={Logo} alt="Logo" width="120px" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 text-light">
                  {NavItems.map((Item) => {
                    const { title, items } = Item;
                    return items.length === 0 ? (
                      <Nav.Link className="text-light" href="">
                        {title}
                      </Nav.Link>
                    ) : (
                      <Dropdown title={title} items={items} expand />
                    );
                  })}
                </Nav>
                <ButtonCustom
                  content="GET STARTED WITH US"
                  color="#FF8C00"
                  isGlow={false}
                />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      }
    </>
  );
}

export default NavbarMain;
