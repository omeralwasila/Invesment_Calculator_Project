import UserInput from "./Components/UserInput.jsx";
import Results from "./Components/Results.jsx";
import { useState } from "react";
function App() {
  const [userInput, setuserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handelchange(inputId, newValue) {
    setuserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: +newValue,
      };
    });
  }

  return (
    <>
      <UserInput userInput={userInput} onChange={handelchange} />
      {!inputIsValid && <p className="center">Please enter Valid data</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
