import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  const valueIsValid = validationFn(enteredValue);

  function hadleChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }
  function handleBlur() {
    setDidEdit(true);
  }
  return {
    value: enteredValue,
    hadleChange,
    handleBlur,
    hasError: didEdit && !valueIsValid,
  };
}
