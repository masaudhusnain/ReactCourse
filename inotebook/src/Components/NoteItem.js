import React from 'react'
//import noteContext from '../Context/notes/noteContext'

const NoteItem = (props) => {
    //const context = useContext(noteContext);
    //const {deletenote} = context ;
  return (
    //const {note}=props; 
    <div className = 'col-md-3'>
      
      
      <div class="card my-3">
  
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Description</p>
    <i class="fa-duotone fa-trash" ></i>
    
  </div>
</div>
    </div>
  )
}

export default NoteItem
