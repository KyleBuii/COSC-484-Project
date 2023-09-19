import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('kg');  // Default weight unit
    const [heightUnit, setHeightUnit] = useState('m');  // Default height unit
  
    const handleWeightChange = (event) => {
      setWeight(event.target.value);
    };
  
    const handleHeightChange = (event) => {
      setHeight(event.target.value);
    };
  
    const handleWeightUnitChange = (event) => {
      setWeightUnit(event.target.value);
    };
  
    const handleHeightUnitChange = (event) => {
      setHeightUnit(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted:', { name, age, weight, weightUnit, height, heightUnit });
    };
  
    const renderHeightInput = () => {
      if (heightUnit === 'm') {
        return <input type="number" value={height} onChange={handleHeightChange} />;
      } else if (heightUnit === 'ft') {
        const feet = Math.floor(height);
        const inches = Math.round((height - feet) * 12);
        return (
          <div>
            <label>
              Feet:
              <input type="number" value={feet} onChange={(e) => setHeight(parseFloat(e.target.value) + (inches / 12))} />
            </label>
            <label>
              Inches:
              <input type="number" value={inches} onChange={(e) => setHeight(feet + (parseFloat(e.target.value) / 12))} />
            </label>
          </div>
        );
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          Weight:
          <input type="number" value={weight} onChange={handleWeightChange} />
          <select value={weightUnit} onChange={handleWeightUnitChange}>
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
          </select>
        </label>
        <br />
        <label>
          Height:
          {renderHeightInput()}
          <select value={heightUnit} onChange={handleHeightUnitChange}>
            <option value="m">m</option>
            <option value="ft">ft</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  

export default Register;