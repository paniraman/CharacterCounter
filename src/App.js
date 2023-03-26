import {Component} from 'react'

import uuid from 'react-uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    picChange: false,
    charList: [],
    textCount: '',
  }

  inputText = event => {
    this.setState({textCount: event.target.value})
  }

  addChar = () => {
    const {textCount, charList} = this.state
    const totalText = [uuid(), textCount, textCount.length]
    this.setState({picChange: true, charList: [...charList, totalText]})
  }

  render() {
    const {picChange, charList} = this.state

    return (
      <div className="main-container">
        <div className="body-container">
          <div className="card1-container">
            <h1 className="heading1">Count the characters like a Boss</h1>
            {picChange ? (
              <ul className="count-container">
                {charList.map(each => (
                  <li key={each[0]}>
                    <p className="para">
                      {each[1]} : {each[2]}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="img-style"
                alt="no user inputs"
              />
            )}
          </div>
          <div className="card2-container">
            <h1 className="heading2">Character Counter</h1>
            <div className="input-container">
              <input
                type="text"
                onChange={this.inputText}
                placeholder="Enter the Characters here"
                className="input-style"
              />
              <button
                type="button"
                onClick={this.addChar}
                className="btn-style"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
