import React, { Component } from 'react';
import NavBar from './navBar';
import ContentGrid from './contentGrid';
import Button from './button';
import Following from './following';
import Explore from './explore';
import User from './user';

export default class App extends Component {
  constructor() {
    super();
    this.state= {
      data:[
              "http://via.placeholder.com/248x248",
              "http://via.placeholder.com/248x350", 
              "http://via.placeholder.com/248x150",
              "http://via.placeholder.com/248x200",
              "http://via.placeholder.com/248x130",
              "http://via.placeholder.com/248x248",
              "http://via.placeholder.com/248x350", 
              "http://via.placeholder.com/248x150",
              "http://via.placeholder.com/248x200",
              "http://via.placeholder.com/248x130",
              "http://via.placeholder.com/248x248",
              "http://via.placeholder.com/248x350", 
              "http://via.placeholder.com/248x150",
              "http://via.placeholder.com/248x200",
              "http://via.placeholder.com/248x130",
              "http://via.placeholder.com/248x248",
              "http://via.placeholder.com/248x350", 
              "http://via.placeholder.com/248x150",
              "http://via.placeholder.com/248x200",
              "http://via.placeholder.com/248x130",
      ],
      display: '1'
    }
  }
  f= () => {
    const i=this.state.display;
    switch (i) {
      case '1':
        return <ContentGrid data={this.state.data} />
      case '2':
        return <Following />
      case '3':
        return <Explore data={this.state.data}/>
      case '4':
        return <User data={this.state.data}/>
      default:
        console.log('switch error');
    }
  }
  callback= (x) => {
    this.setState({display:x});
    console.log('callback');
  }
  render() {
    return (
      <div className='main'>
        <NavBar callback={this.callback} />

        {this.f()}

        {/* <Button /> */}
      </div>
    );
  }
}
