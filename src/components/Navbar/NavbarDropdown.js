import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarDropdown(props) {
  const { title, expand, items } = props;
  return (
    <NavDropdown
      className="nav-dropdown"
      title={title}
      id={`offcanvasNavbarDropdown-expand-${expand}`}
    >
      {items.map((item) => {
        return <NavDropdown.Item href="#action3">{item}</NavDropdown.Item>;
      })}
    </NavDropdown>
  );
}
