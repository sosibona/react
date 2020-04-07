import React, { Component } from "react";
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';


class Page extends Component {
  state = {
    userData: {
      firstName: "Tom",
      lastName: "Jerry",
    },
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      }
    });
  };
  render () {
    const {userData} = this.state;
    return (
      <div className="page">
        <h1 className="title">Hello, {userData.firstName} {userData.lastName}</h1>
        <main className="content">  
          <ShoppingCart userName={this.state.userData.firstName}/>
          <Profile userData={this.state.userData} handleChange={this.handleChange}/>
        </main>
      </div>
    )
  }
}

export default Page;
