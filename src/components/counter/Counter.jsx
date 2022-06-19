import {Component} from 'react'
import Buttons from './Buttons';
import Display from './Display';
import StepForm from './StepForm';

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

    setStep = (newStep) => {
        this.setState({
            step: newStep,
        });
    }

    render(){
        return(
            <div>
                <h2>Counter</h2>
                <Display number={this.state.number}></Display>
                <StepForm 
                    step={this.state.step} 
                    setStep={this.setStep} 
                >
                </StepForm>
                <Buttons inc={this.inc} dec={this.dec}></Buttons>
            </div>
        );
    }
}

export default Counter;