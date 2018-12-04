import React from "react";
import { useContext } from "react";
import { UserContext } from "./contexts/user/userContext";
import { CountContext } from "./contexts/count/counterContext";
import "./app.css";

function User(){
    const {user, decreaseAge, increaseAge} = useContext(UserContext);

    return <div className="user">
        <div className="infor">
            <span className="age">{user.age}</span>
            <span className="name">{user.name}</span>
        </div>
        <div className="control">
            <button onClick={()=> decreaseAge()}>Decrement</button>
            <button onClick={()=> increaseAge()}>Increment</button>
        </div>
    </div>
}

function Counter(){
    const {count, decreaseCount, increaseCount} = useContext(CountContext);

    return <div className="counter">
        <div className="infor">
            <span className="count">{count}</span>
        </div>
        <div className="control">
            <button onClick={()=> decreaseCount()}>Decrement</button>
            <button onClick={()=> increaseCount()}>Increment</button>
        </div>
    </div>
}


function App() {
    return <div className="app">
        <User />
        <Counter />
    </div>
}

export default App; 