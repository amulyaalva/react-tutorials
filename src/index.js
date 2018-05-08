import React from 'react';
import ReactDOM from 'react-dom';

function Cartoon(props){
  return <h1>Hello, {props.name} on {props.show}</h1>
}

function Show(){
  return <div>
<Cartoon name="pikachu" show="pokeman"/>
<Cartoon name="Barbie" show="DreamHouse"/>
  </div>
}
// class Cartoon extends React.Component{
//   render(){
//     return <h1>My name is {this.props.name}</h1>
//
//   }
// }

   ReactDOM.render(
     <Show/> ,
     document.getElementById('root')
   );
