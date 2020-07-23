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
  let inputValue="";
  const changeValue=(event)=>{
    inputValue=event.target.value;
  }
  const addRecord = () => {
    if (inputValue) {
      const recordsCopy = [...records];
      recordsCopy.unshift({
        message: inputValue,
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
      <AppForm onHeaderClick={addRecord} changeValue={changeValue} />
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
