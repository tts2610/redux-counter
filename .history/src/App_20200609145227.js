import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{count}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
        }}
      >
        <Button
          onClick={() => dispatch({ type: "INCREMENT" })}
          variant="primary"
          className="mr-5"
          style={{ minWidth: "100px", padding: "11px" }}
        >
          Increment
        </Button>{" "}
        <Button
          onClick={() => dispatch({ type: "DECREMENT" })}
          variant="secondary"
          className="mr-5"
          style={{ minWidth: "100px", padding: "11px" }}
        >
          Decrement
        </Button>{" "}
        <Button
          onClick={() => dispatch({ type: "RESET" })}
          variant="success"
          className="mr-5"
          style={{ minWidth: "100px", padding: "11px" }}
        >
          Reset
        </Button>{" "}
        <Form.Group>
          <Form.Control size="lg" type="text" placeholder="Large text" />
        </Form.Group>
      </div>
    </div>
  );
}

export default App;
