import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 5,
//   };
//   //   constructor(){
//   //     super();
//   //     this.handleIncrement=this.handleIncrement.bind(this);

//   //   }
//   handleIncrement = (ide) => {
//     console.log(ide)
//     this.setState({ count: this.state.count + 1 });
//   };

//   doHandleIncrement=() =>{
//     this.handleIncrement({id:1});
//   }
//   render() {
//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button
//           onClick={this.doHandleIncrement}
//           className="btn btn-secondary btm-sm"
//         >
//           Increment
//         </button>
//       </div>
//     );
//   }

//   getBadgeClasses() {
//     let clas = "badge m-2 bg-";
//     clas += this.state.count === 0 ? "warning" : "primary";
//     return clas;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? <h1>Zero</h1> : count;
//   }
// }

// export default Counter;

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
