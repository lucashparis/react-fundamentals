import {Component} from 'react'

class Counter extends Component{

    state = {
        number: this.props.initialNumber || 0,
        step: this.props.initialStep || 5,

    };

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step
        });
    }
    
    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        });
    }

    setStep = (e) => {
        this.setState({
            step: +e.target.value,
        });
    }

    render(){
        return(
            <div>
                <h2>Counter</h2>
                <h3>{this.state.number}</h3>
                <div>
                    <label htmlFor="stepInput"></label>
                    <input id='step' type="number" 
                        value={this.state.step} onChange={this.setStep}
                    />
                </div>
                <button onClick={this.dec}> - </button>
                <button onClick={this.inc}> + </button>
            </div>
        );
    }
}

export default Counter;