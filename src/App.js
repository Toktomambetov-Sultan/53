import React, { useState } from 'react';
import AppForm from './components/AppFrom';
import Record from './components/record'
import './App.css';
import './fontawesome-free-5.14.0-web/css/all.css'

function App() {
  const [records, setRecords] = useState([
    {
      message: "Купить молоко.",
      id: 1,
    },
    {
      message: "выкинуть мусор.",
      id: 2,
    }
  ]);
  const addRecord = () => {
    const value = document.getElementById("formInput").value;
    if (value) {
      const recordsCopy = [...records];
      recordsCopy.unshift({
        message: value,
        id: new Date().getTime(),
      })
      setRecords(recordsCopy);
    }
  }
  const deleteRecord=(id)=>{
    const index = records.findIndex(record=> record.id===id);
    const recordsCopy= [...records];
    recordsCopy.splice(index,1);
    setRecords(recordsCopy);
  }

  return (
    <div>
      <AppForm onHeaderClick={addRecord} />
      <div className='container' >
        {
          records.map((record) => (
            <Record key={record.id} todo={record.message} deleteRecord={()=>deleteRecord(record.id)} />
          ))
        }
      </div>

    </div>
  );
}

export default App;
