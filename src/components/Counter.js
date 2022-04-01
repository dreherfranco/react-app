import { useDispatch, useSelector } from "react-redux";
import { add, add5, reset, substract, substract5 } from "../actions/counterActions";

export default function Counter(){
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className="container-fluid p-4">
            <h1>Contador con React-Redux</h1>
            <div>
                <button className="btn btn-warning m-2" onClick={()=> dispatch(substract())}>-</button>
                <button className="btn btn-warning m-2" onClick={()=> dispatch(substract5())}>-5</button>
                <button className="btn btn-secondary m-2" onClick={()=> dispatch(reset())}>0</button>
                <button className="btn btn-primary m-2" onClick={()=> dispatch(add())}>+</button>
                <button className="btn btn-primary m-2" onClick={()=> dispatch(add5())}>+5</button>
                <span className="alert alert-primary">Contador: {state.counter}</span>
            </div>
        </div>
    );
}