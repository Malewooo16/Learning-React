import React, { Component } from "react";


class Counter extends Component {
   
   formatCount(){
    let {value: count}= this.props.counter;
    return count===0 ? "Zero" : count;
   }
   getBadgeClasses(){
    let classes="badge m-2 bg-";
    classes+=this.props.counter.value===0 ? "warning":"primary";
    return classes;
   }
  render() { 
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-sm btn-secondary"> Increment </button>
        <button onClick={()=>this.props.onDelete (this.props.counter.id)}className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
}
 
export default Counter;
