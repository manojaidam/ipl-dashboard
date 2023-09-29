import './index.css'

const LatestMatch = props => {
  const {teamDetailsList} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = teamDetailsList

  return (
    <div className="latest-match-container">
      <div className="first-container">
        <p className="team-name">{competingTeam}</p>
        <p className="stadium-name">{date}</p>
        <p className="venue">{venue}</p>
        <p className="match-result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="team-logo-image"
        alt={`latest match ${competingTeam}`}
      />
      <div className="second-container">
        <h1 className="team-para">First Innings</h1>
        <p className="team-para-description">{firstInnings}</p>
        <h1 className="team-para">Second Innings</h1>
        <p className="team-para-description">{secondInnings}</p>
        <h1 className="team-para">Man of the match</h1>
        <p className="team-para-description">{manOfTheMatch}</p>
        <h1 className="team-para">umpires</h1>
        <p className="team-para-description">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
