import React, {  useState } from 'react'

import NotesForm from './NotesForm';
import localStorage from 'local-storage'
import Note from './Note';

const Diary = () => {
  const today= new Date().toDateString();

  const [notes,setNotes]=useState(localStorage.get("notes") || []);
  const [note,setNote]=useState( "");
  



  const handleInputChange=(e)=>{
      setNote(e.target.value)
      

  }
  const handleAddNote=()=>{
    
    const updatedNotes = [...notes,{ date:today,notedata:note}];
    setNotes(updatedNotes);
    localStorage.set("notes",updatedNotes)
    setNote("");
  }

  const deleteNote = (id) => {
   const  filteredNotes= []
    for(let i=0;i<notes.length;i++){
          if(i!==id){
            filteredNotes.push(notes[i])
          }
    }
    setNotes(filteredNotes);
    localStorage.set("notes",filteredNotes)
  };


  return (
<>
  
<div className='min-h-full w-3/4 justify-center'>
    <NotesForm inputValue={ note} handleAddNote={ handleAddNote} handleInputChange={handleInputChange}/>
    <div>
      {
        notes.length!==0? notes.map(
          (mynote,index)=> {
            return <Note key={index} id={index} deleteNote={deleteNote} notedata={mynote.notedata} date={mynote.date} />
          }

          )
          :
          " No notes"
        }
    </div>
        </div>
</>
  )
}

export default Diary
