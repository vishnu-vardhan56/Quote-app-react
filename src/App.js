import React, { Component } from 'react'
import axios from 'axios';
import './App.css';

class App extends Component {
    state = { advice : '' };

    componentDidMount(){
        this.fetchQuote();
    }

    fetchQuote = () =>{
        
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip;
            this.setState({  advice  });
        })
        .catch((error) => {
            console.log(error);
        })
    }

  render() {
    const { advice } = this.state;
    return (
      <div className='app'>
        <div className='design'>
            <h1 className='heading'>{advice}</h1>
            <button className='button' onClick={this.fetchQuote}>
               <span>GIVE ME QUOTE</span> 
            </button>
        </div>
       
      </div>
    )
  }
}

export default App;