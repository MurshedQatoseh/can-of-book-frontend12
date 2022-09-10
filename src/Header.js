import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import LoginButton from './login';
import LogoutButton from './logout';
import { Link } from "react-router-dom";

import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {

    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link"  style={{color:"white",marginRight:'20px'}} >Home</Link></NavItem>
          {isAuthenticated ? <Link to="/profile" className="nav-link"  style={{color:"white",marginRight:'20px'}}>Profile</Link>: <NavItem><LoginButton/></NavItem>}
        
        <NavItem><LogoutButton/></NavItem>
        
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default withAuth0( Header);
