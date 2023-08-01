import './index.css'

const ScoreItem = props => {
  const {score} = props

  return (
    <li className="score-container">
      <p className="score-text">Score: </p>
      <p className="score">{score}</p>
    </li>
  )
}

export default ScoreItem
