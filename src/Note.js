import React from 'react';

function Note(props) {

const deleteValue = () => {
  props.deleteItem(props.id)
};

  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br/>
        <p>
            {props.note}
        </p>
        <button className="delbtn" onClick={deleteValue}>Del</button>
      </div>
    </>
  );
}

export default Note;