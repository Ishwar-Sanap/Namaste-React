import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props)
    // console.log("Parent constructor");
  }

  //Called immediately after a component is mounted/Rendered
  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    // console.log("Parent render");
    return (
      <div className="main-container">
        <h1>About us page</h1>
        <UserClass name={"Child1 "} location={"Darjeeling"} />
        
      </div>
    );
  }
}

export default About;

/*
******************* Single Child COMPONENTS *******************

<UserClass name={"Child1 "} location={"Darjeeling"} />

Parent constructor
Parent render

Child1 constructor 
Child1 render called

Child1 componentDidMount 
Parent componentDidMount
*/

/* 
******************* MULTIPLE CHILDREN COMPONENTS *******************

  <UserClass name={"Child1 "} location={"Darjeeling"} />
  <UserClass name={"Child2 "} location={"Dubai"} />

NOTE : When There is rendering of multiple child class Component then render method is called, but 
componentDidMount() will be called later when all children are render
because after rendering there is commit phase in react where changes updates are applied to Real DOM 
and Updating real dom is critical phase react do it in Batch for optimized performance...

Parent constructor
Parent render

Child1 constructor 
Child1 render called

Child2 constructor 
Child2 render called

Child1 componentDidMount 
Child2 componentDidMount 
Parent componentDidMount

*/