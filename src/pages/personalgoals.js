import { useState } from "react";

function Personalgoals() {
  const [newGoal, setNewGoal] = useState();
  //setNewGoal()

  return (
    <>
      <h1 className="mainHeader">Personal Goals:</h1>
      <form className="newGoalForm">
        <div className="formRow">
          <label htmlFor="goalName">Name</label>
          <input type="text" id="goalName" />
          <label htmlFor="goalStartDate">Start Date</label>
          <input type="text" id="goalStartDate" />
          <label htmlFor="goalEndDate">End Date</label>
          <input type="text" id="goalEndDate" />
        </div>
        <button className="formButton">Create</button>
      </form>

      <h1 className="listHeader">Current Goals:</h1>
      <ul>
        <li>
          <label>
            <input type=" checkbox" />
            item 1
          </label>
          <button className="editButton">edit</button>
        </li>
      </ul>
    </>
  );
}

export default Personalgoals;
