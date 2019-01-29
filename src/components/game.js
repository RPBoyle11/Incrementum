import React from 'react';


export default class Game extends React.Component {

  //Game modes
  //show word mode -- new word & SUBMIT BUTTON
  //show right wrong & response mode -- right/wrong response NEXT WORD button
  
  constructor(props) {

    super(props);
    this.state = {

      gameMode: 'newWordMode',
      gameResponse: 'Your New Word is: '

    }


  }

  //submit answer
  onSubmit(e) {
    
    e.preventDefault();
   
    //clear input field
    e.target.reset();

    
    // this.props.handleClick(this.input.value); 

    //go process answer

    //return testResults...


    let testResults = true;
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

    this.setState({

      gameMode: 'newWordMode',
      gameResponse: 'Your New Word is: '
       
    })


  }

  render(){

    //NEW WORD MODE
    if(this.state.gameMode === 'newWordMode'){

      return(
        <div>
        <h3>{this.state.gameResponse}</h3>
        <br/>
        <p> {this.props.currentWord} </p>
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
        <p> {this.props.currentWord} means show answer</p>
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
          <p> {this.props.currentWord} means show answer</p>
          <br/>
          <hr/>
          <button onClick={(e)=>this.onNextClick()}>NEXT WORD</button>
          <br/>
           
          </div>
        );


      }

    }
 }






