# React useEffect Hook Bug

This repository demonstrates a common error when using the `useEffect` hook in React:  forgetting to include an empty dependency array to trigger execution on component mount.  The initial render log is missed due to this omission.  The solution demonstrates the correct usage.

## Bug

The `bug.js` file contains the buggy implementation.  The console log inside the `useEffect` hook only fires when the `count` state variable changes, not on the initial render of the component. 

## Solution

The `bugSolution.js` file shows the corrected code. By adding an empty dependency array `[]`, the `useEffect` hook runs once after the initial render. 
