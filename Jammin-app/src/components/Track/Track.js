import react from 'react'; 
import './Track.css'; 


function Track({track}) {
    
        if (!track) {
            return null; // if track is undefined, return nothing. 
        }
        
        return (
        <div className="Track">
            <h3>{track.name}</h3>
            <p>{track.artis}</p>
            <p>{track.album}</p>
            <button className="Action Button">+</button>
        </div>
    ); 
}

export default Track; 