import "./Calculator.css";
export default function Calculator() {
  return (
<div className="Calculator">
  <h4>Eventually I want to hook this up to register.js </h4>
  <h2>Basal Metabolic Rate Calculator!</h2>
    <form className="CalculatorForm">
      <div className="Fields">
        <label>
          Enter your name:
          <input type="text" name="name"/>
        </label>
        <br/>
        <label>
          Enter your height:
          <input type="number" name="height"/>
        </label>
        <br/>
        <label>
          Enter your weight:
          <input type="number" name="weight"/>
        </label>
        <br/>
        <label>
          Enter your age:
          <input type="number" name="age"/>
        </label>
        <br/>
        <label>
          Enter your sex at birth:
          <select name="gender" id="gender">
            <option selected disabled  value=''>n/a</option>
            <option value="male">Male</option>
            <option value="female">Female</option>

        </select>
        </label>
      </div>
      {/* calculator form ends */}
    </form>  
    
</div>

  )
}
