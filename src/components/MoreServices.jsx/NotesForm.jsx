import React from 'react'

const NotesForm = (props) => {
    const {inputValue,handleAddNote,handleInputChange}=props
  return (
    <div className='w-full'>


    <label htmlFor="message"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Text here</label>
    <textarea value={inputValue} onChange={handleInputChange} id="message" rows="10" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
    
    
    
    {/* <button>Add Note</button> */}
    
        
    <button  onClick={handleAddNote} className="mt-2 bg-blue-600 hover:bg-green-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-solid rounded">
  Add 
</button>
        </div>
  )
}

export default NotesForm;

