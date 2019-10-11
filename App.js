import React, {Component} from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      picture: "",
      name: ""
    }
  }

  updatePicture(value) {
    this.setState({
      picture : value
    })
    console.log(this.state)
  }

    updateName(value) {
      this.setState({
        name : value
      })
    }

    addFriend() {
      this.setState({
        friends:[...this.state.friends, {name: this.state.name, picture: this.state.picture}],
          name : "",
          picture : ""
      })
    }

  render() {
    const friendsMap = this.state.friends.map(friend => {
      return (
        <div>
        <img src={friend.picture}/>
        <span>{friend.name}</span>
        </div>
      )
    })
    return (
      <div className='App'>
        <p>
          Picture URL: <input value={this.state.picture} onChange={event => this.updatePicture(event.target.value)} />
        </p>
        <p>
         Name: <input value={this.state.name} onChange={event => this.updateName(event.target.value)} />
        </p>
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {friendsMap}
      </div>
    )
  }
}

export default App;