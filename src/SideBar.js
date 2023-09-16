import React from "react";
import { Nav, Button } from 'react-bootstrap';

const SideBar = props => {
  const sidebarClass = props.isOpen ? "open" : "";
  return (
    <Nav className={`sidebar ${sidebarClass}`}>
        <Button onClick={props.toggleSidebar} className={`sidebar-toggle ${sidebarClass}`}>Liste Katas</Button>
        {props.kataList.map(kata => 
            <Nav.Link style={{color: "#fff"}} onClick={props.toggleSidebar} href={`#${kata.name}`}>{kata.name}</Nav.Link>
        )}
    </Nav>
  );
}

export default SideBar;
