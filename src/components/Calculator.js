import React, { Component } from 'react';
import CalculatorTitle from './CalculatorTitle';
import OutputScreen from './OutputScreen';
class Calculator extends Component {

    render() { 
        return ( 
            <div className="frame">
                <CalculatorTitle title="Calculator" />
                <div className="mainCalc">
                    <OutputScreen />
                    <div className="button-row">
                        <button className="btnaction" label= {'Clear'} />
                        <button className="btnaction" label= {'Delete'} />
                        <button className="btnaction" label= {'/'} />
                    </div>
                    <div className="button-row">
                        <button label = {9}/>
                        <button label = {8}/>
                        <button className="btnaction" label= {'+'} />
                    </div>
                    <div className="button-row">
                        <button label = {7}/>
                        <button label = {6}/>
                        <button className="btnaction" label= {'*'} />
                    </div>
                    <div className="button-row">
                        <button label = {5}/>
                        <button label = {4}/>
                        <button className="btnaction" label= {'-'} />
                    </div>
                    <div className="button-row">
                        <button label = {3}/>
                        <button label = {2}/>
                        <button className="btnaction" label= {'.'} />
                    </div>
                    <div className="button-row">
                        <button label = {1}/>
                        <button label = {0}/>
                        <button className="btnaction" label= {'='} />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Calculator;