import React, { Component } from 'react';

class Reloj extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
           this.update() 
        }, 1000);    
    }

    componentWillMount() {
        clearInterval(this.timerID);   
    }

    update(){
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <>
                <div>
                    <h4>Hora Actual: {this.state.date.toLocaleTimeString()}</h4>
                </div>
            </>
        );
    }

}

export default Reloj;