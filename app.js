import React, { Component } from 'react';
import { render } from 'react-dom';
import PassTo from './passto';

function Greeting(){
  return(
    <div>Hi World</div>
  )
}

function Main(){
  return(
      <PassTo c={<Greeting/>}/>
  )
}

render(<Main/>, document.getElementById('root'));
