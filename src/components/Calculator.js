import React, { Component } from 'react';
import CalculatorTitle from './CalculatorTitle';
import OutputScreen from './OutputScreen';
class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			answer: '',
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
        //debugger;
		const value = event.target.value;
		switch (value) {
			case '=': {
				if (this.state.question !== '') {
					var ans = '';
					try {
						ans = eval(this.state.question);
					} catch (err) {
						this.setState({ answer: 'Math Error' });
					}
					if (ans === undefined) {
						this.setState({ answer: 'Math Error' });
					} else {
						this.setState({ answer: ans, question: this.state.question });
					}
				}
				break;
			}
			case 'Delete': {
				var str = this.state.question;
				str = str.substr(0, str.length - 1);
				this.setState({ question: str });
				break;
			}
			case 'Clear': {
				this.setState({ question: '', answer: '' });
				break;
			}
			default: {
				this.setState({ question: (this.state.question += value) });
				break;
			}
		}
	}

	render() {
		return (
			<div className="frame">
				<CalculatorTitle title="Calculator" />
				<div className="mainCalc">
					<OutputScreen question={this.state.question} answer={this.state.answer} />
					<div className="button-row">
						<button className="btnaction" value={'Clear'} onClick={this.handleClick}>Clear </button>
						<button className="btnaction" value={'Delete'} onClick={this.handleClick}>Delete </button>
						<button className="btnaction" value={'/'} onClick={this.handleClick}>/</button>
					</div>
					<div className="button-row">
						<button value= '9' onClick={this.handleClick}>9 </button>
						<button value='8' onClick={this.handleClick}>8 </button>
						<button className="btnaction" value={'+'} onClick = {this.handleClick}>+</button>
					</div>
					<div className="button-row">
						<button value={'7'} onClick = {this.handleClick} >7</button>
						<button value={'6'}  onClick = {this.handleClick}> 6 </button>
						<button className="btnaction" value={'*'} onClick = {this.handleClick}> * </button>
					</div>
					<div className="button-row">
						<button value={5} onClick = {this.handleClick} >5 </button>
						<button value={4} onClick = {this.handleClick} >4 </button>
						<button className="btnaction" value={'-'} onClick = {this.handleClick} > - </button>
					</div>
					<div className="button-row">
						<button value={3} onClick = {this.handleClick} >3 </button>
						<button value={2} onClick = {this.handleClick} >2 </button>
						<button className="btnaction" value={'.'} onClick = {this.handleClick} > . </button>
					</div>
					<div className="button-row">
						<button value={1} onClick = {this.handleClick} >1 </button>
						<button value={0} onClick = {this.handleClick} >0 </button>
						<button className="btnaction" value={'='} onClick = {this.handleClick}> = </button>
					</div>
				</div>
			</div>
		);
	}
}

export default Calculator;
