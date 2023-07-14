import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  //   constructor(){
  //     super();
  //     this.handleIncrement=this.handleIncrement.bind(this);

  //   }
  handleIncrement = (ide) => {
    console.log(ide)
    this.setState({ count: this.state.count + 1 });
  };

  doHandleIncrement=() =>{
    this.handleIncrement({id:1});
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btm-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let clas = "badge m-2 bg-";
    clas += this.state.count === 0 ? "warning" : "primary";
    return clas;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
