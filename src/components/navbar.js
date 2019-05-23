import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import '../styles/navbar.css';

export class Navbar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <div>
                <button onClick={() => this.logOut()}>Log out</button>
                </div>
            );
        }
        return (
            <nav className="navbar">
                <h1>Incrementum</h1>
                
            {/* <img src={} className='header-img' alt=''/>  */}
                {logOutButton}
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    
    loggedIn: state.auth.currentUser !== null
 
});

export default connect(mapStateToProps)(Navbar);
