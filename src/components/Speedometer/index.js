// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAcceleration = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed >= 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="imgUrl"
          alt="speedometer"
        />

        <div>
          <h2 className="speedHead">Speed is {speed}mph</h2>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttonCon">
            <button
              className="btnAcc"
              type="submit"
              onClick={this.onAcceleration}
            >
              Accelerate
            </button>
            <button className="btnBrake" type="submit" onClick={this.onBrake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
