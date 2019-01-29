import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchWords} from '../actions/words';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchWords());
    }

    render() {
        console.log(this.props.words);
        return (
            <div className="dashboard">
                Hello {this.props.name} 
                <br/>
                <br/>
                <br/>
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        words: state.words.words
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
