impoort React from "react"; 
import { useEffect, useRef } from "react"; 

import React from 'react'

function App() {
    useRef<HTMLInputElement>(null); 

    // After Render 
    useEffect(() => {
        //Side effect 
        if (ref.current) ref.current.focus(); 
    }); 

    useEffect( () => {
        document.title = 'My App'; 
    })

    
    
    return (
        <div>
           <input ref={ref} type="text" className="form-control" />
        </div>
    )
}




export default App; 