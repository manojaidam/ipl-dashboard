import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBannerImage: '',
    latestMatchDetails: {},
    recentMatchesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetailsCard()
  }

  getTeamDetailsCard = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {latestMatchDetails, recentMatches, teamBannerUrl} = updatedData

    const newLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const updateRecentMatchesList = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      teamBannerImage: teamBannerUrl,
      latestMatchDetails: newLatestMatchDetails,
      recentMatchesList: updateRecentMatchesList,
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerImage,
      latestMatchDetails,
      recentMatchesList,
      isLoading,
    } = this.state

    return isLoading ? (
      <div>
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="team-matches-container">
        <img
          src={teamBannerImage}
          className="team-match-image"
          alt="team banner"
        />
        <h1 className="latest-match-heading">Latest Matches</h1>
        <LatestMatch teamDetailsList={latestMatchDetails} />
        <ul className="recent-match-list-container">
          {recentMatchesList.map(eachItemObject => (
            <MatchCard
              recentMatchesList={eachItemObject}
              key={eachItemObject.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
