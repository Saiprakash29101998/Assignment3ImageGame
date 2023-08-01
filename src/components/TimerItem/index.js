import './index.css'

const TimerItem = props => {
  const {timer} = props

  return (
    <li className="score-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
        className="timer"
        alt="timer"
      />
      <p className="score">{timer} sec</p>
    </li>
  )
}

export default TimerItem
