import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import Game from './game';

export class Dashboard extends React.Component {



    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    // processAnswer(userAnswer) {

    //     console.log('Answer is at processAnswer: ',userAnswer);

    //     //compare userAnswer with this.props.answer
 
    // }
 

    render() {

        let tempWord = 'placeholder word';
        let tempResults = true;

        return (
            <div className="dashboard">
                Hello {this.props.name} 
                <br/>
                <br/>
                <hr/>
                <br/>
                <Game 
                currentWord={tempWord} 
                // handleClick={(answer)=>this.processAnswer(answer)}
                 
                />
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
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
