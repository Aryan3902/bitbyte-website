import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarDropdown(props) {
  const { title, expand, items, classAdd } = props;
  return (
    <NavDropdown
      className={'nav-dropdown mt-md-4' + classAdd}
      title={title}
      id={`offcanvasNavbarDropdown-expand-${expand}`}
    >
      {items.map((item) => {
        return <NavDropdown.Item href="#action3">{item}</NavDropdown.Item>;
      })}
    </NavDropdown>
  );
}
