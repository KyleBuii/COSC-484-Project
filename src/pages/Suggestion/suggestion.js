import { Component } from "react";
import './suggestion.scss';

/// Fills a select with the array
function PopulateSelect(arr, element){
    const select = document.getElementById(element);
    for(const i in arr){
        const opt = arr[i];
        const e = document.createElement("option");
        e.textContent = opt;
        e.value = opt
            .toLowerCase()
            .replace(" ", "-");
        select.appendChild(e);
    };
};

/// Creates an exercise card
function CreateCard(name, type, muscle, difficulty, equipment, instructions){
    const div = document.createElement("div");
    div.className = "card";
    switch(difficulty){
        case "beginner":
            div.className = "card beginner";
            break;
        case "intermediate":
            div.className = "card intermediate";
            break;
        case "expert":
            div.className = "card expert";
            break;
        default:
            div.className = "card";
    };
    div.innerHTML = `
        <div className="space-ends">
            <p>${type}, ${muscle}</p>
        </div>
        <h1>${name}</h1>
    `;
    document.getElementById("card-container").appendChild(div);
};

class Suggestion extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",               /// Results
            type: "",
            muscle: "",
            equipment: "",
            difficulty: "",
            instructions: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    async handleSubmit(){
        const search = document.getElementById("suggestion-search").value
        const type = document.getElementById("suggestion-select-type").value
        const muscle = document.getElementById("suggestion-select-muscle").value
        const difficulty = document.getElementById("suggestion-select-difficulty").value
        const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?'
            + 'name=' + search + '&'
            + 'type=' + type + '&'
            + 'muscle=' + muscle + '&'
            + 'difficulty=' + difficulty;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_SUGGESTION_API_KEY,
                'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
            }
        };
        try{
            document.getElementById("card-container").innerHTML = "";
            const response = await fetch(url, options);
            const result = await response.json();
            for(const i in result){
                CreateCard(
                    result[i].name,
                    result[i].type.charAt(0).toUpperCase() + result[i].type.slice(1),
                    result[i].muscle.charAt(0).toUpperCase() + result[i].muscle.slice(1),
                    result[i].difficulty,
                    result[i].equipment,
                    result[i].instructions
                );
            };
        }catch(err){
            console.error(err);
        };
    };
    componentDidMount(){
        const type = ["Cardio", "Plyometrics"
            , "Powerlifting", "Strength", "Stretching", "Strongman"];     
        const muscle = ["Abdominals", "Abductors", "Adductors", "Biceps"
            , "Calves", "Chest", "Forearms", "Glutes", "Hamstrings"
            , "Lats", "Lower Back", "Middle Back", "Neck", "Quadriceps"
            , "Traps", "Triceps"];
        const difficulty = ["Beginner", "Intermediate", "Expert"];
        /// Add options to select
        PopulateSelect(type, "suggestion-select-type");
        PopulateSelect(muscle, "suggestion-select-muscle");
        PopulateSelect(difficulty, "suggestion-select-difficulty");
    };  
    render(){
        return(
            <div>
                <div className="space-evenly">
                    {/* Search */}
                    <input id="suggestion-search"
                        type="text"
                        name="search"
                        placeholder="Searh exercise"></input>
                    {/* Type */}
                    <div>
                        <label htmlFor="suggestion-select-type">Type: </label>
                        <select id="suggestion-select-type"
                            name="type"
                            defaultValue="">
                            <option value="">Any</option>
                        </select>
                    </div>
                    {/* Muscle */}
                    <div>
                        <label htmlFor="suggestion-select-muscle">Muscle: </label>
                        <select id="suggestion-select-muscle"
                            name="muscle"
                            defaultValue="">
                            <option value="">Any</option>
                        </select>
                    </div>
                    {/* Difficulty */}
                    <div>
                        <label htmlFor="suggestion-select-difficulty">Difficulty: </label>
                        <select id="suggestion-select-difficulty"
                            name="difficulty"
                            defaultValue="">
                            <option value="">Any</option>
                        </select>
                    </div>
                    <button onClick={this.handleSubmit}>Search</button>
                </div>
                {/* Information cards */}
                <div id="card-container"></div>
            </div>
        );
    };
}

export default Suggestion;