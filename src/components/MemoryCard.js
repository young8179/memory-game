import React from "react"
import './MemoryCard.css';
import logo from "./dc-logo.png"

class MemoryCard extends React.Component{
    render(){
        return (
            <div className="MemoryCard">
                <img className = "dcImg"src={logo}></img>
            </div>
        )
    }
}

export default MemoryCard
