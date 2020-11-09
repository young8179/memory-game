# Mickey Memory Card Game
<br>


## :book: About the project
This is a memory game made with Emojis, and it is my first project using React. Click through the cards to find the matching pair and complete the game. Hit the reset button if you’d like to start fresh.
<br>
<br>


## :hammer_and_wrench: Used Technologies
React
JavaScript
CSS
<br>
<br>


## :clipboard: Preview
![memorycard](https://user-images.githubusercontent.com/69357145/98488365-b955a000-21f6-11eb-9eee-ac7efbc87ed8.gif)

<br>
<br /> 



## 🕹 How to run
1. Fork this respository<br>
Click the Fork button on the upper right-hand side of this repository's page.
2. Clone the repository<br>
Under the repository name, click on the code button and copy the clone URL for the repository.
3. Run the file <br>
``` shell
npm start
```
<br>
<br>

## 💻Usage
```js
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
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
      newPickedCards: []
    }
  }
```
<br>


## 📔 License
This project is under MIT license. See the [license](https://opensource.org/licenses/MIT) for more information.
<br /> 
<br /> 


