import { Nav, Button } from 'react-bootstrap';

const SideBar = props => {
  const sidebarClass = props.isOpen ? "open" : "";
  return (
    <Nav className={`sidebar ${sidebarClass}`}>
        <Button onClick={props.toggleSidebar} className={`sidebar-toggle ${sidebarClass}`}>Liste Katas</Button>
        {props.kataList.map((kata, index) => 
            <Nav.Link key={index} onClick={props.toggleSidebar} href={`#${props.getTitle(kata)}`}>{props.getTitle(kata)}</Nav.Link>
        )}
    </Nav>
  );
}

export default SideBar;
