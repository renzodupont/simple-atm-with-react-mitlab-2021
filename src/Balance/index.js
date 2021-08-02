import React from "react";
import { Alert, Button } from "react-bootstrap";

const Balance = ({
  name,
  balance,
  isPinEntered,
  operation,
  onSetOperation,
}) => {
  const enterPin = (
    <Alert variant="light">
      <h3>Enter your PIN, {name}</h3>
      <i>Note: For the purpose of this demo, use 1234</i>
    </Alert>
  );

  const showOperationSelection = (
    <Alert variant="light">
      <Button
        className="keyboard-button"
        variant="success"
        onClick={() => onSetOperation(0)}
      >
        Deposit
      </Button>
      <Button
        className="keyboard-button"
        variant="secondary"
        onClick={() => onSetOperation(1)}
      >
        Cash Back
      </Button>
    </Alert>
  );

  const showBalance = (
    <Alert variant="light">
      <h3>
        {name}, your balance is: $ {balance}
      </h3>
      <Button variant="secondary" onClick={() => onSetOperation(2)}>
        Operation: {operation} - Back to Select Operation
      </Button>
    </Alert>
  );

  console.log(isPinEntered);
  console.log(operation);

  return (
    <>
      {!isPinEntered && enterPin}
      {isPinEntered && !operation && showOperationSelection}
      {isPinEntered && operation && showBalance}
    </>
  );
};

export default Balance;
