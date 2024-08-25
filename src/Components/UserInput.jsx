import { useState } from "react";

export default function UserInput() {
  const [userInput, setuserInput] = useState({
    initialinvestment: 1000,
    annualinvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handelchange(inputId, newValue) {
    setuserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialinvestment}
            onChange={(event) =>
              handelchange("initialinvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualinvestment}
            onChange={(event) =>
              handelchange("annualinvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handelchange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handelchange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
