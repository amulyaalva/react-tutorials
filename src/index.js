import React from 'react';
import ReactDOM from 'react-dom';

// function Clock(){
//   return <h1>{new Date().toLocaleTimeString()}</h1>
// }

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={
         date:new Date()
         }
  }

  componentDidMount(){
    this.timer=  setInterval(()=>this.start(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }
        start(){
    this.setState({
      date:new Date()
    });
  }

  render(){
    return  <h1>{this.state.date.toLocaleTimeString()}</h1>
  }
}


ReactDOM.render(
  <Clock/> ,
  document.getElementById('root')
);


//setInterval(time,1000);
