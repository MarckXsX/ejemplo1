import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [Celsius, setCelsius] = useState(0);
  const [Fahrenheit, setFahrenheit] = useState(0);
  const [Kelvin, setKelvin] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
if(tipo == 1){
  setCelsius(total);
  setFahrenheit((total*1.8) + 32);
  setKelvin(total + 273.15);
}
else if(tipo ==2){
  setCelsius((total-32)/1.8);
  setFahrenheit(total);
  setKelvin(((total-32)*(5/9)+273.15));
}
else if(tipo==3){
  setCelsius(total-273.15);
  setFahrenheit(((total-273.15)*1.8)+32);
  setKelvin(total);
}
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de Temperatuas</h1>

      <p>Celsius: {Celsius}</p>
      <p>Fahrenheit: {Fahrenheit}</p>
      <p>Kelvin: {Kelvin}</p>
      
      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Celsius</option>
        <option value={2}>Fahrenheit</option>
        <option value={3}>Kelvin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
