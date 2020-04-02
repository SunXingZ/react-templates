import { useState, useCallback } from "react";

const useCounter = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);

  const plus = useCallback((delta = 1) => {
    setValue((oldState) => oldState + delta);
  }, []);

  const reduce = useCallback((delta = 1) => {
    setValue((oldState) => oldState - delta);
  }, []);

  return {
    value,
    plus,
    reduce
  }
}

export default useCounter;