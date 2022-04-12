import { useEffect } from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  let Data = [];
  const fun = async() => {
    const response = await fetch(`https://ghibliapi.herokuapp.com/films`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json',
      },
    });
    const data = await response.json()
    console.log(data)
    // setAllPost(data.mes);
    Data = data;
  }
  useEffect(() => {
    fun();
  }, [])
  
  return (
    <div>
      <Home Data = {Data}/>
    </div>
  );
}

export default App;
