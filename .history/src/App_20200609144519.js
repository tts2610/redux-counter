import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <Form.Group>
        <Form.Control size="lg" type="text" placeholder="Large text" />
      </Form.Group>
    </div>
  );
}

export default App;
