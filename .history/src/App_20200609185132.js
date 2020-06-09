import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function App() {
  const count = useSelector((state) => state.count);
  const color = useSelector((state) => state.color);
  const divArr = useSelector((state) => state.divArr);
  const dispatch = useDispatch();
  let divList = [];
  for (let index = 0; index < count; index++) {
    console.log(divArr["green"]);
    divList.push(
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: `${divArr[index] ? divArr[index] : color}`,
          margin: "0 auto",
          borderBottom: "1px solid black",
        }}
        value={index}
      >
        <Form.Group>
          <Form.Control
            size="lg"
            onChange={(e) => handleOnChange(e, index)}
            type="text"
            placeholder="Large text"
          />
        </Form.Group>
      </div>
    );
  }

  const handleOnChange = (e, id) => {
    console.log(id);
    dispatch({
      type: "CHANGEINDIVIDUAL",
      payload: { id: id, color: e.target.value },
    });
  };

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
              dispatch({
                type: "CHANGECOLOR",
                payload: {
                  all: e.target.value === "" ? "pink" : e.target.value,
                },
              })
            }
            type="text"
            placeholder="Large text"
          />
        </Form.Group>
      </div>
      {divList}
    </div>
  );
}

export default App;
