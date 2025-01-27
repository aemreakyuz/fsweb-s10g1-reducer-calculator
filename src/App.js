import React, { useReducer, useState } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer from "./reducers";
import { initialState } from "./reducers";
import {
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  totalMemory,
  changeTotal,
  clearMemory,
} from "./actions";

function App() {
  const [state, dispatchState] = useReducer(reducer, initialState);

  const incHandler = (e) => {
    dispatchState(addOne());
    //dispatchState({type: ADD_ONE})
  };

  const numberHandler = (number) => {
    dispatchState(applyNumber(number));
  };

  const opHandler = (operation) => {
    dispatchState(changeOperation(operation));
  };

  const displayHandler = (e) => {
    dispatchState(clearDisplay());
  };

  const memoryHandler = (e) => {
    dispatchState(totalMemory());
  };

  const totalHandler = (e) => {
    dispatchState(changeTotal());
  };

  const clearMemoryHandler = (e) => {
    dispatchState(clearMemory());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={memoryHandler} />
              <CalcButton value={"MR"} onClick={totalHandler} />
              <CalcButton value={"MC"} onClick={clearMemoryHandler} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => numberHandler(1)} />
              <CalcButton value={2} onClick={() => numberHandler(2)} />
              <CalcButton value={3} onClick={() => numberHandler(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => numberHandler(4)} />
              <CalcButton value={5} onClick={() => numberHandler(5)} />
              <CalcButton value={6} onClick={() => numberHandler(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => numberHandler(7)} />
              <CalcButton value={8} onClick={() => numberHandler(8)} />
              <CalcButton value={9} onClick={() => numberHandler(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => opHandler("+")} />
              <CalcButton value={"*"} onClick={() => opHandler("*")} />
              <CalcButton value={"-"} onClick={() => opHandler("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={displayHandler} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
