import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamsList} = props
  const {name, teamImageUrl, id} = teamsList

  return (
    <Link to={`/team-matches/${id}`} className="nav-link">
      <li className="list-item-container">
        <img src={teamImageUrl} className="ipl-team-logo" alt={name} />
        <p className="ipl-team-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
