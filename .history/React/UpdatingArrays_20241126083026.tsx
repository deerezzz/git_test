
import { useState} from 'react'; 
import produce from "immer"; 
import React from 'react'; 


funtion App() {
    const [bug, setBugs] =  useState([
        {id: 1, title: 'Bug 1', fixed: false},
        {id: 2, title: 'Bug 2', fixed: false}, 
    ]); 

    const handleClick = () => {
        // setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true }))


        setBugs(produce(draft => {
            draft.find(bug => bug.id === 1); 
            if (bug) bug.fixed = true; 
        }))
    }; 


    return (
    <div>
        {bug.map( bug => <p key={bug.id}>{bug.title}</p>)}
        <button onClick={handleClick}>Click Me</button>
    </div>
    )
}