import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchNextWord} from '../actions/words';
import {fetchCurrentWord} from '../actions/words';
import {fetchProtectedData} from '../actions/protected-data';
import Game from './game';

export class Dashboard extends React.Component {

    //FETCH CURRENT WORD
    componentDidMount() {
        this.props.dispatch(fetchCurrentWord(this.props.id));
    }
    
    render() {
        console.log(this.props.currentWord);
          
        return (
            <div className="dashboard">
                Hello {this.props.name} 
                <br/>
                <br/>
                <hr/>
                <br/>
                <Game userRefresh={this.props.currentWord} currentUser={this.props.currentUser} />
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
        id: currentUser._id,
        currentWord: state.currentWord.userRefresh,
        currentUser: state.auth.currentUser
        
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
