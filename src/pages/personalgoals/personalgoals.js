import { useState } from "react";
import "./personalgoals.scss";

function Personalgoals() {
  const [newGoalName, setName] = useState("");
  const [newGoalStart, setStart] = useState("");
  const [newGoalEnd, setEnd] = useState("");
  const [editingGoal, setEditingGoal] = useState(null);
  const [goals, setGoals] = useState([]);

  const renderEditForm = () => {
    if (!editingGoal) return null;

    return (
      <EditForm
        goal={editingGoal}
        onSave={handleSaveEditedGoal}
        onClose={() => setEditingGoal(null)}
      />
    );
  };

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function toggleComplete(id, completed) {
    setGoals((prevGoals) =>
      prevGoals.map((goal) => (goal.id === id ? { ...goal, completed } : goal))
    );
  }

  function editGoal(id) {
    const goalToEdit = goals.find((goal) => goal.id === id);
    setEditingGoal(goalToEdit);
  }

  function EditForm({ goal, onSave, onClose }) {
    const [editedName, setEditedName] = useState(goal.name);
    const [editedStart, setEditedStart] = useState(goal.start);
    const [editedEnd, setEditedEnd] = useState(goal.target);

    const handleSave = () => {
      onSave(goal.id, editedName, editedStart, editedEnd);
      onClose();
    };

    return (
      <div className="editForm">
        <h2>Edit Goal</h2>
        <label htmlFor="editedName">Name</label>
        <input
          type="text"
          id="editedName"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
        <label htmlFor="editedStart">Start Date</label>
        <input
          type="date"
          id="editedStart"
          value={editedStart}
          onChange={(e) => setEditedStart(e.target.value)}
        />
        <label htmlFor="editedEnd">End Date</label>
        <input
          type="date"
          id="editedEnd"
          value={editedEnd}
          onChange={(e) => setEditedEnd(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    );
  }

  function handleSaveEditedGoal(id, name, start, target) {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, name, start, target } : goal
      )
    );
    setEditingGoal(null);
  }

  function deleteGoal(id) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  function createGoal(e) {
    e.preventDefault();

    if (editingGoal) {
      handleSaveEditedGoal(
        editingGoal.id,
        newGoalName,
        newGoalStart,
        newGoalEnd
      );
      setEditingGoal(null);
    } else {
      setGoals((prevGoals) => [
        ...prevGoals,
        {
          id: getRandomNumber(1, 10000),
          name: newGoalName,
          start: newGoalStart,
          target: newGoalEnd,
          completed: false,
        },
      ]);
    }

    setName("");
    setStart("");
    setEnd("");
  }

  return (
    <div className="main">
      <div className="formGroup">
        <h1 className="mainHeader">Personal Goals:</h1>
        <form onSubmit={createGoal} className="newGoalForm">
          <div className="formRow">
            <label htmlFor="goalName">Goal Name</label>
            <input
              value={newGoalName}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="goalName"
              required
            />
            <label htmlFor="goalStartDate">Start Date</label>
            <input
              value={newGoalStart}
              onChange={(e) => setStart(e.target.value)}
              type="date"
              id="goalStartDate"
              required
            />
            <label htmlFor="goalEndDate">End Date</label>
            <input
              value={newGoalEnd}
              onChange={(e) => setEnd(e.target.value)}
              type="date"
              id="goalEndDate"
              required
            />
          </div>
          <button className="formButton">
            {editingGoal ? "Save" : "Create"}
          </button>
        </form>
      </div>

      <div className="goalListGroup">
        <h1 className="listHeader">Current Goals:</h1>
        <ul>
          {goals.length === 0 && "No active goals"}
          {goals.map((goal) => (
            <li key={goal.id} className="goalListItem">
              <div className="goalText">
                <div className="goalTextNameCheck">
                  <input
                    type="checkbox"
                    checked={goal.completed}
                    onChange={() => toggleComplete(goal.id, !goal.completed)}
                  />
                  <h3>{goal.name}</h3>
                </div>
                <div>
                  <label>Start Date: {goal.start}</label>
                  <label> Target Date: {goal.target}</label>
                </div>
              </div>

              <div className="buttonContainer">
                <button
                  onClick={() => editGoal(goal.id)}
                  className="editButton"
                >
                  edit
                </button>
                <button
                  onClick={() => deleteGoal(goal.id)}
                  className="deleteButton"
                >
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {renderEditForm()}
    </div>
  );
}

export default Personalgoals;
