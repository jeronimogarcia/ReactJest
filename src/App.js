import React, { useState } from 'react'
import Header from './components/Header/Header'
import ToDo from './components/ToDo/ToDo'
import List from './components/ToDo/List'
import Request from './components/Request/Request'

function App() {
  const [notas, setNotas] = useState([]);
  const addNota = (nota) => {
    setNotas([...notas, nota])
  }
  return (
    <div className="App bg-gray-800 h-full">
      <Header />
      <ToDo addNota={addNota}/>
      <List notas={notas}/>
      <Request />
    </div>
  );
}

export default App;
