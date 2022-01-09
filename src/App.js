import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

function App() {

  const myState = useSelector(state => state.changeNumber);
  const dispatch = useDispatch();

  return (

    <div className="App">
      <div className="flex-1">
        <h1 className="head-1">Learning Redux</h1>
      </div>
        <img id="logo" src="images/redux.svg" alt="redux" />
        <div className="flex-box">
            <button className="btn-action" title="increment" 
              onClick={() => dispatch(decNumber())}>-</button>
            {/* <input type="number" name="number" id="number" value={myState} /> */}
            <h2 id="number">{myState}</h2>
            <button className="btn-action" title="decrement" 
              onClick={() => dispatch(incNumber())}>+</button>
        </div>
        <h2 className="project">
          <a id="link" href="https://github.com/aniket-6234/first-redux-app">first-redux-app</a>
        </h2>

    </div>
  );
}

export default App;
