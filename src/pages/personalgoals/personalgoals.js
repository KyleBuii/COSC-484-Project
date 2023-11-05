import { useState } from "react";

function Personalgoals() {
  //user input collection
  const [newGoalName, setName] = useState("");
  const [newGoalStart, setStart] = useState("");
  const [newGoalEnd, setEnd] = useState("");

  //stores created goals in an array
  const [goals, setGoals] = useState([]);

  function getRandomNumber(min, max) {
    // Generate a random number
    return Math.floor(Math.random() * (max - min) + min);
  }

  function toggleComplete(id, completed) {
    setGoals((goals) => {
      return goals.map((goal) => {
        if (goal === id) {
          return { ...goals, completed };
        }

        return goal;
      });
    });
  }

  function editGoal() {
    //create a pop up to overwrite seleted goal passing in an id
  }

  function deleteGoal(id) {
    setGoals((newGoals) => {
      return newGoals.filter((goal) => goal.id !== id);
    });
  }

  function createGoal(e) {
    e.preventDefault();

    //gets the text from the form to create user goals
    setGoals((newGoals) => {
      return [
        ...newGoals,
        {
          id: getRandomNumber(1, 10000), //link to user account later
          name: newGoalName,
          start: newGoalStart,
          target: newGoalEnd,
          checked: false,
        },
      ];
    });

    //resets the text fields
    setName("");
    setStart("");
    setEnd("");
  }

  return (
    <>
      <h1 className="mainHeader">Personal Goals:</h1>
      <form onSubmit={createGoal} className="newGoalForm">
        <div className="formRow">
          <label htmlFor="goalName">Name</label>
          <input
            value={newGoalName}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="goalName"
          />
          <label htmlFor="goalStartDate">Start Date</label>
          <input
            value={newGoalStart}
            onChange={(e) => setStart(e.target.value)}
            type="text"
            id="goalStartDate"
          />
          <label htmlFor="goalEndDate">End Date</label>
          <input
            value={newGoalEnd}
            onChange={(e) => setEnd(e.target.value)}
            type="text"
            id="goalEndDate"
          />
        </div>
        <button className="formButton">Create</button>
      </form>

      <h1 className="listHeader">Current Goals:</h1>
      <ul>
        {goals.length === 0 && "No active goals"}
        {goals.map((goals) => {
          return (
            <li key={goals.id}>
              <input
                type="checkbox"
                checked={goals.completed}
                onChange={(e) => toggleComplete(goals.id, e.target.checked)}
              />
              <b>{goals.name}: </b>
              <label>Start:{goals.start} </label>
              <label>Target:{goals.target}</label>
              <button onClick={() => editGoal(goals.id)} className="editButton">
                edit
              </button>
              <button
                onClick={() => deleteGoal(goals.id)}
                className="deleteButton"
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Personalgoals;
