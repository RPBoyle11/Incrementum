import React from 'react';


export default class Game extends React.Component {

  //Game modes
  //show word mode -- new word & SUBMIT BUTTON
  //show right wrong & response mode -- right/wrong response NEXT WORD button
  
  constructor(props) {

    super(props);
    this.state = {

      wordSelector: Math.floor(Math.random() * Math.floor(this.props.currentWords.length)),
      gameMode: 'newWordMode',
      gameResponse: 'Your New Word is: '

    }


  }

  //submit answer
  onSubmit(e) {
    
    e.preventDefault();

    let answer = this.input.value;


   
    //clear input field
    e.target.reset();

    
    // this.props.handleClick(this.input.value); 

    //go process answer

    //return testResults...
  
    let testResults;
 
    let theMeaning = this.props.currentWords[this.state.wordSelector].meaning;

    if(theMeaning.toLowerCase() === answer.toLowerCase()){

      testResults = true;

    }
    else{

      testResults = false;

    }

    let update_gameMode;
    let update_gameResponse;
 
    //if you get it right
    if(testResults){
      update_gameMode = 'rightMode';
      update_gameResponse = 'Great job! You got it right!';
    }

    //if you get it wrong
    else {
      update_gameMode = 'wrongMode';
      update_gameResponse = 'Nice try, but you got it wrong...';
    }
 
    this.setState({

      gameMode: update_gameMode,
      gameResponse: update_gameResponse
 
    })
  }

  //

  //Next click
  onNextClick(){
      
    //random word selector
    let newWordSelector = Math.floor(Math.random() * Math.floor(this.props.currentWords.length));

    console.log('wordSelector > ',newWordSelector);

    this.setState({

      wordSelector: newWordSelector, 
      gameMode: 'newWordMode',
      gameResponse: 'Your New Word is: '
       
    })


  }

  render(){

    //console.log(this.props.words[0].word);

    let theWord = 'Loading...';
    let theMeaning = '';
    
    if(this.props.currentWords[0] !== undefined){

      theWord = this.props.currentWords[this.state.wordSelector].word;
      theMeaning = this.props.currentWords[this.state.wordSelector].meaning;

    }
      

    //NEW WORD MODE
    if(this.state.gameMode === 'newWordMode'){

      return(
        <div>
        <h3>{this.state.gameResponse}</h3>
        <br/>
        <p> {theWord} </p>
        <br/>
        <hr/>
        <br/>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
                type="text"
                id="answer"
                ref={input => (this.input = input)}
                    /> 
        <button>SUBMIT</button>    
        </form>
         
        </div>
      );
    }

    //RIGHT MODE
    if(this.state.gameMode === 'rightMode'){

      return(
        <div>
        <h3>{this.state.gameResponse}</h3>
        <br/>
        <p> You are CORRECT, the meaning of {theWord} is {theMeaning}.</p>
        <br/>
        <hr/>
        <button onClick={(e)=>this.onNextClick()}>NEXT WORD</button>
        <br/>
         
        </div>
      );


    }

    //WRONG MODE
    if(this.state.gameMode === 'wrongMode'){

        return(
          <div>
          <h3>{this.state.gameResponse}</h3>
          <br/>
          <p>The correct meaning of {theWord} is {theMeaning}.</p>
          <br/>
          <hr/>
          <button onClick={(e)=>this.onNextClick()}>NEXT WORD</button>
          <br/>
           
          </div>
        );


      }

    }
 }






