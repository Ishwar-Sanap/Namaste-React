import React from "react";

/* 
class based component
-   You define a class that extends React.Component.
-   There should be render() method define in class that returns JSX.
-   Inside constructor(pros)  props are recieved then, 
-   super(props) initializes the parent class and used to access this inside the constructor
-   Props are accessed via this.props.
*/

class UserClass extends React.Component {
  constructor(props) {
    super(props); // call parent class (React.Component) constructor.
    //console.log(this);
    // console.log(this.props.name + "constructor ");
    //All states of this component are stored inside this.state object.
    this.state = {
      count: 0,
      userData: {
        name: "xxx",
        bio: "xxx",
        location: "xxx",
      },
    };
  }

  //Called immediately after a component is mounted/Rendered
  //Only once called after initial render.. so used to to API calls.
  async componentDidMount() {
    // console.log(this.props.name + "componentDidMount ");

    const resp = await fetch("https://api.github.com/users/Ishwar-Sanap");
    const data = await resp.json();
    console.log("Github data", data);

    //Updating state of user data..
    this.setState({
      userData: data,
    });

    // this.timer = setInterval(() => {
    //   console.log("Calling in intervals..");
    // }, 1000);

  }

  //It will be called when componet re-render due the state updates
  componentDidUpdate() {
    console.log("componentDidUpdate called..");
  }

  //It will be called when component removed from real dom.
  //Used to cleanup the resources if there are like : setIntervals() , setTimeOut()
  componentWillUnmount() {
    console.log("User Component Unmount..");
    // clearInterval(this.timer)
    //we have to clear intervals when component unmount else, interval will run forever...
  }

  render() {
    console.log(this.props.name + "render called");
    const { count, userData } = this.state;
    return (
      <div className="user-info">
        <h2>{userData.name}</h2>
        <p>{userData.bio}</p>
        <p>{userData.location}</p>

        <div className="user-action-container">
          <span>Count : {count}</span>
          <button
            className="btn"
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increase
          </button>
          <button
            className="btn "
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
              });
            }}
          >
            Decrease
          </button>
        </div>
      </div>
    );
  }
}

export default UserClass;

/*
Class Componet LifeCycle method

1. Constructor call
2. render() called with dummy data
3. componentDidMount() called and data from API is fetched
4. Updating state of user data get from API
5. render() called with API data
5. componentDidUpdate() called
6. componentWillUnmount() called

*/
