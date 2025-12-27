import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Calling in intervals..");
    }, 1000);

    //Unmounting phase in functional component..
    // cleanup logic
    return () => {
      console.log("useEffect return..");
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-info">
      {console.log("jsx user..")}
      <h3>
        {name} {"(Function component)"}
      </h3>
      <p>{location}</p>
      <p> {name.split(" ")[0]}@gmail.com</p>
      <div className="user-action-container">
        <span>Count : {count}</span>
        <button
          className="btn"
          onClick={() => {
            setCount((prev) => {
              console.log(prev + 1);
              return prev + 1;
            });
          }}
        >
          Increase
        </button>
        <button className="btn" onClick={() => setCount((prev) => prev - 1)}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default User;
