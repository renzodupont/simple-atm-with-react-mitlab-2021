import React from "react";
import { Button, Form } from "react-bootstrap";

const ATMInput = ({
  isPinEntered,
  operation,
  onEnter,
  onRemove,
  onButtonPressed,
}) => {
  const isOperationSet = operation !== "" && operation !== undefined;
  return (
    <>
      {(!isPinEntered || isOperationSet) && (
        <Form>
          <Form.Group className="mb-3" controlId="formAmount">
            {isPinEntered && (
              <Form.Control
                id="userInput"
                type="number"
                placeholder="Use the keyboard below"
              />
            )}
            {!isPinEntered && (
              <input
                id="userInput"
                type="password"
                className="form-control"
                placeholder="Use the keyboard below"
              />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formKeyboard">
            <Button
              className="keyboard-button"
              variant="primary"
              onClick={onButtonPressed}
            >
              1
            </Button>
            <Button
              className="keyboard-button"
              variant="primary"
              onClick={onButtonPressed}
            >
              2
            </Button>
            <Button
              className="keyboard-button"
              variant="primary"
              onClick={onButtonPressed}
            >
              3
            </Button>
            <Button
              className="keyboard-button"
              variant="primary"
              onClick={onButtonPressed}
            >
              4
            </Button>
            <Button
              className="keyboard-button"
              variant="primary"
              onClick={onButtonPressed}
            >
              5
            </Button>
            <Button
              className="keyboard-button"
              variant="primary"
              onClick={onButtonPressed}
            >
              6
            </Button>
            <Button
              className="keyboard-button"
              variant="primary"
              onClick={onButtonPressed}
            >
              7
            </Button>
            <Button
              className="keyboard-button"
              variant="primary"
              onClick={onButtonPressed}
            >
              8
            </Button>
            <Button
              className="keyboard-button"
              variant="primary"
              onClick={onButtonPressed}
            >
              9
            </Button>

            <Button
              className="keyboard-button"
              variant="success"
              onClick={onEnter}
            >
              Enter
            </Button>

            <Button
              className="keyboard-button"
              variant="danger"
              onClick={onRemove}
            >
              Remove
            </Button>
          </Form.Group>
        </Form>
      )}
      {isPinEntered && !isOperationSet && (
        <h4>Please select the action you want to perform</h4>
      )}
    </>
  );
};

export default ATMInput;
