import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import italian5000 from '../images/header_stuff_01.jpg';

export class HeaderBar extends React.Component {
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
            <div className="header-bar">
            <img src={italian5000} alt='italian5000'/> 
                 
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    
    loggedIn: state.auth.currentUser !== null
 
});

export default connect(mapStateToProps)(HeaderBar);
