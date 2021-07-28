import React , {useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";
import {inuser, deuser, inuserByAmount} from "./redux/user";
import { deproducto, inproducto, nameproducto } from "./redux/producto";
import "./App.css";


export default function App() {
  const { count } = useSelector((state) => state.counter);
  const { user } = useSelector((state) => state.user);
  const { cantidad } = useSelector((state) => state.producto);
  const { name } = useSelector((state) => state.producto);

  const dispatch = useDispatch();

  const [textOne, setTextOne] = useState('')
  const [textTwo, setTextTwo] = useState('')

  const handleInputOne = (e)=>{
    setTextOne(e.target.value)   
  } 
  const handleInputTwo = (e)=>{
    setTextTwo(e.target.value)   
  } 
  
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
       Var 1: <input type="text" value={textOne} onChange={handleInputOne}/>
       Var 2: <input type="text" value={textTwo} onChange={handleInputTwo}/>
       <button onClick={() => dispatch(inuserByAmount([textOne,textTwo]))}>
         Increment by 55
       </button>

       <h1> El número de productos: {cantidad} y el nombre es: {name} </h1>
       <button onClick={() => dispatch(inproducto())}>Incrementar</button>
       <button onClick={() => dispatch(deproducto())}>Decrementar</button>  
       <button onClick={() => dispatch(nameproducto('Grandes'))}>Dame el Nombre</button>
       
    </div>
  );   
}
