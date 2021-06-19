import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";
import {inuser, deuser, inuserByAmount} from "./redux/user";
import "./App.css";

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment by 33
      </button>
      <h1> El número de usuarios: {user} </h1>
       <button onClick={() => dispatch(inuser())}>Incrementar</button>
       <button onClick={() => dispatch(deuser())}>Decrementar</button>
       <button onClick={() => dispatch(inuserByAmount([6,2]))}>
         Increment by 55
       </button>
    </div>
  );
}
