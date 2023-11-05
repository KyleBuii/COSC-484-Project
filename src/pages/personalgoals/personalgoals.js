import { useState } from "react";

function Personalgoals() {
  //user input collection
  const [newGoalName, setName] = useState("");
  const [newGoalSDate, setSDate] = useState("");
  const [newGoalEDate, setEDate] = useState("");

  //stores created goals in an array
  const [goals, setGoals] = useState([]);

  function getRandomNumber(min, max) {
    // Generate a random number
    return Math.floor(Math.random() * (max - min) + min);
  }

  function toggleComplete(id, completed) {
    setGoals((currentList) => {
      return currentList.map((goal) => {
        if (goal === id) {
          return { ...todo, completed };
        }

        return goal;
      });
    });
  }

  function editGoal() {
    //create a pop up to overwrite seleted goal passing in an id
  }

  function deleteGoal() {
    setGoals((currentList) => {
      return currentList.filter((goal) => goal.id == id);
    });
  }

  function createGoal(e) {
    e.preventDefault();

    //gets the text from the form to create user goals
    setGoals((currentList) => {
      return [
        ...currentList,
        {
          id: getRandomNumber(1, 10000), //link to user account later
          name: newGoalName,
          start: newGoalSDate,
          target: newGoalEDate,
          completed: false,
        },
      ];
    });

    //resets the text fields
    setName("");
    setSDate("");
    setEDate("");
  }

  return (
    <>
      <h1 className="mainHeader">Personal Goals:</h1>
      <form onSubmit={createGoal} className="newGoalForm">
        <div className="formRow">
          <label htmlFor="goalName">Name</label>
          <input
            value={setName}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="goalName"
          />
          <label htmlFor="goalStartDate">Start Date</label>
          <input
            value={setSDate}
            onChange={(e) => setSDate(e.target.value)}
            type="text"
            id="goalStartDate"
          />
          <label htmlFor="goalEndDate">End Date</label>
          <input
            value={setEDate}
            onChange={(e) => setEDate(e.target.value)}
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
              <label>
                <input
                  type=" checkbox"
                  checked={goals.completed}
                  onChange={(e) => toggleComplete(goals.id, e.target.checked)}
                />
                goals.name goals.start goals.target
              </label>
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
