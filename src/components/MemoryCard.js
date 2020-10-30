import React from "react"
import './MemoryCard.css'
// import logo from "./dc-logo.png"
import logo1 from "./disnep2.png"




class MemoryCard extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state ={
    //         isFlipped: false
    //     }
    // }
    // clickHandler = () =>{
    //     this.setState({
    //         isFlipped: !this.state.isFlipped
            
    //     } )
        
    // }
    render(){
        // let innerClass = "MemoryCard-inner" 
        // if(this.state.isFlipped === true ){
            
        //     innerClass += " flipped"
        // }
        // line31 classname should be innerClass if i wanna use above script
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={this.props.isFlipped? "MemoryCard-inner flipped" : "MemoryCard-inner"}>
                
                    <div className="MemoryCard-back">
                        <img className = "dcImg" src={logo1} alt="img of DC" />
                        
                    </div>
                    <div className="MemoryCard-front">
                        {this.props.symbol}
                    </div>

                </div>
            </div>
        )
    }
}

export default MemoryCard
