import { useEffect} from 'react'; 


const connect = () => console.log('Connecting'); 
const disconnect = () => console.log('disconnecting'); 

function App() {
  useEffect(() => {
    document.title -'My App'; 
  })
}

return (
  <div>
    
  </div>
)

export defualt App; 