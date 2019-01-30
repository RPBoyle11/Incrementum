import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import { fetchWords } from '../actions/words';

import RegistrationForm from './registration-form';

export class RegistrationPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchWords());
    }
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    
    render() {
        let wordsArr;
        if(this.props.words[0] !== undefined && this.props.words[0].next === undefined) {
            wordsArr = this.props.words;
            for(let i = 0; i < this.props.words.length; i++) {
                wordsArr[i].next = i+1;
                if (i === this.props.words.length - 1) {
                    wordsArr[i].next = 0;
                }
            }
            console.log(wordsArr)
        }

        console.log(wordsArr);
        console.log(this.props.words);
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <div className="home">
                <h2>Register for Italian 5000!</h2>
                <RegistrationForm wordsArr={wordsArr}/>
                <Link to="/">Login</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    words: state.words.words
});

export default connect(mapStateToProps)(RegistrationPage);
