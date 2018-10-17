import React, { Component } from 'react';
import './App.css';
import Quote from './Components/Quote'
import GenerateQuote from './Components/GenerateQuote'

const quoteSample =
    {
    "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
    "character": "Nelson Muntz",
    "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    "characterDirection" : "Left"
    }


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newQuote : quoteSample
        };
    }

    selectQuote = () => {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
        .then(response  =>  response.json())
        .then(data  => {
            this.setState({
                newQuote :  data[0],
            });
        });
    };

    render() {

        return (
            <div className="App">
                <GenerateQuote selectQuote = {this.selectQuote}/>
                <Quote quote = {this.state.newQuote.quote} character = {this.state.newQuote.character} image = {this.state.newQuote.image} />
            </div>
        );
    }
}

export default App;
