import React from "react"
import './App.css';
import MemoryCard from "./components/MemoryCard.js"

const generateDeck = () => {
  const symbols = ["🐶", "🐼", "🐸", "🐙", "🐷", "🐻", "🐝", "🐲"]
  let deck = []
  for (let i = 0; i < 16; i++) {
    let aCard = {
      isFlipped: false,
      symbol: symbols[i % 8]
    }
    deck.push(aCard)

  }
  return shuffle(deck)
}
const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
      newPickedCards: []

      
    }

    


  }
  
  unflipCards=(card1Index, card2Index)=>{
    const card1 = {...this.state.deck[card1Index]}
    const card2 = {...this.state.deck[card2Index]}
    card1.isFlipped = false
    card2.isFlipped = false

    const newDeck = this.state.deck.map((card, index)=>{
      if(card1Index === index){
        return card1
      }
      if(card2Index === index){
        return card2
      }
      return card
    })
    // console.log("flipped")

    this.setState({deck:newDeck})
}
  pickCard=(cardIndex)=>{
    
    if(this.state.deck[cardIndex].isFlipped ){
      
      return 
    }
    const cardToFlip = {...this.state.deck[cardIndex]}
    // console.log(cardToFlip)
    cardToFlip.isFlipped = true
    let newPickedCards = this.state.pickedCards.concat(cardIndex)
    // console.log(newPickedCards)
    const newDeck = this.state.deck.map((card, index)=>{
      if(cardIndex === index){
        return cardToFlip
      }
      return card
    })
    // console.log(newDeck)
    // console.log(this.state.pickedCards)
    // console.log(newPickedCards)
    // console.log(this.state)
    if(newPickedCards.length === 2){
      const card1Index = newPickedCards[0]
      const card2Index = newPickedCards[1]
      
      if(newDeck[card1Index].symbol !== newDeck[card2Index].symbol){
        // console.log("noSame")
        setTimeout(()=>{
          this.unflipCards(card1Index, card2Index)
        },1000)
      }
      
      newPickedCards = []
    }
    return this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    })
  }
  resetGame = () => {
    this.setState({
      deck: generateDeck(),
      pickedCards: []
  })
}
  
  render() {
    const cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this, index)}/>
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="head-game">Memory Game</h1>
          <br/>
          <h3 className="subtitle">Match cards to win!</h3>


        </header>
        <div>
          <div>
            {cardsJSX.slice(0, 4)}
          </div>
          <div>
            {cardsJSX.slice(4, 8)}
          </div>
          <div>
            {cardsJSX.slice(8, 12)}
          </div>
          <div>
            {cardsJSX.slice(12, 16)}
          </div>

        </div>
        <button className="btn btn-primary reset-btn mb-5"onClick={this.resetGame} type="button">Reset Game</button>

      </div>

    )
  }
}



export default App;
