import React, { useState } from 'react';

function Addnote(props) {

const[expand,setExpand] = useState(false);

  const[add,setAdd]=useState({
    title:"",
    note:"",
  }
)  

const addTask = (event) =>{
    const{name,value}=event.target;

    setAdd((preValue) => {
        return{
            ...preValue,
            [name]:value,
        };
    });
    console.log(add);
}

const addNote = (e) => {
  e.preventDefault();
  
  if(add.title === "" || add.note === ""){
    alert("Enter Title & Note");
    return;
  }  

    props.passnote(add);
    
    setAdd({
    title:"",
    note:"",
    })
}

const expandIt = () =>{
  setExpand(true);
}

const unexpandIt = () =>{
  setExpand(false);
}

  return (
    <>
    <div className="main_note" onDoubleClick={unexpandIt}>
      <form>
      {expand?
         <input
         type="text"
        placeholder="title"
        autoComplete="off"
        name="title"
        value={add.title}
        onChange={addTask}
         />: null}

         <textarea
             rows=""
             column=""
             placeholder="Add Note..."
             name="note"
             value={add.note}
             onChange={addTask}
             onClick={expandIt}
         />
          {expand?
         <button className="btn" onClick={addNote}>
             +
         </button> : null}
      </form>
      </div>
    </>
  );
}

export default Addnote;