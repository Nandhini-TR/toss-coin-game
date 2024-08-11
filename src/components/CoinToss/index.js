import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {count: 0, isHead: true, heads: 0, tails: 0}

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        count: prevState.count + 1,
        heads: prevState.heads + 1,
        isHead: true,
      }))
    } else {
      this.setState(prevState => ({
        count: prevState.count + 1,
        tails: prevState.tails + 1,
        isHead: false,
      }))
    }
  }

  render() {
    const {count, isHead, heads, tails} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {isHead ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="image"
            />
          )}
          <button
            className="toss-button"
            type="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <p className="total">
            Total:{count} Heads:{heads} Tails:{tails}
          </p>
        </div>
      </div>
    )
  }
}

export default CoinToss
