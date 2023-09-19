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
          return <input type="number" step="0.01" value={height} onChange={handleHeightChange} />;
        } else if (heightUnit === 'ft') {
          const feetMax = 7;  // Maximum feet value
          const feetOptions = [];
          for (let i = 0; i <= feetMax; i++) {
            feetOptions.push(<option key={i} value={i}>{i} ft</option>);
          }
      
          const inchesOptions = [];
          for (let i = 0; i < 12; i++) {
            inchesOptions.push(<option key={i} value={i}>{i} in</option>);
          }
      
          return (
            <div>
              <label>
                Feet:
                <select value={Math.floor(height)} onChange={(e) => setHeight(parseFloat(e.target.value) + (height - Math.floor(height)))}>
                  {feetOptions}
                </select>
              </label>
              <label>
                Inches:
                <select value={Math.round((height - Math.floor(height)) * 12)} onChange={(e) => setHeight(Math.floor(height) + (parseFloat(e.target.value) / 12))}>
                  {inchesOptions}
                </select>
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