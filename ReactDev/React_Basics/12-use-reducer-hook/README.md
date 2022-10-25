### useReducer Hook

- This hook is used for state management, just like `useState()` hook, more of a primitive hooks to `useState()` Hook
- The `useReducer()` Hook is based upon the `reducer()` function that is used in vanilla JS.

- The `reduce()` method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. 

- The final result of running the reducer across all elements of the array is a single value.

```
const array1 = [1, 2, 3, 4];
const initialValue = 0;

// 0 + 1 + 2 + 3 + 4
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

```

- `reduce(callbackFunction, initailValue)` takes two argument,
    - `callbackFunction(currentValue, previousValue)` - this function takes again 2 arguments. 
    - `initailValue` - value considered as baseline before calling **callbackfunction on each element on the array.**

- `useReducer(reducer, initailState)` - useReducer hooks takes two argument as well.
- `newState = reducer(currentState, action)` - `reducer` function takes in two arguments, returns newState value.
-  `[newState, dispatch]` - But useReducer returns an array just like `useState()`, with new state and a `dispatch` function.