import useState from "react";
import noteContext from "./noteContext";

const NoteState=(props)=>{
    const notesinitial =[
        {
        "title":"My Title 1",
        "description":"Masaud is a Good Boy",
        "tag":"personal"
        },
        {
            "title":"My Title 1",
            "description":"Masaud is a Good Boy",
            "tag":"personal2"
            },
            {
                "title":"My Title 1",
                "description":"Masaud is a Good Boy"
                },
                {
                    "title":"My Title 1",
                    "description":"Masaud is a Good Boy"
                    }
    ]

const[notes,setNotes]=useState(notesinitial)

//Add Notes
const addnote =(title,description,tag)=>{
    const note={
        "_id":"5655555555555555",
        "user":"8798877777",
        "title":"My Title Added",
        "description":"Masaud is a Good Boy",
        "tag":"personal2"
        };
    setNotes(notes.concat(note))
}
//Delete Notes
const deletenote =(id)=>{
console.log("delete the notes with id" + id)
}
//Edit Notes
const editnote =()=>{
    
}

return(
    
    <noteContext.Provider value={{notes,addnote,deletenote,editnote}}>
        {props.children}
    </noteContext.Provider>
)
}


export default NoteState;