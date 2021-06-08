import React, { useState, useEffect} from 'react';
import Header from './Header';
import Addnote from './Addnote';
import Note from './Note';

function App() {
const local_storage_key = "addEvent";

const[addEvent,addEventList]=useState([])

const addNote = (add) => {
  addEventList((preData) => {
    return[...preData,add];
  });
}

const onDelete = (id) =>{
  addEventList((oldVal) =>
  oldVal.filter((curval,indx) =>{
    return indx !== id;
  })
  );
};

useEffect(() => {
  const retriveData = JSON.parse(localStorage.getItem(local_storage_key));
  if(retriveData) addEventList(retriveData);
}, [])

useEffect(() => {
  localStorage.setItem(local_storage_key , JSON.stringify(addEvent));
}, [addEvent])

  return (
    <>
     <Header/>
     <Addnote 
       passnote = {addNote}
     />
     {addEvent.map((val,index) =>{
       return(
         <Note
           key={index}
           id={index}
           title={val.title}
           note={val.note}
           deleteItem={onDelete}
         />
       )
     })}
    </>
  );
}

export default App;
