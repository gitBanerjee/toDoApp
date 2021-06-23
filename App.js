import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import List from "./components/List";

const DUMMY_DATA = [];

function App() {
  const [value, setValue] = useState("");
  const [update, setUpdate] = useState(false);

  const onSubmitHandler = () => {
    if (value) {
      DUMMY_DATA.push({
        id: new Date().getTime(),
        timestamp: new Date().toLocaleTimeString(),
        data: value,
      });
      setValue("");
    }
  };
  const removeElementHandler = (id) => {
    for (let i = 0; i < DUMMY_DATA.length; i++) {
      if (DUMMY_DATA[i].id === id) {
        DUMMY_DATA.splice(i, 1);
      }
    }
    setUpdate(!update);
  };
  const formChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="App">
      <div className="container">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              To Do:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            onChange={formChangeHandler}
            value={value}
            className="form"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup.Append>
            <div className="button">
              <Button onClick={onSubmitHandler} variant="success" size="lg">
                Add
              </Button>
            </div>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <div className="container-list">
        <List data={DUMMY_DATA} remove={removeElementHandler} />
      </div>
    </div>
  );
}

export default App;
