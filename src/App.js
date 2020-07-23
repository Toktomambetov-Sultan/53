import React, { useState } from 'react';
import AppForm from './components/AppFrom';
import Record from './components/record'
import './App.css';
import './fontawesome-free-5.14.0-web/css/all.css'

function App() {
  const [records, setRecords] = useState([
    {
      message: "Купить молоко.",
      isDone: false,
      id: 1,
    },
    {
      message: "выкинуть мусор.",
      isDone: false,
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
  const changeCheck=(event,id)=>{
    const index = records.findIndex(record=> record.id===id);
    const recordsCopy=[...records];
    const recordCopy={...recordsCopy[index]};
    console.log(recordCopy.isDone);
    recordCopy.isDone= !recordCopy.isDone;
    recordsCopy[index]=recordCopy;
    setRecords(recordsCopy);
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
            <Record 
            key={record.id} 
            todo={record.message} 
            deleteRecord={()=>deleteRecord(record.id)}
            changeCheck={event=>changeCheck(event,record.id)}
            isDone={record.isDone} 
            />
          ))
        }
      </div>

    </div>
  );
}

export default App;
