import './index.css'

const MatchCard = props => {
  const {recentMatchesList} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = recentMatchesList
  const isStatus = matchStatus === 'Lost' ? 'status-red' : ''
  return (
    <li className="match-card-list-container">
      <img
        src={competingTeamLogo}
        className="match-image"
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`status ${isStatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
