import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchNextWord} from '../actions/words';
import {fetchProtectedData} from '../actions/protected-data';
import Game from './game';

export class Dashboard extends React.Component {


    componentDidMount() {
        this.props.dispatch(fetchNextWord(this.props.id));
    }

    render() {
          
        return (
            <div className="dashboard">
                Hello {this.props.name} 
                <br/>
                <br/>
                <hr/>
                <br/>
                <Game currentWord={this.props.nextWord} />
                <br/>
                <hr/>
                 
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
        words: state.words.words,
        nextWord: state.nextWord.nextWord,
        id: currentUser._id
        
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
