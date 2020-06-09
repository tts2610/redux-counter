import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function App() {
  const count = useSelector((state) => state.count);
  const color = useSelector((state) => state.color);
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
          onClick={() => dispatch({ type: "INCREMENT", payload: color })}
          variant="primary"
          className="mr-5"
          style={{ minWidth: "100px", padding: "11px" }}
        >
          Increment
        </Button>{" "}
        <Button
          onClick={() => dispatch({ type: "DECREMENT", payload: color })}
          variant="secondary"
          className="mr-5"
          style={{ minWidth: "100px", padding: "11px" }}
        >
          Decrement
        </Button>{" "}
        <Button
          onClick={() => dispatch({ type: "RESET", payload: color })}
          variant="success"
          className="mr-5"
          style={{ minWidth: "100px", padding: "11px" }}
        >
          Reset
        </Button>{" "}
        <Form.Group>
          <Form.Control
            size="lg"
            onChange={(e) =>
              dispatch({ type: "CHANGECOLOR", payload: e.target.value })
            }
            type="text"
            placeholder="Large text"
          />
        </Form.Group>
      </div>
      {Array(count).fill(
        console.log(count);
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: `${color}`,
            margin: "0 auto",
            borderBottom: "1px solid black",
          }}
        >
          <Form.Group>
            <Form.Control
              size="lg"
              onChange={(e) =>
                dispatch({ type: "CHANGECOLOR", payload: e.target.value })
              }
              type="text"
              placeholder="Large text"
            />
          </Form.Group>
        </div>
      )}
    </div>
  );
}

export default App;
