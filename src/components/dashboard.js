import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchWords} from '../actions/words';
import {fetchProtectedData} from '../actions/protected-data';
import Game from './game';

export class Dashboard extends React.Component {

    

    componentDidMount() {
        this.props.dispatch(fetchWords());
    }

    // processAnswer(userAnswer) {

    //     console.log('Answer is at processAnswer: ',userAnswer);

    //     //compare userAnswer with this.props.answer
 
    // }
 

    render() {
        //console.log(this.props.words[0].word);

        // let currentWord = 'Loading...';

        // let wordSelector = 0;
         

        // if(this.props.words[0] !== undefined){

        //     //random word selector
        //     wordSelector = Math.floor(Math.random() * Math.floor(this.props.words.length));

        //     console.log('wordSelector > ',wordSelector);

        //     currentWord = this.props.words[wordSelector];

        //     console.log('currentWord ',currentWord);
        //     console.log('this.props.words ',this.props.words);
            
        // }
          
        return (
            <div className="dashboard">
                Hello {this.props.name} 
                <br/>
                <br/>
                <hr/>
                <br/>
                <Game 
                // currentWord={currentWord}
                currentWords={this.props.words} 
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
        protectedData: state.protectedData.data,
        words: state.words.words
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
