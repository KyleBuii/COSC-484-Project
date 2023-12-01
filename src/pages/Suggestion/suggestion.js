import './suggestion.scss';
import { Component, useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IconContext } from 'react-icons';

/// Fills a select with the array
function PopulateSelect(arr, element){
    const select = document.getElementById(element);
    for(const i in arr){
        const opt = arr[i];
        const e = document.createElement("option");
        e.textContent = opt;
        e.value = opt
            .toLowerCase()
            .replace(" ", "_");
        select.appendChild(e);
    };
};

class Suggestion extends Component{
    constructor(props){
        super(props);
        this.state = {
            offset: 0
        };
        this.createCard = this.createCard.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.pageTurn = this.pageTurn.bind(this);
    };
    /// Creates an exercise card
    createCard(name, type, muscle, difficulty, equipment, instructions){
        const divCardContainer = document.createElement("div");
        /// Front of card
        const divCardName = document.createElement("div");
        divCardName.innerHTML = `
            <p>${type}, ${muscle}</p>
            <h1>${name}</h1>
        `;
        divCardName.style.borderRadius = "30px";
        divCardName.style.borderBottomWidth = "4px";
        /// Back of card
        const divCardInfo = document.createElement("div");
        divCardInfo.style.display = "none";
        divCardInfo.innerHTML = `
            <p>Equipment: ${equipment.charAt(0).toUpperCase() + equipment.slice(1).replace("_", " ")}</p>
        `;
        const ulCardInstructions = document.createElement("ol");
        ulCardInstructions.innerHTML += "Instructions:";
        instructions
            .slice(0, instructions.length-1)
            .split(".")
            .map(e => ulCardInstructions.innerHTML += "<li>" + e + "</li>")
        divCardInfo.appendChild(ulCardInstructions);
        switch(difficulty){
            case "beginner":
                divCardName.className = "card beginner";
                divCardInfo.className = "card beginner information";
                break;
            case "intermediate":
                divCardName.className = "card intermediate";
                divCardInfo.className = "card intermediate information";
                break;
            case "expert":
                divCardName.className = "card expert";
                divCardInfo.className = "card expert information";
                break;
            default:
                divCardName.className = "card";
                divCardInfo.className = "card information";
        };
        divCardContainer.appendChild(divCardName);
        divCardContainer.appendChild(divCardInfo);
        divCardName.onclick = () => {
            (divCardName.style.borderBottomWidth === "4px") ? divCardName.style.borderBottomWidth = "0px" : divCardName.style.borderBottomWidth = "4px";
            (divCardName.style.borderRadius === "30px") ? divCardName.style.borderRadius = "30px 30px 0px 0px" : divCardName.style.borderRadius = "30px";
            (divCardInfo.style.display === "none") ? divCardInfo.style.display = "block" : divCardInfo.style.display = "none";
        };
        divCardInfo.onclick = () => {
            (divCardName.style.borderBottomWidth === "4px") ? divCardName.style.borderBottomWidth = "0px" : divCardName.style.borderBottomWidth = "4px";
            (divCardName.style.borderRadius === "30px") ? divCardName.style.borderRadius = "30px 30px 0px 0px" : divCardName.style.borderRadius = "30px";
            (divCardInfo.style.display === "none") ? divCardInfo.style.display = "block" : divCardInfo.style.display = "none";
        };
        document.getElementById("cards-container").appendChild(divCardContainer);
    };
    async handleSubmit(isPageTurn){
        if(!isPageTurn && this.state.offset !== 0){
            this.setState({
                offset: 0
            });
        }
        const search = document.getElementById("suggestion-search").value
        const type = document.getElementById("suggestion-select-type").value
        const muscle = document.getElementById("suggestion-select-muscle").value
        const difficulty = document.getElementById("suggestion-select-difficulty").value
        const offset = (!isPageTurn && this.state.offset !== 0) ? 0 : this.state.offset;
        const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?'
            + 'name=' + search + '&'
            + 'type=' + type + '&'
            + 'muscle=' + muscle + '&'
            + 'difficulty=' + difficulty + '&'
            + 'offset=' + offset;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_SUGGESTION_API_KEY,
                'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
            }
        };
        try{
            document.getElementById("cards-container").innerHTML = "";
            const response = await fetch(url, options);
            const result = await response.json();
            for(const i in result){
                this.createCard(
                    result[i].name,
                    result[i].type.charAt(0).toUpperCase() + result[i].type.slice(1).replace(/[_]\w/, (x) => {
                        return " " + x.slice(1).toUpperCase();
                    }),
                    result[i].muscle.charAt(0).toUpperCase() + result[i].muscle.slice(1).replace(/[_]\w/, (x) => {
                        return " " + x.slice(1).toUpperCase();
                    }),
                    result[i].difficulty,
                    result[i].equipment,
                    result[i].instructions
                );
            };
        }catch(err){
            console.error(err);
        };
    };
    pageTurn(direction){
        if((this.state.offset >= 0 && direction === "right")
            || (this.state.offset >= 10 && direction === "left")){
            var numberOffset = 0;
            switch(direction){
                case "left":
                    numberOffset = -10;
                    break;
                case "right":
                    numberOffset = 10;
                    break;
                default:
                    break;
            };
            this.setState(prevState => ({
                offset: prevState.offset + numberOffset
            }), () => {
                this.handleSubmit(true);
            });
        };
    };
    componentDidMount(){
        this.handleSubmit(false);
        const type = ["Cardio", "Olympic Weightlifting", "Plyometrics"
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
            <div className="center">
                <div className="search-bar">
                    {/* Search */}
                    <input id="suggestion-search"
                        type="text"
                        name="search"
                        placeholder="Searh exercise"></input>
                    {/* Type */}
                    <div className="label-and-input">
                        <label htmlFor="suggestion-select-type">Type: </label>
                        <select id="suggestion-select-type"
                            name="type"
                            defaultValue="">
                            <option value="">Any</option>
                        </select>
                    </div>
                    {/* Muscle */}
                    <div className="label-and-input">
                        <label htmlFor="suggestion-select-muscle">Muscle: </label>
                        <select id="suggestion-select-muscle"
                            name="muscle"
                            defaultValue="">
                            <option value="">Any</option>
                        </select>
                    </div>
                    {/* Difficulty */}
                    <div className="label-and-input">
                        <label htmlFor="suggestion-select-difficulty">Difficulty: </label>
                        <select id="suggestion-select-difficulty"
                            name="difficulty"
                            defaultValue="">
                            <option value="">Any</option>
                        </select>
                    </div>
                    <button className="btn-search" 
                        onClick={() => this.handleSubmit(false)}>Search</button>
                </div>
                {/* Information cards */}
                <div id="cards-container"></div>
                {/* Page Buttons */}
                <div className="page-number-container">
                    <button className="btn-inverse"
                        onClick={() => this.pageTurn("left")}>
                        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                            <FaArrowLeft/>
                        </IconContext.Provider>
                    </button>
                    <p className="page-number">{this.state.offset/10}</p>
                    <button className="btn-inverse"
                        onClick={() => this.pageTurn("right")}>
                        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                            <FaArrowRight/>    
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
        );
    };
}

export default Suggestion;