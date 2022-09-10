import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Profile from './profile';
import Welcome from './welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {

    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Routes>

         


            <Route 
              path="/"
              element={ isAuthenticated ? <BestBooks />: <Welcome/> }
              >


              </Route>
              <Route 
               path="/profile"
              element={isAuthenticated &&<Profile/>}
            >


            </Route>
            <Route 
               path="/"
              element={!isAuthenticated &&<Welcome/>}
            >


            </Route>


            

            
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0( App) ;
