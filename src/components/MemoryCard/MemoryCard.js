import React from 'react';
import "./MemoryCard.css";


const MemoryCard = props => (
    <div onClick={() => props.handleClicked(props.id)} className="card">
        <div className="img-container">
        <img alt={props.name} src={props.image} />
        </div>
    </div>
)
    
export default MemoryCard;

// ref : <span onClick={() => props.removeFriend(props.id)} className="remove">
    //   𝘅
    //   </span>